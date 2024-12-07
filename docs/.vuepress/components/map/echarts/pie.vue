<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import mapboxgl from 'mapbox-gl'
import turfDistance from '@turf/distance'
import { withBase } from 'vuepress/client'
import type { Position } from 'geojson'
import { STYLE } from '../../../utils/constant'
import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { TitleComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([PieChart, TitleComponent, CanvasRenderer])

interface DataProperties {
  id: string | number
  name: string
  v1: number
  v2: number
  v3: number
  coords?: Position
}

interface ClusterProperties {
  cluster: boolean
  cluster_id: number
  point_count: number
  point_count_abbreviated: number
}

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: STYLE.GRAY,
  center: [107.744809, 30.180706],
  zoom: 6,
  minZoom: 4,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  const SOURCE_ID = 'point-source'
  const PIE_WIDTH = 80
  // 弹窗
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
    offset: [0, -(PIE_WIDTH / 2)],
  })
  map.addSource(SOURCE_ID, {
    type: 'geojson',
    data: withBase('/data/point.geojson'),
    cluster: true,
    clusterRadius: 85, // 聚合半径，比饼图 DOM 略大即可
  })
  // 必须添加图层，后面才能取到要素
  map.addLayer({
    id: 'earthquake_circle',
    type: 'circle',
    source: SOURCE_ID,
    paint: {
      'circle-radius': 0, // 设置半径为 0，不显示
    },
  })

  // 数据加载或更改时，更新饼图
  map.on('data', (e) => {
    if (e.sourceId !== SOURCE_ID || !e.isSourceLoaded) return
    map.on('move', updateMarkers)
    map.on('moveend', updateMarkers)
    updateMarkers()
  })

  // 缓存所有 markers，较少重复添加，提高性能
  const markers = {}
  // 地图上显示的 markers
  let markersOnScreen = {}

  async function updateMarkers() {
    // 更新后的 markers
    const newMarkers = {}
    const features = map.querySourceFeatures(SOURCE_ID)
    const geojsonSource = map.getSource(SOURCE_ID) as mapboxgl.GeoJSONSource

    // 给所有要素添加 marker
    for (let i = 0; i < features.length; i++) {
      const feature = features[i] as GeoJSON.Feature<GeoJSON.Point>
      const coords = feature.geometry.coordinates

      let id: string | number
      let props: DataProperties

      if (feature.properties && feature.properties.cluster) {
        // 聚合要素
        id = (feature.properties as ClusterProperties).cluster_id
        // 获取聚合要素中离该点最近的点的属性
        props = await getClusterLeaves(id, geojsonSource, feature)
      } else {
        // 非聚合要素
        props = feature.properties as DataProperties
        id = props.id
      }

      let marker = markers[id]
      // 如果该要素没有对应的 marker，则新建 marker
      if (!marker) {
        props.coords = coords
        marker = markers[id] = new mapboxgl.Marker({
          element: createPieChart(props),
        }).setLngLat(coords as mapboxgl.LngLatLike)
      }
      newMarkers[id] = marker
      // 如果未添加到地图，则添加到地图
      if (!markersOnScreen[id]) {
        marker.addTo(map)
      }
    }
    // 移除不可见的 marker
    for (const id in markersOnScreen) {
      if (!newMarkers[id]) {
        markersOnScreen[id].remove()
      }
    }
    markersOnScreen = newMarkers
  }

  /**
   * 创建 echart pie
   * @param props 点属性
   */
  function createPieChart(props: DataProperties): HTMLElement {
    const el = document.createElement('div')
    el.style.width = `${PIE_WIDTH}px`
    el.style.height = `${PIE_WIDTH}px`
    const pieChart = echarts.init(el)
    const { name, coords } = props
    pieChart.setOption({
      title: {
        show: true,
        text: name.length > 4 ? `${name.substring(0, 3)}··` : name,
        left: 'center',
        top: 'center',
        textStyle: {
          fontSize: 12,
          textShadowBlur: 5,
          textShadowColor: '#3EAF7C',
        },
        padding: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowBlur: 10,
      },
      color: ['#FFD273', '#E86D68', '#A880FF'],
      series: [
        {
          type: 'pie',
          name: `${name}|${coords}`, // 将坐标放在系列名称，以便鼠标事件可以正确显示弹窗
          radius: ['40%', '96%'],
          center: ['50%', '50%'],
          hoverAnimation: false,
          label: {
            show: true,
            position: 'inside',
            formatter: '{c}',
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: props.v1, name: '土豆' },
            { value: props.v2, name: '玉米' },
            { value: props.v3, name: '红薯' },
          ],
        },
      ],
    })
    // 鼠标经过饼图显示弹窗
    pieChart.on('mouseover', (params) => {
      const { seriesName, data } = params
      const nameAndCoords = seriesName!.split('|')
      const name = nameAndCoords[0]
      const coords = nameAndCoords[1].split(',').map((item) => Number(item)) as mapboxgl.LngLatLike
      // @ts-ignore
      const description = `<p style="padding: 0 10px;">${name}: ${data.name} ${data.value} 万顷</p>`
      popup.setLngLat(coords).setHTML(description).addTo(map)
    })
    pieChart.on('mouseout', () => {
      popup.remove()
    })
    return el
  }

  /**
   * 获取离聚合点最近的要素原始属性
   * @param clusterId 聚合 id
   * @param geojsonSource GeoJSON 数据源
   * @param targetPoint 聚合点要素
   */
  function getClusterLeaves(
    clusterId: number,
    geojsonSource: mapboxgl.GeoJSONSource,
    targetPoint: GeoJSON.Feature<GeoJSON.Point>
  ): Promise<DataProperties> {
    return new Promise((resolve, reject) => {
      geojsonSource.getClusterLeaves(clusterId, 30, 0, (error, features) => {
        if (error) {
          reject(error)
        }
        // 因为聚合点与实际点有一定的偏差，这里取离聚合点最近的要素点
        let minDist = Infinity
        let nearestFeatureIndex = 0
        for (let i = 0; i < features.length; i++) {
          const distance = turfDistance(targetPoint, features[i] as GeoJSON.Feature<GeoJSON.Point>)
          if (distance < minDist) {
            nearestFeatureIndex = i
            minDist = distance
          }
        }
        const props = features[nearestFeatureIndex].properties as DataProperties
        resolve(props)
      })
    })
  }
}
</script>

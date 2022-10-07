<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup>
import baseMap from '../base-map.vue'
import { withBase } from '@vuepress/client'
import { STYLE } from '../../../utils/constant'

const mapOptions = {
  style: STYLE.DARK,
  center: [107.744809, 30.180706],
  zoom: 6,
  minZoom: 4,
}

const handleMapLoaded = (map) => {
  map.addSource('points', {
    type: 'geojson',
    data: withBase('/data/point.geojson'),
    cluster: true,
    clusterMaxZoom: 10, // 最大聚合 zoom， 超过这个值则不聚合
    clusterRadius: 50, // 聚合半径，默认 50
  })
  // 聚合图层
  map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: 'points',
    filter: ['has', 'point_count'],
    paint: {
      //   * Blue, 20px 点数量小于 5
      //   * Yellow, 30px 点数量 5 - 10
      //   * Pink, 40px circles 点数量 [10, ∞)
      'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 5, '#f1f075', 10, '#f28cb1'],
      'circle-radius': ['step', ['get', 'point_count'], 20, 5, 30, 10, 40],
    },
  })
  // 聚合数量图层
  map.addLayer({
    id: 'cluster-count',
    type: 'symbol',
    source: 'points',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12,
    },
  })
  // 不聚合图层
  map.addLayer({
    id: 'unclustered-point',
    type: 'circle',
    source: 'points',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#11b4da',
      'circle-radius': 4,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff',
    },
  })
}
</script>

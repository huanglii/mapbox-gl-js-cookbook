import mapboxgl from 'mapbox-gl'
import turfDistance from '@turf/distance'

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'

const SOURCE_ID = 'point-source'

export default function addChartPie (map, data) {
  map.addSource(SOURCE_ID, {
    'type': 'geojson',
    'data': data,
    'cluster': true,
    'clusterRadius': 65 // 聚合半径，比饼图 DOM 略大即可
  })
  map.addLayer({
    'id': 'earthquake_circle',
    'type': 'circle',
    'source': SOURCE_ID,
    'paint': {
      'circle-radius': 0
    }
  })

  // 数据加载或更改时，更新饼图
  map.on('data', e => {
    if (e.sourceId !== SOURCE_ID || !e.isSourceLoaded) return
    map.on('move', updateMarkers)
    map.on('moveend', updateMarkers)
    updateMarkers()
  })
  
  // objects for caching and keeping track of HTML marker objects (for performance)
  let markers = {}
  let markersOnScreen = {}

  async function updateMarkers () {
    let newMarkers = {}
    let features = map.querySourceFeatures(SOURCE_ID)
    let geojsonSource = map.getSource(SOURCE_ID)
    
    // for every cluster on the screen, create an HTML marker for it (if we didn't yet),
    // and add it to the map if it's not there already
    for (let i = 0; i < features.length; i++) {
      let feature = features[i]
      let coords = feature.geometry.coordinates

      let id
      let props = feature.properties
      if (props.cluster) {
        // 聚合
        id = props.cluster_id
        props = await getClusterLeaves(id, geojsonSource, feature)
      } else {
        // 非聚合
        id = props.id
        props = feature.properties
      }
      
      let marker = markers[id]
      if (!marker) {
        let el = createPieChart(props)
        marker = markers[id] = new mapboxgl.Marker({element: el}).setLngLat(coords)
      }
      newMarkers[id] = marker
      
      if (!markersOnScreen[id]) {
        marker && marker.addTo(map)
      }
    }
    // for every marker we've added previously, remove those that are no longer visible
    for (let id in markersOnScreen) {
      if (!newMarkers[id])
        markersOnScreen[id].remove()
    }
    markersOnScreen = newMarkers
  }
  
  function createPieChart (props) {
    let el = document.createElement('div')
    el.style.width = '60px'
    el.style.height = '60px'
    let pieChart = echarts.init(el)
    pieChart.setOption({
      title: {
        show: true,
        text: props.name,
        left: 'center',
        top: 'center',
        textStyle: {
          fontSize: 12
        },
        padding: 0
      },
      color: ['#FFD273', '#E86D68', '#A880FF'],
      series : [
        {
          type: 'pie',
          radius : ['40%', '95%'],
          center: ['50%', '50%'],
          hoverAnimation: false,
          label: {
            show: true,
            position: 'inside',
            formatter: '{c}'
          },
          labelLine: {
            show: false
          },
          data: [
            { value: props.v1, name: '直接访问' },
            { value: props.v2, name: '联盟广告' },
            { value: props.v3, name:'邮件营销' }
          ]
        }
      ]
    })
    return el
  }

  function getClusterLeaves(clusterId, geojsonSource, targetPoint) {
    return new Promise((resolve, reject) => {
      geojsonSource.getClusterLeaves(clusterId, 30, 0, (error, features) => {
        if (error) {
          reject(error)
        }
        // 因为聚合点与实际点有一定的偏差，这里取离聚合点最近的要素点
        let minDist = Infinity
        let nearestFeatureIndex = 0
        for (let i = 0; i < features.length; i++) {
          const distance = turfDistance(targetPoint, features[i])
          if (distance < minDist) {
            nearestFeatureIndex = i
            minDist = distance
          }
        }
        let props = features[nearestFeatureIndex].properties
        resolve(props)
      })
    })
  }
}

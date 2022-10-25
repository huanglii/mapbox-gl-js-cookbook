<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup>
import baseMap from '../../base-map.vue'

const mapOptions = {
  center: [-100.486052, 37.830348],
  zoom: 2,
}

let hoveredStateId = null

const handleMapLoaded = (map) => {
  map.addSource('states', {
    type: 'geojson',
    data: 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson',
  })
  map.addLayer({
    id: 'state-fills',
    type: 'fill',
    source: 'states',
    paint: {
      'fill-color': '#627BC1',
      'fill-opacity': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        1, // 要素状态的 hover 属性为 true 时，透明度为 1（高亮）
        0.5, // 默认 0.5
      ],
    },
  })
  // 鼠标移入 state-fill 图层时，设置当前要素的状态 hover
  map.on('mousemove', 'state-fills', (e) => {
    if (e.features.length > 0) {
      if (hoveredStateId !== null) {
        // 清除上次的要素状态
        map.setFeatureState({ source: 'states', id: hoveredStateId }, { hover: false })
      }
      // 设置当前要素状态
      hoveredStateId = e.features[0].id
      map.setFeatureState({ source: 'states', id: hoveredStateId }, { hover: true })
    }
  })

  // 鼠标移出 state-fill 图层时，清除要素状态
  map.on('mouseleave', 'state-fills', () => {
    if (hoveredStateId !== null) {
      map.setFeatureState({ source: 'states', id: hoveredStateId }, { hover: false })
    }
    hoveredStateId = null
  })
}
</script>

<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../../base-map.vue'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [-100.486052, 37.830348],
  zoom: 2,
  interactive: false,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  map.addSource('states', {
    type: 'geojson',
    data: 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson',
  })
  // 普通图层
  map.addLayer({
    id: 'state-fills',
    type: 'fill',
    source: 'states',
    paint: {
      'fill-color': '#627BC1',
      'fill-opacity': 0.5,
    },
  })
  // 高亮图层
  map.addLayer({
    id: 'state-fills-highlight',
    type: 'fill',
    source: 'states',
    paint: {
      'fill-color': '#627BC1',
      'fill-opacity': 1, // 高亮图层的透明度与原图层
    },
    filter: ['==', ['get', 'STATE_ID'], '999'], // 默认不显示任何要素
  })

  // 鼠标移入 state-fill 图层时，根据要素属性设置 state-fills-highlight 图层的 filter
  map.on('mousemove', 'state-fills', (e) => {
    if (e.features && e.features[0].properties) {
      map.setFilter('state-fills-highlight', ['==', ['get', 'STATE_ID'], e.features[0].properties['STATE_ID']])
    } else {
      map.setFilter('state-fills-highlight', ['==', ['get', 'STATE_ID'], '999'])
    }
  })
  // 鼠标移出 state-fill 图层时，过滤掉所有要素
  map.on('mouseleave', 'state-fills', () => {
    map.setFilter('state-fills-highlight', ['==', ['get', 'STATE_ID'], '999'])
  })
}
</script>

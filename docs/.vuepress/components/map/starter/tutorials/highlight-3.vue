<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import { addImages } from '../../../../utils'
import baseMap from '../../base-map.vue'
import { withBase } from 'vuepress/client'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [107.744809, 30.180706],
  zoom: 6.2,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  addImages(map, ['/assets/icons/i-star-blue.png', '/assets/icons/i-star-red.png'])

  map.addSource('city', {
    type: 'geojson',
    data: withBase('/data/point.geojson'),
    generateId: true,
  })
  map.addLayer({
    id: 'city',
    type: 'symbol',
    source: 'city',
    layout: {
      'icon-image': 'i-star-blue',
      'icon-size': 0.5,
      'icon-allow-overlap': true,
    },
  })
  // 鼠标移入 city 图层时，设置当前要素的样式
  map.on('mousemove', 'city', (e) => {
    if (e.features && e.features.length > 0) {
      map.setLayoutProperty('city', 'icon-image', ['match', ['id'], e.features[0].id, 'i-star-red', 'i-star-blue'])
      map.setLayoutProperty('city', 'icon-size', ['match', ['id'], e.features[0].id, 0.75, 0.5])
    }
  })

  // 鼠标移出 city 图层时，恢复默认样式
  map.on('mouseleave', 'city', () => {
    map.setLayoutProperty('city', 'icon-image', 'i-star-blue')
    map.setLayoutProperty('city', 'icon-size', 0.5)
  })
}
</script>

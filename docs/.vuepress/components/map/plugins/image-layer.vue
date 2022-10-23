<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup>
import { withBase } from '@vuepress/client'
import ImageLayer from '@naivemap/mapbox-gl-image-layer'
import baseMap from '../base-map.vue'

const mapOptions = {
  center: [107.744809, 30.180706],
  zoom: 6,
}
const handleMapLoaded = (map) => {
  const layer = new ImageLayer('layer-4326', {
    url: withBase('/assets/images/4326.png'),
    projection: 'EPSG:4326',
    // resampling: 'nearest',
    coordinates: [
      [105.289838, 32.204171], // top-left
      [110.195632, 32.204171], // top-right
      [110.195632, 28.164713], // bottom-right
      [105.289838, 28.164713], // bottom-left
    ],
  })

  map.addLayer(layer, 'aeroway-line')
}
</script>

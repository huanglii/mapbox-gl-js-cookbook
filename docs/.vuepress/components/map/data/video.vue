<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"> </base-map>
</template>

<script setup>
import { withBase } from '@vuepress/client'
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'

const mapOptions = {
  style: STYLE.MONOCHROME,
  center: [104.2945384995, 35.8600924965],
  zoom: 1.5,
  maxZoom: 8,
}
const handleMapLoaded = (map) => {
  map.addSource('storm-source', {
    type: 'video',
    urls: [withBase('/data/pwat_noaa.webm'), withBase('/data/pwat_noaa.mp4')],
    coordinates: [
      [-180, 70],
      [180, 70],
      [180, -70],
      [-180, -70],
    ],
  })
  map.addLayer(
    {
      type: 'raster',
      id: 'storm-layer',
      source: 'storm-source',
      paint: {
        'raster-opacity': 0.4,
      },
    },
    'water'
  )
}
</script>

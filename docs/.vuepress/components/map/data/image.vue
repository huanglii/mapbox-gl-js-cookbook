<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import { withBase } from 'vuepress/client'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [104.2945384995, 35.8600924965],
  zoom: 2.4,
}
const handleMapLoaded = (map: mapboxgl.Map) => {
  map.addLayer(
    {
      id: 'image-layer',
      type: 'raster',
      slot: 'bottom',
      source: {
        type: 'image',
        url: withBase('/assets/images/3857.png'),
        coordinates: [
          [73.50014498, 53.561438993],
          [135.088932019, 53.561438993],
          [135.088932019, 18.158746],
          [73.50014498, 18.158746],
        ],
      },
    }
  )
}
</script>

<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: {
    version: 8,
    sources: {},
    layers: [],
  },
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  map.addLayer({
    id: 'raster-tile-layer',
    type: 'raster',
    source: {
      type: 'raster',
      tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
      tileSize: 256,
    },
  })
}
</script>

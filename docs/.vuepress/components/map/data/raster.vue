<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  zoom: 2,
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
      tiles: ['https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'],
      tileSize: 256,
    },
    paint: {
      'raster-opacity': 0.8,
    },
  })
}
</script>

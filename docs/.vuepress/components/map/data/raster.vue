<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup>
import baseMap from '../base-map.vue'

const mapOptions = {
  zoom: 2,
  style: {
    version: 8,
    sources: {},
    layers: [],
  },
}

const handleMapLoaded = (map) => {
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

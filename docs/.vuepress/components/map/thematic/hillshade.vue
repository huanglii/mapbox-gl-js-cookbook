<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"></base-map>
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: {
    version: 8,
    sources: {},
    layers: [
      {
        id: 'background-layer',
        type: 'background',
        paint: {
          'background-color': '#ccc',
        },
      },
    ],
  },
  center: [107.78172288228535, 30.19406837416186],
  zoom: 10,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  map.addSource('hillshade-source', {
    type: 'raster-dem',
    url: 'mapbox://mapbox.terrain-rgb',
    tileSize: 512,
    maxzoom: 14,
  })
  map.addLayer({
    id: 'hillshade-layer',
    type: 'hillshade',
    source: 'hillshade-source',
    paint: {
      'hillshade-accent-color': '#000000',
      'hillshade-exaggeration': 1,
      'hillshade-highlight-color': '#FFFFFF',
      'hillshade-illumination-anchor': 'viewport',
      'hillshade-illumination-direction': 335,
      'hillshade-shadow-color': '#000000',
    },
  })
}
</script>

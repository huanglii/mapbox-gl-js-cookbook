<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"></base-map>
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [107.781722, 30.194068],
  zoom: 14,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  map.addSource('contours-source', {
    type: 'vector',
    url: 'mapbox://mapbox.mapbox-terrain-v2',
  })
  map.addLayer(
    {
      id: 'contours-layer',
      type: 'line',
      source: 'contours-source',
      'source-layer': 'contour',
      layout: {
        visibility: 'visible',
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': [
          'interpolate',
          ['linear'],
          ['get', 'ele'],
          100,
          '#FEF3E0',
          200,
          '#FFBD9F',
          300,
          '#F07E5C',
          400,
          '#BA1929',
          500,
          '#900502',
        ],
        'line-width': ['case', ['==', ['%', ['get', 'ele'], 100], 0], 2, 1],
      },
    },
    'poi-label'
  )
}
</script>

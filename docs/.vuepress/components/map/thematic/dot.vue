<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"></base-map>
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: STYLE.GRAY,
  center: [116.3162548, 36.9017491],
  zoom: 2,
  maxZoom: 6,
  minZoom: 1,
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  map.addSource('dot-source', {
    type: 'vector',
    url: 'mapbox://huanglii.d41k5fmy',
  })
  map.addLayer(
    {
      id: 'dot-layer',
      type: 'circle',
      source: 'dot-source',
      'source-layer': 'earthquakes-cs3906',
      paint: {
        'circle-radius': 2,
        'circle-color': ['step', ['get', 'mag'], '#0098A3', 6, '#00CA8D', 7, '#37C508', 8, '#98F300', 9, '#EFFF85'],
      },
    },
    'poi-label'
  )
}
</script>

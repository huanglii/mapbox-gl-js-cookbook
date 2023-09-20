<template>
  <base-map :map-clickable="false" :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import MapboxDraw from "@mapbox/mapbox-gl-draw"
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [107.744809, 30.180706],
  zoom: 6,
}

const handleMapLoaded = async (map: mapboxgl.Map) => {
  const draw = new MapboxDraw()

  map.addControl(draw, 'top-left')
}
</script>

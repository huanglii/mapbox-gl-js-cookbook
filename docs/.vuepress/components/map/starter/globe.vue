<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import { STYLE } from '../../../utils/constant'
import BaseMap from '../base-map.vue'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: STYLE.SATELLITE,
  zoom: 2,
  projection: { name: 'globe' },
  interactive: false,
}

function handleMapLoaded(map: mapboxgl.Map) {
  map.setFog({})
}
</script>

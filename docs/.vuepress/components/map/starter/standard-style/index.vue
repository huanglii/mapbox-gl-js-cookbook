<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import type { MapOptions } from 'mapbox-gl';
import BaseMap from '../../base-map.vue';

const mapOptions: Omit<MapOptions, 'container'> = {
  center: [2.2945, 48.8606],
  zoom: 15.4,
  pitch: 60,
}

function handleMapLoaded(map) {
  let lightPreset = 'day'
  const h = new Date().getHours()

  if (h < 4) {
    lightPreset = 'night'
  } else if (h < 5) {
    lightPreset = 'dawn'
  } else if (h < 16) {
    lightPreset = 'day'
  } else {
    lightPreset = 'night'
  }
  map.setConfigProperty('basemap', 'lightPreset', lightPreset)
}
</script>

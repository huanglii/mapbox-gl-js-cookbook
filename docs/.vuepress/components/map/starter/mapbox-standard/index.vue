<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import { withBase } from '@vuepress/client';
import BaseMap from '../../base-map.vue';

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: withBase('/mapbox/standard.json'),
  center: [2.2945, 48.8612],
  zoom: 15.4,
  pitch: 65,
}

function handleMapLoaded(map: mapboxgl.Map) {
  map.setConfigProperty('basemap', 'lightPreset', 'dusk')
}
</script>

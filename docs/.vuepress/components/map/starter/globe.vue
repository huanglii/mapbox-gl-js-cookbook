<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import MapboxStyleSwitcherControl from '../../../utils/MapboxStyleSwitcherControl';
import BaseMap from '../base-map.vue'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  zoom: 2,
  projection: { name: 'globe' },
  interactive: false,
}

function handleMapLoaded(map: mapboxgl.Map) {
  map.setFog({})
  map.addControl(new MapboxStyleSwitcherControl(), 'bottom-left')
}
</script>

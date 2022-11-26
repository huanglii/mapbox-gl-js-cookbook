<template>
  <base-map :map-options="mapOptions" />
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  style: STYLE.DARK,
  center: [104.28817, 28.48424],
  zoom: 2.8,
  minZoom: 1,
}

</script>

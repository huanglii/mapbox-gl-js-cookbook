<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from './base-map.vue'
import { STYLE } from '@/utils/constant'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: STYLE.SATELLITE,
        zoom: 1.2,
        projection: 'globe',
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      map.setFog({})
    },
  },
}
</script>

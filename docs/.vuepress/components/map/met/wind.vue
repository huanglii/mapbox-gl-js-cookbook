<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
// import addWindLayer from '../../../snippet/met/wind'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: STYLE.DARK,
        center: [104.28817, 28.48424],
        zoom: 2.8,
        minZoom: 1,
      },
    }
  },
  methods: {
    handleMapLoaded() {
      // addWindLayer(map)
    },
  },
}
</script>

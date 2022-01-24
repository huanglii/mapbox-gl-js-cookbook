<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addLineGradientLayer from '../../../snippet/data/line-gradient'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: STYLE.GRAY,
        center: [-77.03, 38.875],
        zoom: 12,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      addLineGradientLayer(map)
    },
  },
}
</script>

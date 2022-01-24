<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addCircleScatterLayer from '../../../snippet/data/circle-scatter'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: STYLE.DARK,
        center: [116.3162548, 36.9017491],
        zoom: 2,
        maxZoom: 6,
        minZoom: 1,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      addCircleScatterLayer(map)
    },
  },
}
</script>

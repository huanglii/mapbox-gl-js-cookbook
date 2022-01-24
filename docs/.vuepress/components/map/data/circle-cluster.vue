<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addCircleClusterLayer from '../../../snippet/data/circle-cluster'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: STYLE.DARK,
        center: [107.744809, 30.180706],
        zoom: 6,
        minZoom: 4,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      addCircleClusterLayer(map, this.$withBase('/data/point.geojson'))
    },
  },
}
</script>

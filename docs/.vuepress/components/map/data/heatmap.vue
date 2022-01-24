<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addHeatmapLayer from '../../../snippet/data/heatmap'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: STYLE.DARK,
        center: [-120, 50],
        zoom: 2,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      addHeatmapLayer(map)
    },
  },
}
</script>

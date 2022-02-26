<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addChartScatter from '../../../snippet/echarts/scatter'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: STYLE.GRAY,
        center: [104.114129, 37.550339],
        zoom: 2.4,
        interactive: false,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      addChartScatter(map)
    },
  },
}
</script>

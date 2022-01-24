<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addChartPie from '../../../snippet/echarts/pie'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: STYLE.GRAY,
        center: [107.744809, 30.180706],
        zoom: 6,
        minZoom: 4,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      addChartPie(map, this.$withBase('/data/point.geojson'))
    },
  },
}
</script>

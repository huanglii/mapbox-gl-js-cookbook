<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"></base-map>
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addProportionalLayer from '../../../snippet/thematic/proportional'
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
      addProportionalLayer(map, this.$withBase('/data/cq-p.geojson'))
    },
  },
}
</script>

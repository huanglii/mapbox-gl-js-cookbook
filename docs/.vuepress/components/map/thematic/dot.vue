<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"></base-map>
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addDotLayer from '../../../snippet/thematic/dot'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.GRAY,
        center: [116.3162548, 36.9017491],
        zoom: 2,
        maxZoom: 6,
        minZoom: 1
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addDotLayer(map)
    }
  }
}
</script>

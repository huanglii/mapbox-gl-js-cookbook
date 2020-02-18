<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from '../base-map'
import { STYLE } from '../../../utils/constant'
import addUniqueLayer from '../../../snippet/thematic/unique'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.SATELLITE,
        center: [124.879014, 47.816000],
        zoom: 15.2,
        minZoom: 15
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addUniqueLayer(map, this.$withBase('/data/land.geojson'))
    }
  }
}
</script>

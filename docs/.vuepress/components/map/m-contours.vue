<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"></base-map>
</template>

<script>
import baseMap from './base-map'
import addContoursLayer from '../../snippet/contours'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        center: [107.78172288228535, 30.19406837416186],
        zoom: 14,
        minZoom: 14,
        maxZoom: 14
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addContoursLayer(map)
    }
  }
}
</script>

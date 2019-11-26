<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addWFSLayer from '../../snippet/wfs'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        center: [106.57042393163124, 29.56214217800475],
        zoom: 15
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addWFSLayer(map)
    }
  }
}
</script>

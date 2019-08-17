<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addCircleLayer from '../snippet/circle'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        center: [-76.53063297271729, 39.18174077994108],
        zoom: 16
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addCircleLayer(map)
    }
  }
}
</script>

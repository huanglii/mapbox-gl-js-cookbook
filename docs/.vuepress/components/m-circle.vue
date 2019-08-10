<template>
  <base-map :container="container" :center="center" :zoom="zoom" @load="handleMapLoaded"/>
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
      container: 'm-circle',
      center: [-76.53063297271729, 39.18174077994108],
      zoom: 16
    }
  },
  methods: {
    handleMapLoaded (map) {
      addCircleLayer(map)
    }
  }
}
</script>

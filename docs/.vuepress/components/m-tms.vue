<template>
  <base-map :container="container" :center="center" :zoom="zoom" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addTMSLayer from '../snippet/tms'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-tms',
      center: [106.30486062690614, 29.56357402345421],
      zoom: 10
    }
  },
  methods: {
    handleMapLoaded (map) {
      addTMSLayer(map)
    }
  }
}
</script>

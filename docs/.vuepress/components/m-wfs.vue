<template>
  <base-map :container="container" :center="center" :zoom="zoom" ref="map" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addWFSLayer from '../snippet/wfs'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-wfs',
      center: [106.30486062690614, 29.56357402345421],
      zoom: 10
    }
  },
  methods: {
    handleMapLoaded () {
      addWFSLayer(this.$refs.map)
    }
  }
}
</script>

<template>
  <base-map :container="container" :center="center" :zoom="zoom" ref="map" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addTmsLayer from '../snippet/tms'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-tms',
      center: [106.54486062690614, 29.56357402345421],
      zoom: 7
    }
  },
  methods: {
    handleMapLoaded () {
      addTmsLayer(this.$refs.map)
    }
  }
}
</script>

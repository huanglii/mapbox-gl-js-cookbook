<template>
  <base-map :container="container" :center="center" :zoom="zoom" ref="map" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addFillLayer from '../snippet/fill'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-fill',
      center: [-68.13734351262877, 45.137451890638886],
      zoom: 5
    }
  },
  methods: {
    handleMapLoaded () {
      addFillLayer(this.$refs.map)
    }
  }
}
</script>

<template>
  <base-map :container="container" :center="center" :zoom="zoom" ref="map" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addWMTSLayer from '../snippet/wmts'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-wmts',
      center: [106.54486062690614, 29.56357402345421],
      zoom: 12
    }
  },
  methods: {
    handleMapLoaded () {
      addWMTSLayer(this.$refs.map)
    }
  }
}
</script>

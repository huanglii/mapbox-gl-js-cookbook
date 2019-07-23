<template>
  <base-map :container="container" :center="center" :zoom="zoom" ref="map" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addWMSLayer from '../snippet/wms'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-wms',
      center: [106.54486062690614, 29.56357402345421],
      zoom: 9
    }
  },
  methods: {
    handleMapLoaded () {
      addWMSLayer(this.$refs.map)
    }
  }
}
</script>

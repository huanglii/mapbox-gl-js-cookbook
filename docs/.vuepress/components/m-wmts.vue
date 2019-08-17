<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
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
      mapOptions: {
        center: [106.54486062690614, 29.56357402345421],
        zoom: 14
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addWMTSLayer(map)
    }
  }
}
</script>

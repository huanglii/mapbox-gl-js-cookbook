<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addRasterLayer from '../snippet/raster'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        zoom: 2,
        style: {
          version: 8,
          sources: {},
          layers: []
        }
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addRasterLayer(map)
    }
  }
}
</script>

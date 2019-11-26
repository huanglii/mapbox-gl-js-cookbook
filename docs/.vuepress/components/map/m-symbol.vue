<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addSymbolLayer from '../../snippet/symbol'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        center: [-77.0320, 38.9132],
        zoom: 17
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addSymbolLayer(map)
    }
  }
}
</script>

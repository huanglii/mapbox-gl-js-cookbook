<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addSymbolLayer from '../snippet/symbol'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        center: [-77.03238901390978, 38.913188059745586],
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

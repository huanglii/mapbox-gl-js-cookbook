<template>
  <base-map :container="container" :center="center" :zoom="zoom" ref="map" @load="handleMapLoaded"/>
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
      container: 'm-symbol',
      center: [-77.03238901390978, 38.913188059745586],
      zoom: 17
    }
  },
  methods: {
    handleMapLoaded () {
      addSymbolLayer(this.$refs.map)
    }
  }
}
</script>

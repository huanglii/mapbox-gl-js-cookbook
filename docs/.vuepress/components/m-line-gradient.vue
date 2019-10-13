<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addLineGradientLayer from '../snippet/line-gradient'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: 'mapbox://styles/huanglii/ck1naxpm00gvj1co6r4pxgxzl?optimize=true',
        center: [-77.030, 38.875],
        zoom: 12
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addLineGradientLayer(map)
    }
  }
}
</script>

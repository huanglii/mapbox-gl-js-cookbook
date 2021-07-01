<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from '../base-map'
import { STYLE } from '../../../utils/constant'
import addFillExtrusionLayer from '../../../snippet/data/fill-extrusion'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.GRAY,
        center: [107.744809, 30.180706],
        zoom: 6,
        pitch: 60,
        antialias: true
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addFillExtrusionLayer(map)
    }
  }
}
</script>

<template>
  <base-map :map-clickable="false" :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addLayer from '../../../snippet/deckgl/hexagon-layer'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: STYLE.DARK,
        center: [-122.441107, 37.755579],
        zoom: 11.4,
        minZoom: 8,
        pitch: 50,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      addLayer(map)
    },
  },
}
</script>

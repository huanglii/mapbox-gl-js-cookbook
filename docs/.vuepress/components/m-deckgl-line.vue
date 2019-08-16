<template>
  <base-map :container="container"
              :center="center"
              :zoom="zoom"
              :pitch="pitch"
              :mapStyle="style"
              :bearing="bearing"
              @load="handleMapLoaded">
    <canvas :id="canvasId"
            slot="custom"
            style="z-index: 2;"></canvas>
  </base-map>

</template>

<script>
import baseMap from './base-map'
import addLineLayer from '../snippet/deckgl-line'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-deckgl-line',
      center: [7, 47.65],
      zoom: 4.5,
      pitch: 50,
      bearing: 0,
      style: 'mapbox://styles/mapbox/dark-v9?optimize=true',
      canvasId: 'line-canvas'
    }
  },
  methods: {
    handleMapLoaded (map) {
      addLineLayer(map, this.canvasId)
    }
  }
}
</script>

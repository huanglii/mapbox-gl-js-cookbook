<template>
  <custom-map :container="container"
              :center="center"
              :zoom="zoom"
              :pitch="pitch"
              :mapStyle="style"
              :bearing="bearing"
              @load="handleMapLoaded">
    <canvas :id="canvasId"
            slot="custom" style="z-index: 2;"></canvas>
  </custom-map>

</template>

<script>
import customMap from './custom-map'
import addArcLayer from '../snippet/deckgl-arc'
export default {
  components: {
    customMap
  },
  data () {
    return {
      container: 'm-deckgl-arc',
      center: [-100, 40.7],
      zoom: 2.5,
      pitch: 30,
      bearing: 30,
      style: 'mapbox://styles/mapbox/light-v9?optimize=true',
      canvasId: 'arc-canvas'
    }
  },
  methods: {
    handleMapLoaded (map) {
      addArcLayer(map, this.canvasId)
    }
  }
}
</script>

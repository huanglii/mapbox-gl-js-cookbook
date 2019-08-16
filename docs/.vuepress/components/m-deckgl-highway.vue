<template>
  <custom-map :container="container"
              :center="center"
              :zoom="zoom"
              :pitch="pitch"
              :mapStyle="style"
              :bearing="bearing"
              @load="handleMapLoaded">
    <canvas :id="canvasId"
            slot="custom"
            style="z-index: 2;"></canvas>
  </custom-map>

</template>

<script>
import customMap from './custom-map'
import addHighwayLayer from '../snippet/deckgl-highway'
export default {
  components: {
    customMap
  },
  data () {
    return {
      container: 'm-deckgl-highway',
      center: [-100, 38],
      zoom: 4,
      pitch: 50,
      bearing: 0,
      style: 'mapbox://styles/mapbox/dark-v9?optimize=true',
      canvasId: 'highway-canvas'
    }
  },
  methods: {
    handleMapLoaded (map) {
      addHighwayLayer(map, this.canvasId)
    }
  }
}
</script>

<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
    <canvas :id="canvasId" slot="custom" style="z-index: 2;"></canvas>
  </base-map>
</template>

<script>
import baseMap from './base-map'
import addArcLayer from '../snippet/deckgl-arc'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: 'mapbox://styles/mapbox/light-v9?optimize=true',
        center: [-100, 40.7],
        zoom: 2.5,
        pitch: 30,
        bearing: 30
      },
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

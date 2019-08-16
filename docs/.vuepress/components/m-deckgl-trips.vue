<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
    <canvas :id="canvasId" slot="custom" style="z-index: 2;"></canvas>
  </base-map>

</template>

<script>
import baseMap from './base-map'
import addTripsLayer from '../snippet/deckgl-trips'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: 'mapbox://styles/mapbox/dark-v9?optimize=true',
        center: [7, 47.65],
        zoom: 4.5,
        pitch: 50,
        bearing: 0
      },
      canvasId: 'trips-canvas'
    }
  },
  methods: {
    handleMapLoaded (map) {
      addTripsLayer(map, this.canvasId)
    }
  }
}
</script>

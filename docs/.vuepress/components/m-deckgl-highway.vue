<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
    <canvas :id="canvasId" slot="custom" style="z-index: 2;"></canvas>
  </base-map>

</template>

<script>
import baseMap from './base-map'
import addHighwayLayer from '../snippet/deckgl-highway'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: 'mapbox://styles/mapbox/dark-v9?optimize=true',
        center: [-100, 38],
        zoom: 4,
        pitch: 50,
        bearing: 0
      },
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

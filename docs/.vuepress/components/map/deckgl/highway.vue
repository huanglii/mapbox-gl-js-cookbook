<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
    <canvas :id="canvasId" slot="custom" style="z-index: 2;"></canvas>
  </base-map>

</template>

<script>
import baseMap from '../base-map'
import { STYLE } from '../../../utils/constant'
// import addHighwayLayer from '../../../snippet/deckgl/highway'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.DARK,
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
      // addHighwayLayer(map, this.canvasId)
    }
  }
}
</script>

<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
    <canvas :id="canvasId" slot="custom" style="z-index: 2;"></canvas>
  </base-map>
</template>

<script>
import baseMap from '../base-map'
import { STYLE } from '../../../utils/constant'
import addArcLayer from '../../../snippet/deckgl/arc'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.GRAY,
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

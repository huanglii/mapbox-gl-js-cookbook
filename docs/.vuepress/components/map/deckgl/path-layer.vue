<template>
  <base-map :map-clickable="false" :map-options="mapOptions" @load="handleMapLoaded">
    <div id="pathlayer-tooltip" class="tooltip"></div>
  </base-map>
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addLayer from '../../../snippet/deckgl/path-layer'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.GRAY,
        center: [-122.275307, 37.802267],
        zoom: 9,
        minZoom: 8,
        pitch: 45,
        bearing: 30
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addLayer(map)
    }
  }
}
</script>

<style lang="scss">
.tooltip {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  padding: .5em .75em;
  background-color: #09101d;
  color: #fff;
  border-radius: 10em;
  white-space: nowrap;
  font-size: 10px;
  pointer-events: none;
}
</style>

<template>
  <base-map :height="height" :map-options="mapOptions"/>
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      height: 640,
      mapOptions: {
        style: STYLE.WATERLIGHT,
        center: [106.98044, 29.35100],
        zoom: 12.7,
        scrollZoom: false,
        doubleClickZoom: false,
        touchZoomRotate: false
      }
    }
  }
}
</script>

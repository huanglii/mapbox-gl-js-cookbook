<template>
  <base-map :height="height" :map-options="mapOptions"/>
</template>

<script>
import baseMap from './base-map'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      height: 680,
      mapOptions: {
        style: 'mapbox://styles/huanglii/cjweb960x1nbn1drxxtuaz9cr?optimize=true',
        center: [106.98044, 29.35100],
        zoom: 12.7,
        dragPan: false,
        scrollZoom: false,
        doubleClickZoom: false,
        touchZoomRotate: false
      }
    }
  }
}
</script>

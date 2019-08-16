<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addImageLayer from '../snippet/image'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        center: [104.2945384995, 35.8600924965],
        zoom: 2.4
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addImageLayer(map, this.$withBase('/images/3857.png'))
    }
  }
}
</script>

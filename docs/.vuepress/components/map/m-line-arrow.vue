<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addLineArrowLayer from '../../snippet/line-arrow'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: 'mapbox://styles/huanglii/ck1ocwsbl1fja1cloy67tyefi?optimize=true',
        center: [-122.486552, 37.831048],
        zoom: 15
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      map.loadImage(this.$withBase('/images/arrow.png'), (error, image) => {
        if (error) throw error
        map.addImage('arrow', image)
        addLineArrowLayer(map)
      })
    }
  }
}
</script>

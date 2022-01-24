<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addLineArrowLayer from '../../../snippet/data/line-arrow'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.DARK,
        center: [-122.486552, 37.831048],
        zoom: 15
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      map.loadImage(this.$withBase('/assets/images/arrow.png'), (error, image) => {
        if (error) throw error
        map.addImage('arrow', image)
        addLineArrowLayer(map)
      })
    }
  }
}
</script>

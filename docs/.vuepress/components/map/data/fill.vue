<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from '../base-map'
import { STYLE } from '../../../utils/constant'
import addFillLayer from '../../../snippet/data/fill'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.GRAY,
        center: [(105.28976 + 110.199858) / 2, (28.160225 + 32.2011870) / 2],
        zoom: 6
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addFillLayer(map, this.$withBase('/data/cq.geojson'))
    }
  }
}
</script>

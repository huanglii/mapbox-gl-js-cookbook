<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"></base-map>
</template>

<script>
import baseMap from '../base-map'
import { STYLE } from '../../../utils/constant'
import addProportionalLayer from '../../../snippet/thematic/proportional'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.GRAY,
        center: [(105.28976 + 110.199858) / 2, (28.160225 + 32.2011870) / 2],
        zoom: 6,
        minZoom: 4
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addProportionalLayer(map, this.$withBase('/data/cq-p.geojson'))
    }
  }
}
</script>

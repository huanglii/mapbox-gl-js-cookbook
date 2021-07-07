<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import { json as fetchJson } from 'd3-fetch'
import baseMap from '../base-map'
import { STYLE } from '../../../utils/constant'
import addTrackCarLayer from '../../../snippet/track/car'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: STYLE.NAVIGATION,
        center: [106.573193, 29.558285],
        zoom: 13.5
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      map.loadImage(this.$withBase('/assets/images/arrow.png'), (error, image) => {
        if (error) throw error
        map.addImage('arrow', image)
        fetchJson(this.$withBase('/data/track.geojson')).then(data => {
          addTrackCarLayer(map, data)
        })
      })
    }
  }
}
</script>

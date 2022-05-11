<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import { MapboxLayer } from '@deck.gl/mapbox'
import { ArcLayer } from '@deck.gl/layers'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: STYLE.GRAY,
        center: [-122.19, 37.75],
        zoom: 9.16,
        pitch: 30,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      /**
       * Data format:
       * [
       *   {
       *     inbound: 72633,
       *     outbound: 74735,
       *     from: {
       *       name: '19th St. Oakland (19TH)',
       *       coordinates: [-122.269029, 37.80787]
       *     },
       *     to: {
       *       name: '12th St. Oakland City Center (12TH)',
       *       coordinates: [-122.271604, 37.803664]
       *   },
       *   ...
       * ]
       */
      const layer = new MapboxLayer({
        id: 'arc-layer',
        type: ArcLayer,
        data: this.$withBase('/data/bart-segments.json'),
        getWidth: 5,
        pickable: true,
        getSourceColor: (d) => [Math.sqrt(d.inbound), 140, 0],
        getSourcePosition: (d) => d.from.coordinates,
        getTargetColor: (d) => [Math.sqrt(d.outbound), 140, 0],
        getTargetPosition: (d) => d.to.coordinates,
      })
      map.addLayer(layer)
    },
  },
}
</script>

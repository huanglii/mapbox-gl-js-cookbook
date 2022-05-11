<template>
  <base-map :map-clickable="false" :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import { MapboxLayer } from '@deck.gl/mapbox'
import { HexagonLayer } from '@deck.gl/aggregation-layers'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        style: STYLE.DARK,
        center: [-122.441107, 37.755579],
        zoom: 11.4,
        minZoom: 8,
        pitch: 50,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      /**
       * Data format:
       * [
       *   {COORDINATES: [-122.42177834, 37.78346622]},
       *   ...
       * ]
       */
      const layer = new MapboxLayer({
        id: 'hexagon-layer',
        type: HexagonLayer,
        data: '/data/sf-bike-parking.json',
        pickable: true,
        extruded: true,
        radius: 100,
        elevationScale: 5,
        colorRange: [
          [1, 152, 189],
          [73, 227, 206],
          [216, 254, 181],
          [254, 237, 177],
          [254, 173, 84],
          [209, 55, 78],
        ],
        getPosition: (d) => d.COORDINATES,
      })
      map.addLayer(layer)
    },
  },
}
</script>

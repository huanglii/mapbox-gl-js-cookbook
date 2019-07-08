<template>
  <base-map :center="center" :zoom="zoom" ref="map" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      center: [-96, 37.8],
      zoom: 3
    }
  },
  methods: {
    handleMapLoaded () {
      this.$refs.map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [-77.03238901390978, 38.913188059745586]
              },
              "properties": {
                "title": "Mapbox DC",
                "icon": "monument"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [-122.414, 37.776]
                },
              "properties": {
                "title": "Mapbox SF",
                "icon": "harbor"
              }
            }]
          }
        },
        "layout": {
        "icon-image": "{icon}-15",
        "text-field": "{title}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top"
        }
      })
    }
  }
}
</script>

<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../../base-map.vue'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [2.2945, 48.8606],
  zoom: 18,
  pitch: 60,
}

function handleMapLoaded(map: mapboxgl.Map) {
  map.on('click', e => console.log(e.lngLat))
  map.setConfigProperty('basemap', 'showPointOfInterestLabels', false)
  map.setConfigProperty('basemap', 'showPlaceLabels', false)
  map.setConfigProperty('basemap', 'showRoadLabels', false)
  map.setConfigProperty('basemap', 'showTransitLabels', false)

  map.addSource('point', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        properties: { id: 2 },
        geometry: {
          type: 'Point',
          coordinates: [2.2944, 48.8615],
        }
      }]
    }
  })
  map.addLayer({
    id: 'point-with-model',
    type: 'model',
    source: 'point',
    layout: {
      'model-id': 'pine1-lod1'
    },
    "paint": {
      "model-scale": [70.0, 50.0, 50.0],
      "model-rotation": ["match", ["%", ["get", "id"], 4],
        0, ["literal", [0.0, 0.0, 0.0]],
        1, ["literal", [0.0, 0.0, 60.0]],
        2, ["literal", [10.0, 0.0, 180.0]],
        ["literal", [0.0, -3.0, -90]]],
      "model-color": "red",
      "model-color-mix-intensity": 1.0
    }
  })
}
</script>

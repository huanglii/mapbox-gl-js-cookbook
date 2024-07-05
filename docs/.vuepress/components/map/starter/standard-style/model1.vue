<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded" />
</template>

<script setup lang="ts">
import BaseMap from '../../base-map.vue'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  "pitch": 60,
  "bearing": 0,
  "zoom": 15,
  "center": [
    -122.40784,
    37.78432
  ],
  style: {
    "version": 8,
    "metadata": {
      "test": {
        "height": 512,
        "allowed": 0.0015,
        "operations": [
          ["setPaintProperty", "tree-layer", "model-color-mix-intensity", 0.0],
          ["wait"]
        ]
      }
    },
    "sources": {
      "mapbox": {
        "type": "vector",
        "url": "mapbox://mapbox.mapbox-streets-v8"
      },
      "trees": {
        "type": "geojson",
        "data": "http://localhost:8080/mapbox-gl-js-cookbook/data/trees.geojson"
      }
    },
    "transition": {
      "duration": 0
    },
    "models": {
      "pine1-lod1": "mapbox://models/mapbox/pine1-lod1.glb",
      // "tree": "http://localhost:8080/mapbox-gl-js-cookbook/data/tree-metallic.glb",
      // "tree-diffuse": "http://localhost:8080/mapbox-gl-js-cookbook/data/tree-no-material.glb"
    },
    // "light": {
    //   "intensity": 1,
    //   "position": [1, 110, 90],
    //   "anchor": "map"
    // },
    // "fog": {
    //   "range": [-1.5, 3.0]
    // },
    "layers": [
      {
        "id": "background",
        "type": "background",
        "paint": {
          "background-color": "#aaaaaa"
        }
      },
      {
        "id": "3d-buildings",
        "source": "mapbox",
        "paint": {
          "fill-extrusion-opacity": 0.7,
          "fill-extrusion-color": "white",
          "fill-extrusion-height": [
            "number",
            [
              "get",
              "height"
            ]
          ],
          "fill-extrusion-base": [
            "number",
            [
              "get",
              "min_height"
            ]
          ]
        },
        "filter": [
          "==",
          [
            "get",
            "extrude"
          ],
          "true"
        ],
        "source-layer": "building",
        "type": "fill-extrusion"
      }
    ]
  }
}

function handleMapLoaded(map: mapboxgl.Map) {
  map.on('click', e => console.log(e.lngLat))

  map.addSource('point', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        properties: { id: 2 },
        geometry: {
          type: 'Point',
          coordinates: [-122.409721, 37.782875],
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
      "model-scale": [20.0, 20.0, 70.0],
      // "model-rotation": ["match", ["%", ["get", "id"], 4],
      //   0, ["literal", [0.0, 0.0, 0.0]],
      //   1, ["literal", [0.0, 0.0, 60.0]],
      //   2, ["literal", [10.0, 0.0, 180.0]],
      //   ["literal", [0.0, -3.0, -90]]],
      // "model-color": "red",
      // "model-color-mix-intensity": 1.0
    }
  })
  // map.setConfigProperty('basemap', 'showPointOfInterestLabels', false)
  // map.setConfigProperty('basemap', 'showPlaceLabels', false)
  // map.setConfigProperty('basemap', 'showRoadLabels', false)
  // map.setConfigProperty('basemap', 'showTransitLabels', false)

  // map.addSource('point', {
  //   type: 'geojson',
  //   data: {
  //     type: 'FeatureCollection',
  //     features: [{
  //       type: 'Feature',
  //       properties: { id: 1 },
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [2.2944, 48.8615],
  //       }
  //     }]
  //   }
  // })
  // map.addLayer({
  //   id: 'point-with-model',
  //   type: 'model',
  //   source: 'point',
  //   layout: {
  //     'model-id': 'maple1-lod1'
  //   },
  //   "paint": {
  //     "model-scale": [70.0, 50.0, 50.0],
  //     "model-rotation": ["match", ["%", ["get", "id"], 4],
  //       0, ["literal", [0.0, 0.0, 0.0]],
  //       1, ["literal", [0.0, 0.0, 60.0]],
  //       2, ["literal", [10.0, 0.0, 180.0]],
  //       ["literal", [0.0, -3.0, -90]]],
  //     "model-color": "red",
  //     "model-color-mix-intensity": 1.0
  //   }
  // })
}
</script>

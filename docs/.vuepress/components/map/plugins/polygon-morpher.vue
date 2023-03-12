<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
    <div class="control">
      <span class="control-item" @click="morph(-1)">上一个</span>
      <span class="control-item" @click="morph(1)">下一个</span>
    </div>
  </base-map>
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import PolygonMorpher from '@naivemap/mapbox-gl-polygon-morpher'
import { withBase } from '@vuepress/client'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [-73.950543, 40.76110],
  zoom: 11,
}

let features: GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>[]
let polygonMorpher: PolygonMorpher
let index = 0

const morph = (step: number) => {
  index += step
  if (index < 0) {
    index = features.length + index
  }
  if (polygonMorpher && features.length > 0) {
    polygonMorpher.morph(features[index % features.length])
  }
}

const handleMapLoaded = (map: mapboxgl.Map) => {
  map.addSource('geojson-source', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [],
    },
  })
  map.addLayer(
    {
      id: 'poly-layer',
      type: 'fill',
      source: 'geojson-source',
      paint: {
        'fill-color': 'rgba(152, 224, 173, 0.5)',
      },
    },
    'aeroway-line'
  )
  map.addLayer({
    id: 'line-layer',
    type: 'line',
    source: 'geojson-source',
    paint: {
      'line-width': 2,
      'line-color': 'rgba(255, 178, 125, 1)',
    },
  })

  const geojsonSource = map.getSource('geojson-source') as mapboxgl.GeoJSONSource
  polygonMorpher = new PolygonMorpher(geojsonSource)

  fetch(withBase('/data/ny.geojson'))
    .then((res) => res.json())
    .then((data) => {
      features = data.features
      polygonMorpher.morph(features[index])
    })
}
</script>

<style lang="scss">
.control {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);

  &-item {
    padding: 0 7px;
    line-height: 30px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
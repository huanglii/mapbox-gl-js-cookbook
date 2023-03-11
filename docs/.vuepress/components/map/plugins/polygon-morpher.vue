<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
    <div class="control">
      <div class="control-item" @click="morph(-1)">prev</div>
      <div class="control-item" @click="morph(1)">next</div>
    </div>
  </base-map>
</template>

<script setup lang="ts">
import BaseMap from '../base-map.vue'
import PolygonMorpher from '@naivemap/mapbox-gl-polygon-morpher'

const mapOptions: Omit<mapboxgl.MapboxOptions, 'container'> = {
  center: [-73.950543, 40.76110],
  zoom: 11,
}

const buildGeoJSONDistricts = (results): GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>[] => {
  return results.map((row, i) => {
    return {
      type: 'Feature',
      geometry: JSON.parse(row.boundary_simple),
      properties: row
    }
  })
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

  fetch('https://us-congress-districts.api.aclu.org/pip?min_session=86&lat=40.7306&lng=-73.9866')
    .then((res) => res.json())
    .then((data) => {
      features = buildGeoJSONDistricts(data.results)
      polygonMorpher.morph(features[index])
    })
}
</script>

<style lang="scss">
.control {
  position: absolute;
  right: 10px;
  bottom: 38px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: bold;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);

  &-item {
    padding: 4px 6px;
    cursor: pointer;

    &:not(:last-child) {
      border-bottom: 1.5px solid #ccc;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
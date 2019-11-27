import { PhongMaterial } from '@luma.gl/core'
import { MapboxLayer } from '@deck.gl/mapbox'
import { HexagonLayer } from '@deck.gl/aggregation-layers'
import * as d3 from 'd3'

export default function addHexagonLayer (map) {
  const DATA_URL = 'https://uber.osgis.cn/uber-common/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv'
  const material = new PhongMaterial({
    ambient: 0.64,
    diffuse: 0.6,
    shininess: 32,
    specularColor: [51, 51, 51]
  })
  const LIGHT_SETTINGS = {
    lightsPosition: [-0.144528, 49.739968, 8000, -3.807751, 54.104682, 8000],
    ambientRatio: 0.4,
    diffuseRatio: 0.6,
    specularRatio: 0.2,
    lightsStrength: [0.8, 0.0, 0.8, 0.0],
    numberOfLights: 2
  }
  const colorRange = [
    [1, 152, 189],
    [73, 227, 206],
    [216, 254, 181],
    [254, 237, 177],
    [254, 173, 84],
    [209, 55, 78]
  ]
  let hexagonLayer = new MapboxLayer({
    type: HexagonLayer,
    id: 'heatmap',
    data: d3.csv(DATA_URL),
    radius: 1000,
    coverage: 1,
    upperPercentile: 100,
    colorRange: colorRange,
    elevationRange: [0, 1000],
    elevationScale: 250,
    extruded: true,
    getPosition: d => [Number(d.lng), Number(d.lat)],
    lightSettings: LIGHT_SETTINGS,
    opacity: 1,
    material
  })
  map.addLayer(hexagonLayer)
}

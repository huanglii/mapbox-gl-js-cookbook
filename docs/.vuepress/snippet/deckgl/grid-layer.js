import { MapboxLayer } from '@deck.gl/mapbox'
// import { CPUGridLayer } from '@deck.gl/aggregation-layers'
import { GridCellLayer } from '@deck.gl/layers'
// import data from './data/sf-bike-parking.json'
import data from './data/hexagons.json'

export default function addLayer(map) {
  // const layer = new MapboxLayer({
  //   id: 'grid-layer',
  //   type: CPUGridLayer,
  //   data,
  //   pickable: true,
  //   extruded: true,
  //   cellSize: 200,
  //   elevationScale: 4,
  //   getPosition: d => d.COORDINATES
  // });

  const layer = new MapboxLayer({
    id: 'grid-cell-layer',
    type: GridCellLayer,
    data,
    pickable: true,
    extruded: true,
    cellSize: 200,
    elevationScale: 5000,
    getPosition: (d) => d.centroid,
    getFillColor: (d) => [48, 128, d.value * 255, 255],
    getElevation: 0,
  })

  map.addLayer(layer)
}

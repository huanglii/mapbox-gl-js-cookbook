import { lineString as lineStringHelper } from '@turf/helpers'
const lineStringCoordinates = [
  [-122.48404026031496, 37.83049717427869],
  [-122.48348236083984, 37.829920943955045],
  [-122.48356819152832, 37.82954808664175],
  [-122.48507022857666, 37.82944639795659],
  [-122.48610019683838, 37.82880236636284],
  [-122.48695850372314, 37.82931081282506],
  [-122.48700141906738, 37.83080223556934],
  [-122.48751640319824, 37.83168351665737],
  [-122.48803138732912, 37.832158048267786],
  [-122.48888969421387, 37.83297152392784],
  [-122.48987674713133, 37.83263257682617],
  [-122.49043464660643, 37.832937629287755],
  [-122.49125003814696, 37.832429207817725],
  [-122.49163627624512, 37.832564787218985]
]
export default function addLineLayer (map) {
  const linestring1 = lineStringHelper(lineStringCoordinates)
  const linestring2 = lineStringHelper(lineStringCoordinates.map(coord => {
    return [coord[0] + 0.01, coord[1]]
  }))
  const linestring3 = lineStringHelper([[-122.48163627624512, 37.832564787218985], [-122.48404026031496, 37.83049717427869]])
  map.addLayer({
    'id': 'line-layer-1',
    'type': 'line',
    'source': {
      'type': 'geojson',
      'data': linestring1
    },
    'layout': {
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#3eaf7c',
      'line-width': 4,
      'line-gap-width': 4
    }
  })
  map.addLayer({
    'id': 'line-layer-2',
    'type': 'line',
    'source': {
      'type': 'geojson',
      'data': linestring2
    },
    'paint': {
      'line-color': '#fb5614',
      'line-width': 2,
      'line-dasharray': [2, 2]
    }
  })
  map.addLayer({
    'id': 'line-layer-3',
    'type': 'line',
    'source': {
      'type': 'geojson',
      'data': linestring3
    },
    'paint': {
      'line-width': 10,
      'line-pattern': 'airport-11'
    }
  })
}

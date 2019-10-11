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
export default function addLineArrowLayer (map) {
  const linestring = lineStringHelper(lineStringCoordinates)
  map.addLayer({
    'id': 'line-layer',
    'type': 'line',
    'source': {
      'type': 'geojson',
      'lineMetrics': true,
      'data': linestring
    },
    'paint': {
      'line-width': 10,
      'line-gradient': [
        'interpolate',
        ['linear'],
        ['line-progress'],
        0, 'blue',
        0.1, 'royalblue',
        0.3, 'cyan',
        0.5, 'lime',
        0.7, 'yellow',
        1, 'red'
      ]
    },
    'layout': {
      'line-cap': 'round',
      'line-join': 'round'
    }
  })
  map.addLayer({
    'id': 'line-layer-arrow',
    'type': 'symbol',
    'source': {
      'type': 'geojson',
      'data': linestring
    },
    'layout': {
      'symbol-placement': 'line',
      'symbol-spacing': 3,
      'icon-image': 'arrow',
      'icon-size': 0.5
    }
  })
}

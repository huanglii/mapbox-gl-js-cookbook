export default function addSymbolLayer (map) {
  map.addLayer({
    'id': 'symbol-layer',
    'type': 'symbol',
    'source': {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [{
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-77.03238901390978, 38.913188059745586]
          },
          'properties': {
            'title': 'Mapbox DC',
            'icon': 'monument'
          }
        }]
      }
    },
    'paint': {
      'icon-opacity': 0.8,
      'icon-color': '#FF0000',
      'icon-halo-color': '#00FF00',
      'icon-halo-width': 5,
      'icon-halo-blur': 0.6,
      'text-opacity': 0.8,
      'text-color': '#f7c5c5',
      'text-halo-color': '#9f1919',
      'text-halo-width': 3,
      'text-halo-blur': 5
    },
    'layout': {
      'icon-size': 5,
      'icon-image': '{icon}-15',
      'icon-rotate': 30,
      'text-field': '{title}',
      'text-offset': [0, 0.6],
      'text-anchor': 'top',
      'text-size': 64
    }
  })
}

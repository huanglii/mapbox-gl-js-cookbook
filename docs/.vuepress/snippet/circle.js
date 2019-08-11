export default function addCircleLayer (map) {
  map.addLayer({
    'id': 'population',
    'type': 'circle',
    'source': {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [{
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'Point',
            'coordinates': [
              -76.53063297271729,
              39.18174077994108
            ]
          }
        }]
      }
    },
    'paint': {
      'circle-radius': 50,
      'circle-color': '#DA4949',
      'circle-opacity': 0.5,
      'circle-stroke-width': 20,
      'circle-stroke-color': '#DA4949',
      'circle-stroke-opacity': 0.2,
      'circle-blur': 0
    }
  })
}

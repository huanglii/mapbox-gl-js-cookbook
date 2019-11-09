export default function addUniqueLayer (map, data) {
  map.addSource('land', {
    'type': 'geojson',
    'data': data
  })
  map.addLayer({
    'id': 'unique',
    'type': 'fill',
    'source': 'land',
    'paint': {
      'fill-color': [
        'match',
        ['get', 'type'],
        1, '#FFD273',
        2, '#E86D68',
        3, '#A880FF',
        4, '#68E0E8',
        5, '#9BFF69',
        '#fff'
      ],
      'fill-opacity': 0.5
    }
  })
  map.addLayer({
    'id': 'unique-outline',
    'type': 'line',
    'source': 'land',
    'paint': {
      'line-color': '#FFF',
      'line-width': 1.5,
    }
  })
}

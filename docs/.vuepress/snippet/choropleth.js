export default function addChoroplethLayer (map, data) {
  map.addLayer({
    'id': 'choropleth-layer',
    'type': 'fill',
    'source': {
      'type': 'geojson',
      'data': data
    },
    'paint': {
      'fill-color': [
        'case',
        ['<', ['get', 'value'], 20], '#FFD273',
        ['<', ['get', 'value'], 40], '#E86D68',
        ['<', ['get', 'value'], 60], '#A880FF',
        ['<', ['get', 'value'], 80], '#68E0E8',
        ['<=', ['get', 'value'], 100], '#9BFF69',
        '#000'
      ],
      'fill-opacity': 0.85
    }
  }, 'poi-label')
}

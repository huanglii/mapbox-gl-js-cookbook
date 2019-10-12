export default function addProportionalLayer (map) {
  map.addLayer({
    'id': 'dot-layer',
    'type': 'circle',
    'source': {
      'type': 'geojson',
      'data': 'https://900913.cn/geoserver/buildings/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=buildings:cq_point&outputFormat=application/json'
    },
    'paint': {
      'circle-radius': 2,
      'circle-color': [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'CID']],
        0, '#FFD273',
        10, '#E86D68',
        20, '#A880FF',
        30, '#68E0E8',
        40, '#9BFF69'
      ]
    }
  }, 'poi-label')
}

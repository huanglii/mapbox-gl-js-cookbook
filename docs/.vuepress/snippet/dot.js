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
        'step',
        ['to-number', ['get', 'CID']],
        '#0098A3',
        10, '#00CA8D',
        20, '#37C508',
        30, '#98F300',
        40, '#EFFF85'
      ]
    }
  }, 'poi-label')
}

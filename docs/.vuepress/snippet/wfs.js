export default function addWFSLayer (map) {
  map.addLayer({
    'id': 'wfs-layer',
    'type': 'circle',
    'source': {
      'type': 'geojson',
      'data': 'https://900913.cn/geoserver/buildings/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=buildings:cq_point&outputFormat=application/json'
    },
    'paint': {
      'circle-radius': 5,
      'circle-color': [
        'interpolate',
        ['linear'],
        ['to-number', ['get', 'CID']],
        10, '#fbb03b',
        20, '#223b53',
        30, '#e55e5e',
        40, '#3bb2d0'
      ]
    }
  })
}

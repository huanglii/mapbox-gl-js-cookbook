export default function addWFSLayer(map) {
  map.addLayer({
    'id': 'wfs-layer',
    'type': 'circle',
    'source': {
      'type': 'geojson',
      'data': 'https://900913.cn/geoserver/buildings/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=buildings%3Acq_point&outputFormat=application%2Fjson',
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

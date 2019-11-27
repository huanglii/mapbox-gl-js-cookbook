export default function addTMSLayer (map) {
  map.addLayer({
    'id': 'tms-layer',
    'type': 'circle',
    'source': {
      'type': 'vector',
      'tiles': [
        'https://900913.cn/geoserver/gwc/service/tms/1.0.0/buildings:cq_point@EPSG:900913@pbf/{z}/{x}/{y}.pbf'
      ],
      'scheme': 'tms'
    },
    'source-layer': 'cq_point',
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

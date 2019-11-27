export default function addFillExtrusionLayer (map) {
  map.addLayer({
    'id': '3d-buildings',
    'source': {
      'type': 'vector',
      'scheme': 'tms',
      'tiles': [
        'https://900913.cn/geoserver/gwc/service/tms/1.0.0/buildings:Chongqing@EPSG:900913@pbf/{z}/{x}/{y}.pbf'
      ]
    },
    'source-layer': 'Chongqing',
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
      'fill-extrusion-color': {
        'property': 'Floor',
        'stops': [
          [0, '#6BD089'],
          [20, '#DC6C6C']
        ]
      },
      'fill-extrusion-height': [
        'interpolate', ['linear'],
        ['zoom'],
        15, 0,
        15.5, ['*', ['get', 'Floor'], 3.3]
      ],
      'fill-extrusion-base': 0,
      'fill-extrusion-opacity': 0.6
    }
  })
}

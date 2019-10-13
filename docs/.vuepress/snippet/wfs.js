export default function addWFSLayer (map) {
  map.addLayer({
    'id': 'wfs-layer',
    'type': 'fill',
    'source': {
      'type': 'vector',
      'scheme': 'tms',
      'tiles': [
        'https://900913.cn/geoserver/gwc/service/tms/1.0.0/buildings:Chongqing@EPSG:900913@pbf/{z}/{x}/{y}.pbf'
      ]
    },
    'source-layer': 'Chongqing',
    'minzoom': 15,
    'paint': {
      'fill-color': {
        'property': 'Floor',
        'stops': [
          [0, '#FFD273'],
          [5, '#E86D68'],
          [10, '#A880FF'],
          [15, '#68E0E8'],
          [20, '#9BFF69']
        ]
      }
    }
  }, 'aeroway-line')
}

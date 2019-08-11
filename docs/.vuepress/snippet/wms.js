export default function addWMSLayer (map) {
  map.addLayer({
    'id': 'wms-layer',
    'type': 'raster',
    'source': {
      'type': 'raster',
      'tiles': [
        'https://900913.cn/geoserver/ows?service=WMS&version=1.3.0&request=GetMap&layers=china_admin:Chongqing&bbox={bbox-epsg-3857}&width=512&height=512&srs=EPSG:3857&format=image%2Fpng&TRANSPARENT=TRUE'
      ]
    }
  })
}

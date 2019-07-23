export default function addWMSLayer(map) {
  map.addLayer({
    'id': 'wms-layer',
    'type': "raster",
    'source': {
      'type': 'raster',
      'tiles': [
        'https://900913.cn/geoserver/china_admin/wms?service=WMS&version=1.1.0&request=GetMap&layers=china_admin:Chongqing&bbox={bbox-epsg-3857}&width=661&height=768&srs=EPSG:3857&format=image%2Fpng&TRANSPARENT=TRUE'
      ]
    }
  })
}

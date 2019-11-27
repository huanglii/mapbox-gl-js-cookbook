export default function addRasterLayer (map) {
  map.addLayer({
    'id': 'raster-layer',
    'type': 'raster',
    'source': {
      'type': 'raster',
      'tiles': [
        'https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'
      ],
      'tileSize': 256
    }
  })
}

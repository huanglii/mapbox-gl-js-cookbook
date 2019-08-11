export default function addImageLayer (map, url) {
  map.addLayer({
    'id': 'image-layer',
    'type': 'raster',
    'source': {
      'type': 'image',
      'url': url,
      'coordinates': [
        [73.5001449800, 53.5614389930],
        [135.088932019, 53.5614389930],
        [135.088932019, 18.158746],
        [73.5001449800, 18.158746]
      ]
    }
  }, 'aeroway-line')
}

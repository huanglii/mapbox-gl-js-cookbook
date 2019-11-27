export default function addVideoLayer (map, urls) {
  map.addSource('storm-source', {
    type: 'video',
    urls: urls,
    coordinates: [[-180, 70], [180, 70], [180, -70], [-180, -70]]
  })
  map.addLayer({
    type: 'raster',
    id: 'storm-layer',
    source: 'storm-source',
    paint: {
      'raster-opacity': 0.4
    }
  }, 'water')
}

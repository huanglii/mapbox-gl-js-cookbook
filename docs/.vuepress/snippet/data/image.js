export default function addImageLayer(map, url) {
  map.addLayer(
    {
      id: 'image-layer',
      type: 'raster',
      source: {
        type: 'image',
        url: url,
        coordinates: [
          [73.50014498, 53.561438993],
          [135.088932019, 53.561438993],
          [135.088932019, 18.158746],
          [73.50014498, 18.158746],
        ],
      },
    },
    'aeroway-line'
  )
}

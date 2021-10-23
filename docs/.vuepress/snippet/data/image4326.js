import StaticImageSource from 'mapbox-gl-static-image-source'

export default function addImageLayer (map, url) {
  const imageStaticSource = new StaticImageSource({
    crossOrigin: 'anonymous',
    url: url,
    projection: 'EPSG:4326',
    imageExtent: [105.289838, 28.164713, 110.195632, 32.204171]
  })
  imageStaticSource.addEventListener('load', (e) => {
    map.addSource('canvas-source', e.target)
    map.addLayer(
      {
        id: 'canvas-layer',
        type: 'raster',
        source: 'canvas-source',
      },
      'aeroway-line'
    )
  })
}

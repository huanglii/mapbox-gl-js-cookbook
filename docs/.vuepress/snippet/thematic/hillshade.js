export default function addHillshadeLayer (map) {
  map.addSource('mapbox-dem', {
    type: 'raster-dem',
    // url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
    url: 'mapbox://mapbox.terrain-rgb',
    tileSize: 512,
    maxzoom: 14
  })
  map.addLayer({
    id: 'hillshade-layer',
    type: 'hillshade',
    source: 'mapbox-dem',
    paint: {
      'hillshade-accent-color': '#000000',
      'hillshade-exaggeration': 1,
      'hillshade-highlight-color': '#FFFFFF',
      'hillshade-illumination-anchor': 'viewport',
      'hillshade-illumination-direction': 335,
      'hillshade-shadow-color': '#000000'
    }
  })
}

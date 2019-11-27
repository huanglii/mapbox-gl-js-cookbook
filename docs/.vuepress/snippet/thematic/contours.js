export default function addContoursLayer (map) {
  map.addLayer({
    'id': 'contours-layer',
    'type': 'line',
    'source': {
      'type': 'vector',
      'url': 'mapbox://mapbox.mapbox-terrain-v2'
    },
    'source-layer': 'contour',
    'layout': {
      'visibility': 'visible',
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': [
        'interpolate',
        ['linear'],
        ['get', 'ele'],
        100, '#FEF3E0',
        200, '#FFBD9F',
        300, '#F07E5C',
        400, '#BA1929',
        500, '#900502'
      ],
      'line-width': [
        'case',
        ['==', ['%', ['get', 'ele'], 100], 0], 2,
        1
      ]
    }
  }, 'poi-label')
}

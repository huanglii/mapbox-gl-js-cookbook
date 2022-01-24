export default function addProportionalLayer(map) {
  map.addLayer(
    {
      id: 'dot-layer',
      type: 'circle',
      source: {
        type: 'vector',
        url: 'mapbox://huanglii.d41k5fmy',
      },
      'source-layer': 'earthquakes-cs3906',
      paint: {
        'circle-radius': 2,
        'circle-color': [
          'step',
          ['get', 'mag'],
          '#0098A3',
          6,
          '#00CA8D',
          7,
          '#37C508',
          8,
          '#98F300',
          9,
          '#EFFF85',
        ],
      },
    },
    'poi-label'
  )
}

export default function addFillExtrusionLayer(map) {
  map.addLayer({
    id: 'fill-extrusion-layer',
    source: {
      type: 'vector',
      url: 'mapbox://huanglii.cjoqm2qim06da31o04srwixea-4ejbx',
    },
    'source-layer': 'cq',
    type: 'fill-extrusion',
    minzoom: 5,
    paint: {
      'fill-extrusion-color': {
        property: 'Shape_Area',
        stops: [
          [0, '#6BD089'],
          [0.2, '#DC6C6C'],
        ],
      },
      'fill-extrusion-height': [
        'interpolate',
        ['linear'],
        ['zoom'],
        5,
        0,
        8,
        ['*', ['get', 'Shape_Area'], 100000],
      ],
      'fill-extrusion-base': 0,
      'fill-extrusion-opacity': 0.6,
    },
  })
}

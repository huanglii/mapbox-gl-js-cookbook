const MAX_R = 15 // 最大半径
const MIN_R = 5 // 最小半径
const MAX_V = 100 // 字段最大值
const MIN_V = 0 // 字段最小值

export default function addProportionalLayer (map, data) {
  map.addLayer({
    'id': 'proportion-layer',
    'type': 'circle',
    'source': {
      'type': 'geojson',
      'data': data
    },
    'paint': {
      // 'circle-radius': (MAX_R - MIN_R) / (MAX_V - MIN_V) * (V - MIN_V) + MIN_R,
      'circle-radius': [
        '+',
        ['*',
          [
            '/',
            ['-', MAX_R, MIN_R],
            ['-', MAX_V, MIN_V]
          ],
          ['-', ['get', 'value'], MIN_V]
        ],
        MIN_R
      ],
      'circle-color': [
        'interpolate',
        ['linear'],
        ['get', 'value'],
        0, '#FFD273',
        25, '#E86D68',
        50, '#A880FF',
        75, '#68E0E8',
        100, '#9BFF69'
      ],
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff'
    }
  })
}

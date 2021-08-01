import { WindLayer } from '@sakitam-gis/mapbox-wind'
import windData from './data/wind.json'

const data = windData.map((item, idx) => {
  item.header = Object.assign(item.header, {
    parameterCategory: 1,
    parameterNumber: idx === 0 ? 2 : 3
  })
  return item
})

const addWindLayer = (map) => {
  const windLayer = new WindLayer('wind', data, {
    windOptions: {
      globalAlpha: 0.9,
      velocityScale: 0.02,
      paths: 4000,
      minVelocity: 0,
      maxVelocity: 10,
      colorScale: [
        'rgb(36,104, 180)',
        'rgb(60,157, 194)',
        'rgb(128,205,193 )',
        'rgb(151,218,168 )',
        'rgb(198,231,181)',
        'rgb(238,247,217)',
        'rgb(255,238,159)',
        'rgb(252,217,125)',
        'rgb(255,182,100)',
        'rgb(252,150,75)',
        'rgb(250,112,52)',
        'rgb(245,64,32)',
        'rgb(237,45,28)',
        'rgb(220,24,32)',
        'rgb(180,0,35)'
      ]
    }
  })
  map.addLayer(windLayer)
}

export default addWindLayer

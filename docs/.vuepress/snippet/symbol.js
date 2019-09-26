import { point as pointHelper } from '@turf/helpers'

export default function addSymbolLayer (map) {
  const point1 = pointHelper([-77.0320, 38.9130], {
    'title': 'Mapbox DC',
    'icon': 'park'
  })
  const point2 = pointHelper([-77.0320, 38.9134])

  // 扩散点
  const size = 200
  let pulsingDot = {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),
    
    onAdd: function() {
      var canvas = document.createElement('canvas')
      canvas.width = this.width
      canvas.height = this.height
      this.context = canvas.getContext('2d')
    },
    
    render: function() {
      var duration = 1000
      var t = (performance.now() % duration) / duration
      
      var radius = size / 2 * 0.3
      var outerRadius = size / 2 * 0.7 * t + radius
      var context = this.context
      
      // draw outer circle
      context.clearRect(0, 0, this.width, this.height)
      context.beginPath()
      context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2)
      context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')'
      context.fill()
      
      // draw inner circle
      context.beginPath()
      context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2)
      context.fillStyle = 'rgba(255, 100, 100, 1)'
      context.strokeStyle = 'white'
      context.lineWidth = 2 + 4 * (1 - t)
      context.fill()
      context.stroke()
      
      // update this image's data with data from the canvas
      this.data = context.getImageData(0, 0, this.width, this.height).data
      
      // keep the map repainting
      map.triggerRepaint()
      
      // return `true` to let the map know that the image was updated
      return true
    }
  }
  // 普通图标
  map.addLayer({
    'id': 'symbol-layer',
    'type': 'symbol',
    'source': {
      'type': 'geojson',
      'data': point1
    },
    'paint': {
      'icon-opacity': 0.8,
      'icon-color': '#FF0000',
      'icon-halo-color': '#00FF00',
      'icon-halo-width': 5,
      'icon-halo-blur': 0.6,
      'text-opacity': 0.8,
      'text-color': '#f7c5c5',
      'text-halo-color': '#9f1919',
      'text-halo-width': 3,
      'text-halo-blur': 5
    },
    'layout': {
      'icon-size': 2,
      'icon-image': '{icon}-15',
      'icon-rotate': 30,
      'text-field': '{title}',
      'text-offset': [0, 0.6],
      'text-anchor': 'top',
      'text-size': 32
    }
  })
  // 自定义动画图标
  map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 })
  map.addLayer({
    'id': 'pulsing-dot-layer',
    'type': 'symbol',
    'source': {
      'type': 'geojson',
      'data': point2
    },
    'layout': {
      'icon-image': 'pulsing-dot'
    }
  })
}

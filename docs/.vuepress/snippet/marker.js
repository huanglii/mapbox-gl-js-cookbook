import mapboxgl from 'mapbox-gl'
const points = [
  {
    'iconSize': [80, 80],
    'coordinates': [-66.324462890625, -16.024695711685304]
  },
  {
    'iconSize': [60, 60],
    'coordinates': [-61.2158203125, -15.97189158092897]
  },
  {
    'iconSize': [50, 50],
    'coordinates': [-63.29223632812499, -18.28151823530889]
  }
]
export default function addMarker (map) {
  points.forEach(point => {
    let el = document.createElement('div')
    el.className = 'marker'
    el.style.width = `${point.iconSize[0]}px`
    el.style.height = `${point.iconSize[1]}px`
    let img = document.createElement('img')
    img.src = `https://placekitten.com/g/${point.iconSize.join('/')}/`
    el.appendChild(img)
    // el.style.backgroundImage = `url(https://placekitten.com/g/${point.iconSize.join('/')}/)`

    new mapboxgl.Marker(el)
      .setLngLat(point.coordinates)
      .addTo(map)
  })
}

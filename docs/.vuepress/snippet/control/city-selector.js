import CitySelectorControl from 'city-selector-control'
import 'city-selector-control/dist/style.css'

export default function addCitySeletorControl(map) {
  map.addControl(new CitySelectorControl(), 'top-right')
}

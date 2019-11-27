import CitySelectorControl from 'city-selector-control'
import 'city-selector-control/style.css'

export default function addCitySeletorControl (map) {
  map.addControl(new CitySelectorControl(), 'top-right')
}

import mapboxgl from 'mapbox-gl'
import * as THREE from 'three'
import GJV from 'geojson-validation'

class Text3DLayer {
  constructor (options) {
    this.options = options

    this.id = this.options.id || 'custom-layer'
    this.type = 'custom'
    this.renderingMode = '3d'

    this.camera = new THREE.Camera()
    // this.camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 0.000000000001, Infinity)

    this.scene = new THREE.Scene()
    this.world = new THREE.Group()
    this.scene.add(this.world)

    this.raycaster = new THREE.Raycaster()
  }

  onAdd (map, gl) {
    this.map = map
    this._addTextGeometry()
    this.renderer = new THREE.WebGLRenderer({
      canvas: map.getCanvas(),
      context: gl,
      antialias: true
    })
    this.renderer.autoClear = false
  }

  render (gl, matrix) {
    const m = new THREE.Matrix4().fromArray(matrix)
    const l = new THREE.Matrix4().makeTranslation(
      this.modelTransform.translateX,
      this.modelTransform.translateY,
      this.modelTransform.translateZ
    ).scale(new THREE.Vector3(this.modelTransform.scale, -this.modelTransform.scale, this.modelTransform.scale))

    this.camera.projectionMatrix = m.multiply(l)
    this.renderer.state.reset()
    this.renderer.render(this.scene, this.camera)
  }

  // 取不到对象，原因未知
  queryRenderedFeatures (point) {
    let mouse = new THREE.Vector2()
    // scale mouse pixel position to a percentage of the screen's width and height
    mouse.x = ( point.x / this.map.transform.width ) * 2 - 1;
    mouse.y = 1 - ( point.y / this.map.transform.height ) * 2;

    this.raycaster.setFromCamera(mouse, this.camera)

    // calculate objects intersecting the picking ray
    let intersects = this.raycaster.intersectObjects(this.world.children, true)

    return intersects
  }

  _addTextGeometry () {
    let features = []
    const sourceOption = this.options['source']
    if (Object.prototype.toString.call(sourceOption) === '[object String]') {
      // 数据源 id
      features = this.map.getSource(this.options['source'])._data.features
    } else if (GJV.valid(sourceOption)) {
      // geojson
      features = sourceOption.features
    }
    if (features.length === 0) {
      return
    }

    // 取第一个要素点为参考点，计算平移参数
    let refPoint = features[0].geometry.coordinates
    let refMecCoord = mapboxgl.MercatorCoordinate.fromLngLat(refPoint, 0)
    let refScale = refMecCoord.meterInMercatorCoordinateUnits()
    this.modelTransform = {
      translateX: refMecCoord.x,
      translateY: refMecCoord.y,
      translateZ: refMecCoord.z,
      scale: refScale
    }

    const { style } = this.options
    for (let i = 0; i < features.length; i++) {
      const feature = features[i]
      const { properties, geometry } = feature

      const text = this._getPropertyValue(properties, style['text'])
      const heightOffset = this._getPropertyValue(properties, style['height-offset']) || 0
      const height = this._getPropertyValue(properties, style['height']) + heightOffset
      const color = this._getPropertyValue(properties, style['text-color'])
      const fontSize = this._getPropertyValue(properties, style['font-size']) || 4

      const coordinates = geometry.coordinates
      const mecCoord = mapboxgl.MercatorCoordinate.fromLngLat(coordinates, height)

      const textBufferGeometry = new THREE.TextBufferGeometry(text, {
        font: this.options.font,
        size: fontSize,
        height: 0
      })
      const material = new THREE.MeshBasicMaterial({ color })
      const mesh = new THREE.Mesh(textBufferGeometry, material)
      mesh.position.x = (mecCoord.x - refMecCoord.x) / refScale
      mesh.position.y = -(mecCoord.y - refMecCoord.y) / refScale
      mesh.position.z = (mecCoord.z - refMecCoord.z) / refScale
      this.world.add(mesh)
    }
  }

  _getPropertyValue (prop, con) {
    if (Array.isArray(con) && con[0] === 'get') {
      return prop[con[1]]
    }
    return con
  }
}

export default Text3DLayer

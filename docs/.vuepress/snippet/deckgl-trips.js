import { Deck } from '@deck.gl/core';
import { PhongMaterial } from '@luma.gl/core';
import { AmbientLight, PointLight, LightingEffect } from '@deck.gl/core';
import { PolygonLayer } from '@deck.gl/layers';
import { TripsLayer } from '@deck.gl/geo-layers';

// Source data CSV
const DATA_URL = {
  BUILDINGS:
    'https://uber.osgis.cn/uber-common/deck.gl-data/master/examples/trips/buildings.json', // eslint-disable-line
  TRIPS:
    'https://uber.osgis.cn/uber-common/deck.gl-data/master/examples/trips/trips-v7.json' // eslint-disable-line
};

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0
});

const pointLight = new PointLight({
  color: [255, 255, 255],
  intensity: 2.0,
  position: [-74.05, 40.7, 8000]
});

const lightingEffect = new LightingEffect({ ambientLight, pointLight });

const material = new PhongMaterial({
  ambient: 0.1,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [60, 64, 70]
});

const DEFAULT_THEME = {
  buildingColor: [74, 80, 87],
  trailColor0: [253, 128, 93],
  trailColor1: [23, 184, 190],
  material,
  effects: [lightingEffect]
};

const INITIAL_VIEW_STATE = {
  longitude: -74,
  latitude: 40.72,
  zoom: 13,
  pitch: 45,
  bearing: 0
};

const landCover = [[[-74.0, 40.7], [-74.02, 40.7], [-74.02, 40.72], [-74.0, 40.72]]];


export default function addLineLayer (map, id) {
  const buildings = DATA_URL.BUILDINGS,
    trips = DATA_URL.TRIPS,
    trailLength = 180,
    theme = DEFAULT_THEME

  const groundLayer = new PolygonLayer({
    id: 'ground',
    data: landCover,
    getPolygon: f => f,
    stroked: false,
    getFillColor: [0, 0, 0, 0]
  })

  const buildingsLayer = new PolygonLayer({
    id: 'buildings',
    data: buildings,
    extruded: true,
    wireframe: false,
    opacity: 0.5,
    getPolygon: f => f.polygon,
    getElevation: f => f.height,
    getFillColor: theme.buildingColor,
    material: theme.material
  })

  const tripsLayer = new TripsLayer({
    id: 'trips',
    data: trips,
    getPath: d => d.path,
    getTimestamps: d => d.timestamps,
    getColor: d => (d.vendor === 0 ? theme.trailColor0 : theme.trailColor1),
    opacity: 0.3,
    widthMinPixels: 2,
    rounded: true,
    trailLength,
    currentTime: 1,
    shadowEnabled: false
  })

  const animate = () => {
    const loopLength = 1800, // unit corresponds to the timestamp in source data
      animationSpeed = 30 // unit time per second

    const timestamp = Date.now() / 1000;
    const loopTime = loopLength / animationSpeed;
    let time = ((timestamp % loopTime) / loopTime) * loopLength

    let _props = {}
    Object.assign(_props, tripsLayer.props, { 'currentTime': time, data: trips })
    const layers = [new TripsLayer(_props), groundLayer, buildingsLayer]
    deck.setProps({ layers })

    let animationFrame = window.requestAnimationFrame(animate);
  }

  let deck = new Deck({
    canvas: id,
    id: id,
    width: '100%',
    height: '100%',
    style: { postion: 'relative', top: '0px' },
    initialViewState: INITIAL_VIEW_STATE,
    controller: true,
    onViewStateChange: ({ viewState }) => {
      map.jumpTo({
        center: [viewState.longitude, viewState.latitude],
        zoom: viewState.zoom,
        bearing: viewState.bearing,
        pitch: viewState.pitch
      });
    },
    effects: theme.effects,
    layers: [
      tripsLayer,
      groundLayer,
      buildingsLayer
    ]
  })
  animate()
}

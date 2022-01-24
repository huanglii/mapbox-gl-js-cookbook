<template>
  <base-map :map-options="mapOptions" :map-clickable="false" @load="handleMapLoaded" />
</template>

<script>
import baseMap from '../base-map.vue'
import addText3DLayer from '../../../snippet/threejs/text-3d'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      mapOptions: {
        center: [-87.61694, 41.86625],
        zoom: 17.5,
        pitch: 30,
        bearing: 20,
        antialias: true,
      },
    }
  },
  methods: {
    handleMapLoaded(map) {
      map.removeLayer('poi-label')
      addText3DLayer(map, this.$withBase('/fonts/PangMenZhengDao_Regular.json'))
    },
  },
}
</script>

<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
    <div class="legend custom">
      <div class="legend-item" v-for="(item, index) in legends" :key="index">
        <span class="square" :style="{backgroundColor: item[1]}"></span>
        <span class="text">{{ item[0] }}</span>
      </div>
    </div>
  </base-map>
</template>

<script>
import baseMap from './base-map'
import addChoroplethLayer from '../snippet/choropleth'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: 'mapbox://styles/huanglii/ck1naxpm00gvj1co6r4pxgxzl?optimize=true',
        center: [(105.28976 + 110.199858) / 2, (28.160225 + 32.2011870) / 2],
        zoom: 6,
        minZoom: 4
      },
      legends: [
        ['0-20', '#FFD273'],
        ['20-40', '#E86D68'],
        ['40-60', '#A880FF'],
        ['60-80', '#68E0E8'],
        ['80-100', '#9BFF69']
      ]
    }
  },
  methods: {
    handleMapLoaded (map) {
      addChoroplethLayer(map, this.$withBase('/data/cq.geojson'))
    }
  }
}
</script>

<style lang="less">
.legend.custom {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>

<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
    <div class="legend">
      <div class="legend-item" @click="setFilter('0-100')">
        <span class="square"></span>
        <span class="text">全部值</span>
      </div>
      <div class="legend-item" v-for="(item, index) in legends" :key="index"
        @click="setFilter(item[0])">
        <span class="square" :style="{backgroundColor: item[1]}"></span>
        <span class="text">{{ item[0] }}</span>
      </div>
    </div>
  </base-map>
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addChoroplethLayer from '../../../snippet/thematic/choropleth'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      map: undefined,
      mapOptions: {
        style: STYLE.GRAY,
        center: [107.744809, 30.180706],
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
      this.map = map
      addChoroplethLayer(map, this.$withBase('/data/cq.geojson'))
    },
    setFilter (value) {
      let prop = value.split('-')
      this.map.setFilter('choropleth-layer', [
        'all',
        ['>=', ['get', 'value'], prop[0] - 0],
        ['<', ['get', 'value'], prop[1] - 0]
      ])
    }
  }
}
</script>


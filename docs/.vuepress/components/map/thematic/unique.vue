<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
    <div class="legend custom">
      <div class="legend-item" @click="setFilter('')">
        <span class="square"></span>
        <span class="text">全部值</span>
      </div>
      <div
        v-for="(item, index) in legends"
        :key="index"
        class="legend-item"
        @click="setFilter(item[0])"
      >
        <span class="square" :style="{ backgroundColor: item[1] }"></span>
        <span class="text">{{ item[0] }}</span>
      </div>
    </div>
  </base-map>
</template>

<script>
import baseMap from '../base-map.vue'
import { STYLE } from '../../../utils/constant'
import addUniqueLayer from '../../../snippet/thematic/unique'
export default {
  components: {
    baseMap,
  },
  data() {
    return {
      map: undefined,
      mapOptions: {
        style: STYLE.SATELLITE,
        center: [124.879014, 47.816],
        zoom: 15.2,
        minZoom: 15,
      },
      legends: [
        [1, '#FFD273'],
        [2, '#E86D68'],
        [3, '#A880FF'],
        [4, '#68E0E8'],
        [5, '#9BFF69'],
      ],
    }
  },
  methods: {
    handleMapLoaded(map) {
      this.map = map
      addUniqueLayer(map, this.$withBase('/data/land.geojson'))
    },
    setFilter(value) {
      const filter = value ? [value] : [1, 2, 3, 4, 5]
      this.map.setFilter('unique', ['in', 'type', ...filter])
    },
  },
}
</script>

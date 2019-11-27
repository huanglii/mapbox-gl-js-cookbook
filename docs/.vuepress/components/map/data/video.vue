<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded">
  </base-map>
</template>

<script>
import baseMap from '../base-map'
import addVideoLayer from '../../../snippet/data/video'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      height: 800,
      mapOptions: {
        style: 'mapbox://styles/huanglii/ck3gplwrs0baz1cpe6mgy8aap?optimize=true',
        center: [104.2945384995, 35.8600924965],
        zoom: 1.5,
        maxZoom: 8
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      let urls = [
        this.$withBase('/data/pwat_noaa.webm'),
        this.$withBase('/data/pwat_noaa.mp4')
      ]
      addVideoLayer(map, urls)
    }
  }
}
</script>

<style lang="less" scoped>
.legend {
  position: absolute;
  right: 10px;
  bottom: 28px;
  font-size: 12px;
  &-item {
    padding: 3px 0;
    .circle {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 2px;
      border-radius: 50%;
    }
    .text {
      color: #496C8A;
    }
  }
}
</style>

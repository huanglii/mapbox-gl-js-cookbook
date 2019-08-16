<template>
  <base-map :height="height" :map-options="mapOptions" @load="handleMapLoaded">
    <div class="legend">
      <div class="legend-item" v-for="(item, index) in legendStrong" :key="index">
        <span class="circle" :style="{backgroundColor: item[1]}"></span>
        <span class="text">{{ item[0] }}</span>
      </div>
    </div>
  </base-map>
</template>

<script>
import baseMap from './base-map'
import addTyphoonLayer from '../snippet/typhoon'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      height: 800,
      mapOptions: {
        style: 'mapbox://styles/huanglii/cjz3skxz325xf1cp7vk8sq49i?optimize=true',
        center: [124.90, 28.55],
        zoom: 4.2,
        maxZoom: 8
      },
      // 台风强度
      legendStrong: [
        ['热带低压', '#00FEDF'],
        ['热带风暴', '#FEF300'],
        ['强热带风暴', '#FE902C'],
        ['台风', '#FE0404'],
        ['强台风', '#FE3AA3'],
        ['超强台风', '#AE00D9']
      ],
      // 预报机构
      legendAgency: [
        ['中国', '#FF4050'],
        ['中国香港', '#FF66FF'],
        ['中国台湾', '#FFA040'],
        ['日本', '#43FF4B'],
        ['美国', '#40DDFF']
      ]
    }
  },
  methods: {
    handleMapLoaded (map) {
      map.loadImage(this.$withBase('/images/typhoon.png'), (error, image) => {
        if (error) throw error
        map.addImage('typhoon', image)
        map.addSource('storm-source', {
          type: 'video',
          urls: [this.$withBase('/data/pwat_noaa.webm'), this.$withBase('/data/pwat_noaa.mp4')],
          coordinates: [[-180, 70], [180, 70], [180, -70], [-180, -70]]
        })
        map.addLayer({
          type: 'raster',
          id: 'storm-layer',
          source: 'storm-source',
          paint: {
            'raster-opacity': 0.4
          }
        }, 'water')
        addTyphoonLayer(map)
      })
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

<template>
  <base-map :height="height" :map-options="mapOptions" @load="handleMapLoaded">
    <div class="legend custom">
      <div class="legend-item" v-for="(item, index) in legendStrong" :key="index">
        <span class="circle" :style="{backgroundColor: item[1]}"></span>
        <span class="text">{{ item[0] }}</span>
      </div>
    </div>
  </base-map>
</template>

<script>
import baseMap from '../base-map'
import { STYLE } from '../../../utils/constant'
import addTyphoonLayer from '../../../snippet/track/typhoon'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      height: 800,
      mapOptions: {
        style: STYLE.MONOCHROME,
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

<style lang="less">
.legend.custom {
  .text {
    color: #496C8A;
  }
}
</style>

<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
  name: 'SwiperView',
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper, 
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.isLoad = true;
        this.$emit('swiperImgLoad')
      }
    }
  },
}
</script>
<style scoped>
</style>

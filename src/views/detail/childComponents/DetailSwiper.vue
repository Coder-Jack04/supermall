<template>
  <div class='detail-swiper'>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in topImg" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  data(){
    return {}
  },
  props: {
    topImg: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper, 
    SwiperItem
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
  .detail-swiper {
    height: 400px;
    overflow: hidden;
  }
</style>

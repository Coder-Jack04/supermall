<template>
  <div class='detail'>
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImg="topImg"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :goodsInfo="goodsInfo"></detail-goods-info>
      <detail-param-info :goodsParam="goodsParam"></detail-param-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar.vue'
import DetailSwiper from './childComponents/DetailSwiper.vue'
import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
import DetailShopInfo from './childComponents/DetailShopInfo.vue'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo.vue'
import DetailParamInfo from './childComponents/DetailParamInfo.vue'

import Scroll from 'components/common/scroll/Scroll.vue'

import {getDetailData, Goods, Shop, GoodsParam} from 'network/detail.js'
export default {
  name: 'Detail',
  data(){
    return {
      iid: 0,
      topImg: null,
      goods: {},
      shop: {},
      goodsInfo: {},
      goodsParam: {},
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo, 
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
  },
  created(){
    // 获取点击过来的商品的具体id
    this.iid = this.$route.params.iid
    // 获取对应商品id对应的数据
    getDetailData(this.iid).then(res => {
      console.log(res);
      // 对数据进行结构然后保存
      // 保存轮播图的数据
      let data = res.data.result
      this.topImg = data.itemInfo.topImages
      // 保存商品的详细信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 保存店铺信息
      this.shop = new Shop(data.shopInfo)
      // 保存商品详细数据的信息
      this.goodsInfo = data.detailInfo
      // 获取尺码等信息
      this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    }) 
  },
  mounted(){},
  methods: {}
}
</script>
<style scoped>
  .detail {
    position: relative;
    z-index: 20;
    background-color: #fff;
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px);
  }
  .detail-nav {
    position: relative;
    z-index: 30;
    background-color: #fff;
  }
</style>

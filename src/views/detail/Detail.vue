<template>
  <div class='detail'>
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="detailScroll">
      <detail-swiper :topImg="topImg" @detailImgLoad="imgLoad"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :goodsInfo="goodsInfo" @detailImgLoad="imgLoad"></detail-goods-info>
      <detail-param-info :goodsParam="goodsParam" ref="param"></detail-param-info>
      <detail-comment-info :commentsInfo="commentsInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommendData" ref="recommend"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isshowBT"/>
    <detail-bottom-bar @addProduct="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar.vue'
import DetailSwiper from './childComponents/DetailSwiper.vue'
import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
import DetailShopInfo from './childComponents/DetailShopInfo.vue'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo.vue'
import DetailParamInfo from './childComponents/DetailParamInfo.vue'
import DetailCommentInfo from './childComponents/DetailCommentInfo.vue'
import DetailBottomBar from './childComponents/DetailBottomBar.vue'

import Scroll from 'components/common/scroll/Scroll.vue'
import GoodsList from 'components/content/GoodsList.vue'

import {getDetailData, Goods, Shop, GoodsParam, getRecommendData} from 'network/detail.js'
import {debounce} from 'common/utils.js'
import {backTopMixin} from 'common/mixin.js'
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
      commentsInfo: {},
      recommendData: [],
      titleTopY: [],
      debounceFunc: null,
      currentIndex:  0,
    }
  },
  mixins: [backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo, 
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,

    Scroll,
    GoodsList,
  },
  created(){
    // 获取点击过来的商品的具体id
    this.iid = this.$route.params.iid
    // 获取对应商品id对应的数据
    getDetailData(this.iid).then(res => {
      // console.log(res);
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
      // 获取评论信息， 注意评论可能没有
      if (data.rate.cRate.length !== 0) {
        this.commentsInfo = data.rate.list[0]
      }
    })
    // 获取推荐数据
    getRecommendData().then(res => {
      // console.log(res);
      this.recommendData = res.data.data.list
    })
  },
  mounted(){
    this.debounceFunc = debounce(() => {
        this.$nextTick(() => {
        this.titleTopY = []
        this.titleTopY.push(0);
        this.titleTopY.push(this.$refs.param.$el.offsetTop - 44)
        this.titleTopY.push(this.$refs.comment.$el.offsetTop - 44)
        this.titleTopY.push(this.$refs.recommend.$el.offsetTop - 44)
        this.titleTopY.push(Number.MAX_VALUE)
        }) 
      }, 200)
  },
  destroyed() {
    this.$bus.$emit('detailDestroyed')
  },
  methods: {
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, this.titleTopY[index] === 0 ? 0 : -this.titleTopY[index], 200)
    },
    imgLoad() {
      this.debounceFunc()
    },
    detailScroll(position) {
      // 对position的值和数组中的值进行判断
      let p = -position.y
      let length = this.titleTopY.length
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i && (p >= this.titleTopY[i] && p < this.titleTopY[i + 1])) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex
        } 
      }
      // 显示回到顶部按钮
           
      this.isshowBT = (-position.y) > 1000;
    },
    addToCart() {
      const product = {};
      product.img = this.topImg[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.lowNowPrice;
      product.iid = this.iid;
      this.$store.dispatch('addToCart', product)
    }
  }
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
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
  .detail-nav {
    position: relative;
    z-index: 30;
    background-color: #fff;
  }
</style>

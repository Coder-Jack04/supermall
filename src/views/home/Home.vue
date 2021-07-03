<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>
    <swiper-view :banners="banners"></swiper-view>
    <recommend-view :recommends="recommends" />
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import RecommendView from './childComponents/RecommendView.vue'
import SwiperView from './childComponents/SwiperView.vue'
import FeatureView from './childComponents/FeatureView.vue'
import GoodsList from 'components/content/GoodsList.vue'
import TabControl from 'components/content/TabControl.vue'

import {getHomeMultidata, getHomeData} from 'network/home.js'
export default {
  name: 'Home',
  components: {
    NavBar,
    RecommendView,
    SwiperView,
    FeatureView,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop'
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata(),
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')

  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeData(type) {
      let page = this.goods[type].page + 1
      getHomeData(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
      })
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break
        case 2: 
          this.currentType = 'sell'
          break
      }
    }
  },
}
</script>
<style scoped>
  #home {
    padding-top: 44px;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 5;
  }
</style>
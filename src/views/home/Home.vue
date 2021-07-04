<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" class="tab-control" v-show="isshowTop" ref="tabcontrol1"></tab-control>
    <scroll class="content" ref="scroll" @scroll="contentScroll" @pullingUp="loadmore">
      <swiper-view :banners="banners" @swiperImgLoad="imgLoad"></swiper-view>
      <recommend-view :recommends="recommends" />
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabcontrol2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isshowBT"/>
  </div>
</template>
<script>

import RecommendView from './childComponents/RecommendView.vue'
import SwiperView from './childComponents/SwiperView.vue'
import FeatureView from './childComponents/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar'
import GoodsList from 'components/content/GoodsList.vue'
import TabControl from 'components/content/TabControl.vue'
import BackTop from 'components/content/BackTop.vue'
import Scroll from 'components/common/scroll/Scroll.vue'

import {getHomeMultidata, getHomeData} from 'network/home.js'
import {debounce} from 'common/utils.js'
export default {
  name: 'Home',
  components: {
    NavBar,
    RecommendView,
    SwiperView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
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
      currentType: 'pop',
      isshowBT: false,
      TabControlOffset: 0,
      isshowTop: false,
      saveY: 0
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
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('itemImgLoad', () => {
      refresh()
    })
  },
  // 通过导航守卫来监听路由的跳转
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getSaveY()
    // console.log(this.saveY);
  },
  methods: {
    imgLoad() {
      this.TabControlOffset = this.$refs.tabcontrol2.$el.offsetTop
    },
    loadmore() {
      // console.log('上拉加载更多');
      this.getHomeData(this.currentType);
    },
    contentScroll(position) {
      // 显示回到顶部按钮
      this.isshowBT = (-position.y) > 1000;
      // 控制吸顶效果
      this.isshowTop = (-position.y) > this.TabControlOffset
    },
    backTop() {
      // console.log(111);
      this.$refs.scroll.scrollTo(0, 0)
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeData(type) {
      let page = this.goods[type].page + 1
      getHomeData(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
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
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    }
  },
}
</script>
<style scoped>
  #home {
    padding-top: 44px;
    position: relative;
    height: 100vh;
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
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  .tab-control {
    position: relative;
    z-index: 10;
  }
</style>
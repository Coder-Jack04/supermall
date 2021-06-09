<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>
    <recommend-view :recommends="recommends" />
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import RecommendView from './childComponents/RecommendView.vue'
import {getHomeMultidata} from 'network/home.js'
export default {
  name: 'Home',
  components: {
    NavBar,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  },
}
</script>
<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
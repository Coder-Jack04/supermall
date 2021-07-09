<template>
  <div class="shop-cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品展示部分 -->
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
  </div>
</template>
<script>
import CartList from './ChildComponents/CartList.vue'
import CartBottomBar from './ChildComponents/CartBottomBar.vue'

import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'Shopcart',
  data() {
    return {
    }
  },
  components: {
    CartList,
    CartBottomBar, 
    Scroll,

    NavBar
  },
  computed: {
    ...mapGetters({
      length: 'getLength'
    })
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>
<style scoped>
  .shop-cart {
    height: 100vh;
    position: relative;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 40px;
    width: 100%;
    overflow: hidden;
  }
  .bottom-bar {
    width: 100%;
    position: absolute;
    bottom: 50px;
  }
</style>
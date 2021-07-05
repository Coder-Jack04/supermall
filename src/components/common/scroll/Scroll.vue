<template>
  <div class='wrapper' ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
  },
  data(){
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 0,
      click: true,
      pullUpLoad: true,
      // 通过事件总线的方法去解决滚动存在的问题
      observeImage: true,
    })
    //监听滚动的位置
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    })
    // 监听上拉事件
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x, y, time=1000) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll.refresh()
    },
    getSaveY() {
      return this.scroll.y
    }
  },
}
</script>
<style scoped>

</style>

<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="{'color': isActive ? activeColor : 'black'}"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    btnClick() {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !==-1 
    },
    activeStyle() {
      return this.activeColor
    }
  }
}
</script>
<style scoped>
  .tab-bar .tab-bar-item {
      flex: 1;
   }
  .tab-bar .tab-bar-item img {
    height: 28px;
    width: 28px;
    vertical-align: middle;
  }
  .active {
    color: red;
  }
</style>
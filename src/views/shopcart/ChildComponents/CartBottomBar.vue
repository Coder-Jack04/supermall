<template>
  <div class='bottom-bar'>
    <div class="select-all">
      <check-button :is-checked="allChecked" @click.native="allButtonClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计: ¥{{totalPrice}}
    </div>
    <div class="purchase">
      去结算({{totalCount}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/common/checkButton/CheckButton.vue'
export default {
  name: 'CartBottomBar',
  data(){
    return {}
  },
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList.filter(item => item.checked).reduce((previoussum, item) => previoussum + item.price * item.count, 0)
    },
    totalCount() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    allChecked() {
      // 实现对商品列表中是否全选来控制全选按钮的显示效果
      if (this.$store.state.cartList.length == 0) return false
      return this.$store.state.cartList.every(item => item.checked)
    }
  },
  methods: {
    // 实现对全选按钮的点击, 从而决定商品商品的选中效果
    allButtonClick() {
      this.$store.state.cartList.forEach(element => {
        element.checked = !element.checked
      });
    }
  },
}
</script>
<style scoped>
  .bottom-bar {
    display: flex;
    height: 40px;
    background-color: #eee;
    font-size: 14px;
  }
  .select-all {
    margin-left: 8px;
    width: 60px;
    display: flex;
  }
  .select-all span {
    height: 40px;
    line-height: 40px;
    margin-left: 8px;
  }
  .price {
    flex: 1;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
  }
  .purchase {
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #f00;
    color: #fff;
  }
</style>

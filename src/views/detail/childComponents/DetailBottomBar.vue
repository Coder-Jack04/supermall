<template>
  <div class='bottom-bar'>
    <div class="bottom-left">
      <div>
        <i class="icon-service icon"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon-shop icon"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon-collect icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-right">
      <div class="cart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data(){
    return {}
  },
}
</script>
<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #fff;
    display: flex;
    font-size: 14px;
    z-index: 100000;
  }
  .bottom-bar .bottom-left {
    display: flex;
  }
  .bottom-left div {
    margin: 6px 20px;
    text-align: center;
  }
  .icon {
    display: block;
    width: 22px;
    height: 22px;
    background: url('~assets/img/detail/detail_bottom.png') no-repeat;
    background-size: 22px;
    margin-left: 3px;
    margin-bottom: 3px;
  }
  .icon-service {
    background-position: 0 -52px;
  }
  .icon-shop {
    background-position: 0 -98px;
    
  }
  .bottom-bar .bottom-right {
    display: flex;
    flex: 1;
    line-height: 49px;
    font-size: 16px;
  }
  .bottom-right .cart {
    background-color: yellow;
  }
  .bottom-right .buy {
    flex: 1;
    width: 40px;
    text-align: center;
    background-color: rgb(255, 120, 154);
    color: #fff;
  }
</style>

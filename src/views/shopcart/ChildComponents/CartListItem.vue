<template>
  <div class='cart-item'>
    <div class="item-selector">
      <check-button :is-checked="productItem.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="productItem.img" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{productItem.title}}</div>
      <div class="item-desc">{{productItem.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">¥{{productItem.price}}</div>
        <div class="item-count">x{{productItem.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/common/checkButton/CheckButton.vue'
export default {
  name: 'CartListItem',
  data(){
    return {}
  },
  props: {
    productItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  created(){},
  mounted(){},
  methods: {
    checkClick() {
      this.productItem.checked = ! this.productItem.checked
    }
  }
}
</script>
<style scoped>
  .cart-item {
    display: flex;
    /* justify-content: space-between; */
    width: 100%;
    padding: 8px 6px;
    border-bottom: 2px solid #aaa;
  }
  .item-seclector {
    line-height: 80px;
    height: 80px;
  }
  .item-img img {
    width: 80px;
    margin-right: 20px;
    margin-left: 10px;
    border-radius: 10px;
  }
  .item-info {
    width: 60%;
  }
  .item-info .item-title, .item-info .item-desc {
    margin-top: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .item-info .item-title {
    font-size: 16px;
  }
  .item-info .item-desc {
    font-size: 12px;
    color: grey;
    margin-top: 10px;
  }
  .info-bottom {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }
  .item-price {
    color: var(--color-tint);
  }

</style>

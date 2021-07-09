<template>
  <div class='cart-list'>
    <cart-list-item v-for="(item, index) in product" :key="index" :product-item="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'CartList',
  data(){
    return {}
  },
  computed: {
    ...mapGetters({
      product: 'getCartList'
    })
  },
  components: {
    CartListItem,
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
</style>

<template>
  <div class='c-btn' :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  data(){
    return {}
  },
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
.c-btn{
  top: 50%;
  position: relative;
  transform: translateY(-50%);
  border-radius: 9px;
  border: 2px solid #333;
  left: 0px;
  width: 18px;
  height: 18px;
}
.check {
  border-color: red;
  background-color: #f00;
}
</style>

<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
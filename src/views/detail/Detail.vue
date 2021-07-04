<template>
  <div class='detail'>
    <h1>详情页</h1>
    <h2>{{iid}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data(){
    return {
      iid: 0,
    }
  },
  components: {},
  created(){
    this.iid = this.$route.params.iid
  },
  mounted(){},
  methods: {}
}
</script>
<style scoped>
</style>

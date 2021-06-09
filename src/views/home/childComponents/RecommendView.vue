<template>
  <div class='recommend'>
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item"> 
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  data(){
    return {
    }
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 14px;
  padding: 20px 0px 20px;
  border-bottom: 2px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
}
</style>

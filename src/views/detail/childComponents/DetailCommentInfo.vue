<template>
  <div class='comment-info' v-if="Object.keys(commentsInfo).length !== 0">
    <div class="info-header clear-fix">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentsInfo.user.avatar" alt="">
      <span>{{commentsInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentsInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentsInfo.created | showDate}}</span>
        <span>{{commentsInfo.style}}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img :src="item" alt="" v-for="(item, index) in commentsInfo.images" :key="index">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCommentInfo',
  props: {
    commentsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data(){
    return {}
  },
  filters: {
    showDate(value) {

    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
  .comment-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-header {
    border-bottom: 5px solid rgba(0, 0, 0, .1);
    padding-bottom: 10px;
    margin-bottom: 10px;

  }
  .info-header .header-title {
    float: left;
  }
  .info-header .header-more {
    float: right;
  }
  .info-user {
    display: flex;
    align-content: center;
    margin-bottom: 10px;
  }
  .info-user span {
    margin-left: 5px;
    margin-top: 10px;
  }
  .info-user img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
  .info-imgs img {
    width: 30%;
  }
  .claer-fix::before, .claer-fix::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    clear: both;
  }
</style>

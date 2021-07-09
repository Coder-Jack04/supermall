import BackTop from 'components/content/BackTop.vue'
export const backTopMixin = {
  data() {
    return {
      isshowBT: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      console.log(111);
      this.$refs.scroll.scrollTo(0, 0)
    },
  },
}
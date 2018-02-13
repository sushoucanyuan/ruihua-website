<template>
  <div class="m-swiper-thumbnail">
    <swiper ref="top" class="top" @slideChangeTransitionStart="slide_change">
      <swiper-slide v-for="(item, index) in list" :key="index">
        <img class="banner_top" :src="item.picurl">
      </swiper-slide>
    </swiper>
    <m-tabs class="tabs" type="img" v-model="swiperId" nav>
      <m-tab-item v-for="(item, index) in list" :key="item.id" :id="index" :style="{ backgroundImage: `url(&quot;${item.picurl}&quot;)` }"></m-tab-item>
    </m-tabs>
  </div>
</template>

<script>
  export default {
    name: 'm-swiper-thumbnail',
    props: {
      list: {
        type: Array,
        required: true,
        default: () => []
      }
    },
    data() {
      return {
        swiperId: 0
      }
    },
    computed: {
      top() {
        return this.$refs.top.swiper
      }
    },
    watch: {
      swiperId: function (val, oldVal) {
        this.top.slideTo(val, 400, false)
      }
    },
    methods: {
      slide_change: function () {
        this.swiperId = this.top.activeIndex
      }
    }
  }
</script>

<style lang="postcss">
  .m-swiper-thumbnail {
    position: relative;
    & > .top {
      width: 100%;
      height: 100%;
      & .banner_top {
        width: 100%;
        height: 100%;
      }
    }
    & > .tabs {
      position: absolute;
      bottom: 30px;
      left: 0;
      right: 0;
      z-index: 50;
      margin: 0 auto;
    }
  }
</style>

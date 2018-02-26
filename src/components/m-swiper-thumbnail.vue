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
    <m-icon class="prev" :class="{'is-disabled': !can_prev}" name="xiangzuo" @click.native="prev"></m-icon>
    <m-icon class="next" :class="{'is-disabled': !can_next}" name="xiangyou" @click.native="next"></m-icon>
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
      },
      can_prev() {
        return this.swiperId > 0
      },
      can_next() {
        return this.swiperId < this.list.length - 1
      }
    },
    watch: {
      swiperId: function (val, oldVal) {
        this.top.slideTo(val, 400, false)
      }
    },
    methods: {
      prev() {
        this.can_prev && (this.swiperId -= 1)
      },
      next() {
        this.can_next && (this.swiperId += 1)
      },
      slide_change: function () {
        this.swiperId = this.top.activeIndex
      }
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

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
    & > :matches(.prev, .next) {
      cursor: pointer;
      color: var(--color-yellow);
      font-size: 18px;
      position: absolute;
      bottom: 40px;
      z-index: 50;
      margin: auto 0;
      padding: 6px;
      border: 1px solid;
      border-radius: 50%;
      background-color: color(var(--color-white) a(90%));
      &.is-disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
    }
    & > .prev {
      left: 35px;
    }
    & > .next {
      right: 35px;
    }
  }
</style>

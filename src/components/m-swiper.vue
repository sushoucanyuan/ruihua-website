<template>
  <swiper class="m-swiper" :options="swiper" :class="'type-' + type">
    <swiper-slide v-for="(item, index) in list" :key="index">
      <img class="banner" :src="item.picurl" @click="click(item.url)">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="banner-button-prev" slot="button-prev">
      <m-icon name="xiangzuo"></m-icon>
    </div>
    <div class="banner-button-next" slot="button-next">
      <m-icon name="xiangyou"></m-icon>
    </div>
  </swiper>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        required: true,
        default: () => []
      },
      type: {
        type: String,
        default: 'default'
      }
    },
    data() {
      return {
        swiper: {
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet(index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom banner-pagination"></span>`
            }
          },
          navigation: {
            nextEl: '.banner-button-next',
            prevEl: '.banner-button-prev',
          }
        }
      }
    },
    methods: {
      click: function (url) {
        if (!url) return false
        if (!url.match(/^http/)) {
          url = 'http://' + url
        }
        location.href = url
      }
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .m-swiper {
    &.type-default {
      & .banner {
        display: block;
        width: 100%;
        height: 100%;
      }
      & :matches(.banner-button-prev, .banner-button-next) {
        cursor: pointer;
        color: var(--color-yellow);
        font-size: 40px;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 50;
        height: 60px;
        margin: auto;
        padding: 12px;
        border: 3px solid;
        border-radius: 50%;
        background-color: color(var(--color-white) a(20%));
        transition: 0.3s;
        &:not(.swiper-button-disabled):hover {
          transform: scale(1.1);
        }
        &.swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
      & .banner-button-prev {
        left: 10%;
      }
      & .banner-button-next {
        right: 10%;
      }
      & .banner-pagination {
        --transition-time: 0.3s;
        opacity: 1;
        position: relative;
        width: 24px;
        height: 24px;
        margin: 0 38px 66px;
        background-color: transparent;
        box-shadow: 0 0 0 5px var(--color-white);
        transition: var(--transition-time);
        &::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 16px;
          height: 16px;
          margin: auto;
          background: var(--color-white);
          border-radius: 50%;
          transform: scale(0);
          transition: var(--transition-time);
        }
        &:hover::before {
          transform: scale(1);
        }
        &.swiper-pagination-bullet-active {
          box-shadow: 0 0 0 7px color(var(--color-white) a(60%));
          &::before {
            transform: scale(1);
          }
        }
      }
    }
  }
</style>

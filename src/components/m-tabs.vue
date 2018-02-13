<template>
  <div ref="tab" class="m-tabs" :class="'type-' + type">
    <div class="m-tabs-container">
      <div ref="container" v-if="type == 'img'">
        <slot></slot>
      </div>
      <slot v-else></slot>
      <span v-show="!$slots.default" class="m-tabs-loading">努力加载中 ...</span>
    </div>
    <m-icon v-if="nav" class="prev" :class="{'is-disabled': !can_prev}" name="xiangzuo" @click.native="prev"></m-icon>
    <m-icon v-if="nav" class="next" :class="{'is-disabled': !can_next}" name="xiangyou" @click.native="next"></m-icon>
  </div>
</template>

<script>
  export default {
    name: 'm-tabs',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      value: {},
      loading: {
        type: Boolean,
        default: false
      },
      nav: {
        type: Boolean
      }
    },
    data() {
      return {
        tab: null,
        container: null,
        translate: 0
      }
    },
    methods: {
      next: function () {
        this.translate += 100
      },
      prev: function () {
        this.translate -= 100
      }
    },
    computed: {
      can_next: function () {
        if (this.nav && this.container && this.tab)
          return this.container.left + this.translate < this.tab.left
        else return false
      },
      can_prev: function () {
        if (this.nav && this.container && this.tab)
          return this.container.right + this.translate > this.tab.right
        else return false
      }
    },
    watch: {
      translate: function (val, oldVal) {
        this.$refs.container.style.transform = `translate(${this.translate}px)`
      }
    },
    mounted() {
      if (this.nav) {
        this.tab = this.$refs.tab.getBoundingClientRect()
        this.container = this.$refs.container.getBoundingClientRect()
      }
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  :root {
    --color-gray: #535353;
  }

  .m-tabs {
    overflow: hidden;
    & .m-tabs-loading {
      text-indent: 3px;
      letter-spacing: 3px;
    }
    &.type-default {
      & > .m-tabs-container {
        color: var(--color-gray);
        font-size: 16px;
        line-height: 70px;
        display: flex;
        justify-content: space-around; /* 兼容低版本 */
        justify-content: space-evenly;
        border-bottom: 2px solid var(--color-yellow);
        & > .m-tab-item {
          cursor: pointer;
          transition: 0.1s;
          &:matches(.is-active, :hover) {
            color: var(--color-yellow);
          }
        }
      }
    }
    &.type-button {
      & > .m-tabs-container {
        display: flex;
        justify-content: center;
        & > .m-tab-item {
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          letter-spacing: 1px;
          width: 150px;
          padding: 12px 0;
          border-radius: 5px;
          transition: 0.1s;
          &.is-active {
            cursor: default;
            color: var(--color-white);
            background-color: var(--color-yellow);
          }
          &:not(.is-active) {
            cursor: pointer;
            color: var(--color-gray);
            &:hover {
              color: var(--color-yellow);
            }
          }
        }
      }
    }
    &.type-text {
      & > .m-tabs-container {
        display: flex;
        & > .m-tab-item {
          cursor: pointer;
          color: var(--font-color-light-4);
          font-size: 16px;
          transition: 0.1s;
          &:not(:last-child) {
            margin-right: 20px;
          }
          &.is-active {
            cursor: default;
          }
          &:matches(.is-active, :hover) {
            color: var(--font-color-light-1);
          }
        }
      }
    }
    &.type-banding {
      & > .m-tabs-container {
        color: var(--color-white);
        font-size: 20px;
        font-weight: bold;
        line-height: 66px;
        display: flex;
        justify-content: space-around;
        background-color: var(--color-yellow);
        & > .m-tab-item {
          text-align: center;
          letter-spacing: 1px;
          width: 25%;
          &.is-active {
            cursor: default;
            background-color: #ad7d34;
          }
          &:not(.is-active) {
            cursor: pointer;
          }
        }
      }
    }
    &.type-tag {
      & > .m-tabs-container {
        display: flex;
        color: var(--font-color-light-4);
        font-size: 16px;
        line-height: 45px;
        text-align: center;
        letter-spacing: 1px;
        & > .m-tab-item {
          cursor: pointer;
          width: 180px;
          margin-right: 3px;
          background-color: #f2f2f2;
          transition: 0.1s;
          &:hover {
            color: var(--color-yellow);
          }
          &.is-active {
            color: var(--color-white);
            background-color: var(--color-yellow);
          }
        }
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }
    &.type-img {
      overflow: hidden;
      & > .m-tabs-container {
        width: 470px;
        margin: 0 auto;
        overflow: hidden;
        & > div {
          vertical-align: bottom;
          display: flex;
          transition: 0.5s;
          & > .m-tab-item {
            cursor: pointer;
            position: relative;
            display: inline-block;
            width: 90px;
            height: 65px;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              box-sizing: border-box;
              width: 100%;
              height: 100%;
              background-color: color(var(--font-color-light-1) a(60%));
              border: 1px solid transparent;
              transition: 0.3s;
            }
            &:not(:last-child){
              margin-right: 12px;
            }
            &.is-active {
              &::before {
                background-color: color(var(--font-color-light-1) a(0));
                border-color: var(--color-yellow);
              }
            }
          }
        }
      }
      & > :matches(.prev, .next) {
        cursor: pointer;
        color: var(--color-yellow);
        font-size: 15px;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        padding: 6px;
        border: 1px solid;
        border-radius: 50%;
        background-color: color(var(--color-white) a(90%));
        &.is-disabled {
          color: color(var(--color-yellow) a(50%));
        }
      }
      & > .prev {
        left: 60px;
      }
      & > .next {
        right: 60px;
      }
    }
  }
</style>

<template>
  <div class="m-card" :class="{'direction-row': direction == 'row'}">
    <div class="m-card-header">
      <slot name="header"></slot>
      <div class="m-card-hot" v-show="ishot">
        <m-icon class="icon" name="huo"></m-icon>
        <span>VIP热门推荐</span>
      </div>
    </div>
    <div v-if="$slots.default" class="m-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import mIcon from './m-icon.vue'

  export default {
    name: 'm-card',
    props: {
      direction: {
        type: String,
        default: 'column'
      },
      ishot: Boolean
    },
    components: {
      mIcon
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .m-card {
    border: 1px solid var(--color-border);
    background-color: var(--color-white);
    &.direction-row {
      display: flex;
      flex-direction: row;
      & > .m-card-header {
        flex-shrink: 0;
      }
      & > .m-card-body {
        flex-grow: 1;
      }
    }
    & > .m-card-header {
      position: relative;
      overflow: hidden;
      & > .m-card-hot {
        display: flex;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgb(228, 83, 64);
        & > .icon {
          color: var(--color-white);
          font-size: 20px;
          width: 45px;
        }
        & > span {
          color: var(--color-white);
          font-size: 17px;
          font-weight: bold;
          line-height: 45px;
          text-align: center;
          flex-grow: 1;
          padding: 0 20px;
          background-color: var(--color-orange);
        }
      }
      & img {
        display: block;
        width: 100%;
        height: 100%;
        transition: var(--house-img-transition);
      }
    }
    &:hover > .m-card-header img {
      transform: var(--house-img-transform);
    }
  }
</style>

<template>
  <div class="m-tabs" :class="'type-' + type">
    <slot></slot>
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
      value: {}
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .m-tabs {
    &.type-default {
      display: flex;
      justify-content: space-around; /* 兼容低版本 */
      justify-content: space-evenly;
      border-bottom: 2px solid var(--color-yellow);
      & > .m-tab-item {
        color: var(--font-color-light-2);
        font-size: 16px;
        line-height: 70px;
        &:matches(.is-active, :hover) {
          color: var(--color-yellow);
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
    &.type-button {
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
        &.is-active {
          color: var(--color-white);
          background-color: var(--color-yellow);
          &:hover {
            cursor: default;
          }
        }
        &:not(.is-active) {
          color: var(--font-color-light-2);
          &:hover {
            cursor: pointer;
            color: var(--color-yellow);
          }
        }
      }
    }
    &.type-banding {
      display: flex;
      justify-content: space-around;
      background-color: var(--color-yellow);
      & > .m-tab-item {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        letter-spacing: 1px;
        width: 1301px;
        padding: 12px 0;
        border-radius: 5px;
        &.is-active {
          color: var(--color-white);
          background-color: #ad7d34;
          &:hover {
            cursor: default;
          }
        }
        &:not(.is-active) {
          color: var(--font-color-light-2);
          &:hover {
            cursor: pointer;
            color: var(--color-white);
          }
        }
      }
    }
  }
</style>

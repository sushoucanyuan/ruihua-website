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

  :root {
    --color-gray: #535353;
  }

  .m-tabs {
    &.type-default {
      display: flex;
      justify-content: space-around; /* 兼容低版本 */
      justify-content: space-evenly;
      border-bottom: 2px solid var(--color-yellow);
      & > .m-tab-item {
        cursor: pointer;
        color: var(--color-gray);
        font-size: 16px;
        line-height: 70px;
        transition: 0.1s;
        &:matches(.is-active, :hover) {
          color: var(--color-yellow);
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
    &.type-text {
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
</style>

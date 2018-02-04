<template>
  <div class="m-tabs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'm-tabs',
    props: ['value']
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .m-tabs {
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
</style>

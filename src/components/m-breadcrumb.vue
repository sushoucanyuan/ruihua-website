<template>
  <div class="m-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'm-breadcrumb',
    props: {
      separator: {
        type: String,
        default: '/'
      }
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .m-breadcrumb {
    color: var(--font-color-light-3);
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 30px;
    & > .m-breadcrumb-item {
      cursor: default;
      & > .m-breadcrumb-item-label {
        cursor: pointer;
        &:hover {
          color: var(--color-yellow);
        }
      }
      &:last-child {
        & > .m-breadcrumb-item-label {
          color: var(--color-yellow);
        }
        & > .m-breadcrumb-item-separator {
          display: none;
        }
      }
    }
  }
</style>

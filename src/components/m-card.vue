<template>
  <div class="m-card" :class="{'direction-row': direction == 'row'}">
    <div class="m-card-header">
      <slot name="header"></slot>
    </div>
    <div class="m-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      direction: {
        type: String,
        default: 'column'
      }
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .m-card {
    border: 1px solid #c0c0c0;
    background-color: var(--color-white);
    &.direction-row {
      display: flex;
      flex-direction: row;
      & > .m-card-body {
        flex-grow: 1;
      }
    }
  }
</style>

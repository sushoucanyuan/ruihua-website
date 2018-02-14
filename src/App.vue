<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="postcss">
  @import "./assets/css/var.css";

  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  .ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .none {
    color: var(--color-yellow);
    font-size: 28px;
    letter-spacing: 5px;
    text-align: center;
    padding: 80px 0;
  }

  .page {
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 1px;
  }

  .el-pagination.is-background .el-pager li {
    &.active {
      background-color: var(--color-yellow);
    }
    &:not(.active):hover {
      color: var(--color-yellow);
    }
  }

  #app {
    font-family: "Open Sans", "Helvetica Neue", Arial, "Hiragino Sans GB",
      "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  }
</style>

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

<style>
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

  #app {
    font-family: "Open Sans", "Helvetica Neue", Arial, "Hiragino Sans GB",
      "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  }
</style>
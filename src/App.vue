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
  :root {
    --color-yellow-high: #ff8000;
    --color-yellow-low: #d3a869;
    --color-white-high: #fff;
    --color-white-low: #f5f5f5;
    --color-black-high: #000;
    --color-black-origin: #292421;
    --color-black-low: #c0c0c0;
  }

  body{
    margin: 0;
  }

  #app {
    font-family: "微软雅黑", "宋体", Arial, sans-serif;
  }
</style>
<template>
  <div class="container">
    <m-title cn="关于瑞华"></m-title>
    <div class="page" v-html="content || '暂无数据~'"></div>
  </div>
</template>

<script>
  import api from '@/api/other'

  export default {
    data() {
      return {
        content: ''
      }
    },
    beforeMount() {
      api.getAbout().then(content => {
        this.content = content
      })
    }
  }
</script>

<style lang="postcss" scoped>
  @import "../assets/css/var.css";

  .container {
    width: var(--index-width);
    min-height: 700px;
    margin: 0 auto;
    padding-top: var(--index-padding-top);
    & > .page {
      padding-left: 40px;
    }
  }
</style>

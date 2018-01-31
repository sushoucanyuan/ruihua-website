<template>
  <div id="header">
    <header class="nav-index">
      <img class="logo" src="/static/LOGO.png" alt="瑞华集团" @click="push({name:'index'})">
      <nav>
        <router-link class="link" :to="{name: 'index'}" active-class="link-active">首页</router-link>
        <router-link class="link" :to="{name: 'Overseas-property'}" active-class="link-active">海外房产</router-link>
        <router-link class="link" :to="{name: 'tour-study'}" active-class="link-active">旅游游学</router-link>
        <router-link class="link" :to="{name: 'trust-fund'}" active-class="link-active">信托基金</router-link>
        <router-link class="link" :to="{name: 'about-ruihua'}" active-class="link-active">关于瑞华</router-link>
        <router-link class="link" :to="{name: 'info-table'}" active-class="link-active">信息表格</router-link>
      </nav>
      <div class="call-us">
        <img src="/static/733-423-297.png" alt="联系电话">
      </div>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="scss">
@import "../assets/scss/theme.scss";

#header {
  .nav-index {
    text-align: left;
    position: relative;
    height: $header-height;
  }
}
</style>

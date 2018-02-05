<template>
  <header>
    <div class="container">
      <img class="logo" src="/static/LOGO.png" alt="瑞华集团" @click="push({name: 'home'})">
      <div class="info">
        <nav class="links">
          <router-link class="link" :to="{name: 'home'}">首页</router-link>
          <router-link class="link" :to="{name: 'overseas-property'}">海外房产</router-link>
          <router-link class="link" :to="{name: 'tour-study'}">旅游游学</router-link>
          <router-link class="link" :to="{name: 'trust-fund'}">信托基金</router-link>
          <router-link class="link" :to="{name: 'about-ruihua'}">关于瑞华</router-link>
          <router-link class="link" :to="{name: 'info-table'}">信息表格</router-link>
        </nav>
        <img class="phoneNumber" src="/static/phone-number.png" alt="733-423-297">
      </div>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  header {
    background-color: var(--color-background);
    & > .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      height: 120px;
      width: 100%;
      max-width: 1500px;
      padding: 0 var(--index-padding) 4px;
      margin: 0 auto;
      & > .logo {
        margin-right: 40px;
      }
      & > .info {
        display: flex;
        align-items: center;
        overflow: hidden;
        & > .links {
          display: flex;
          justify-content: space-between;
          width: 765px;
          & .link {
            color: var(--color-white);
            font-size: 16px;
            text-decoration: none;
            &.router-link-active {
              color: var(--color-yellow);
            }
          }
        }
        & > .phoneNumber {
          margin-left: 55px;
        }
      }
    }
  }
</style>

<template>
  <footer>
    <div class="container">
      <div class="contacts">
        <span v-for="item in contacts" :key="item">{{item}}</span>
      </div>
      <div class="comnpanion">
        <nav class="links">
          <router-link class="link" :to="{}">CFS房地产</router-link>
          <router-link class="link" :to="{}">Rivo Recruitment瑞华招聘</router-link>
          <router-link class="link" :to="{}">Spectra Holdings</router-link>
          <router-link class="link" :to="{}">One Capital</router-link>
          <router-link class="link" :to="{}">AFC 贷款服务公司</router-link>
          <router-link class="link" :to="{}">W Travel大步旅行</router-link>
        </nav>
      </div>
      <div class="copyright">
        <span>版权所有：瑞华集团 Copyright © 2017 Rayzh interactivce</span>
        <span>鲁ICP备17045672号 站长统计</span>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        contacts: [
          "联系电话：+61 733-423-297",
          "业务邮箱：lenny@rivogroup.com.au",
          "公司地址：天津市河西区友谊路50号友谊大厦A座802室"
        ]
      }
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  footer {
    background-color: var(--color-background);
    & > .container {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 300px;
      width: 100%;
      max-width: 1500px;
      padding: 0 var(--index-padding) 4px;
      flex-wrap: wrap;
      margin: 0 auto;
      & > .contacts {
        position: relative;
        width: 100%;
        margin: 0 auto;
        color: #898989;
        font-size: 16px;
        display: flex;
        justify-content: space-around;
        &::after {
          content: " ";
          position: absolute;
          width: 90%;
          height: 1px;
          bottom: -40px;
          left: 5%;
          background-color: #3a3938;
        }
      }
      & > .comnpanion {
        width: 100%;
        margin: 0 auto;
        & > .links {
          display: flex;
          justify-content: space-around;
          width: 100%;
          & .link {
            color: #898989;
            font-size: 16px;
            text-decoration: none;
            position: relative;
            &:not(:last-child)::after {
              content: " ";
              position: absolute;
              width: 2px;
              height: 20px;
              right: -30px;
              background-color: #3a3938;
            }
            &.router-link-active {
              color: #898989;
            }
          }
        }
      }
      & > .copyright {
        width: 50%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        color: #535353;
        font-size: 14px;
      }
    }
  }
</style>

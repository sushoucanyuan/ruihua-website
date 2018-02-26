<template>
  <footer>
    <div class="container">
      <div class="contacts">
        <span v-once v-for="item in contacts" :key="item">{{item}}</span>
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
    padding: 100px 100px 200px;
    & > .container {
      box-sizing: border-box;
      max-width: 1500px;
      padding: 0 var(--index-padding) 4px;
      margin: 0 auto;
      & > .contacts {
        margin: 0 auto;
        color: #898989;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 22px;
        border-bottom: 1px solid #3a3938;
      }
      & > .comnpanion {
        margin-top: 60px;
        & > .links {
          display: flex;
          flex-wrap: no-wrap;
          justify-content: space-between;
          width: 100%;
          & .link {
            color: #898989;
            font-size: 16px;
            text-decoration: none;
            position: relative;

            &.router-link-active {
              color: #898989;
            }
          }
        }
      }
      & > .copyright {
        display: flex;
        justify-content: center;
        margin-top: 130px;
        color: #535353;
        font-size: 14px;
        & > span{
          margin: 0 20px;
        }
      }
    }
  }
</style>

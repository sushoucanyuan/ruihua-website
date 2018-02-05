<template>
  <aside>
    <div class="container">
      <img class="code" src="/static/QR-code.png" alt="二维码">
      <div class="info">
        <ul>
          <li class="sidebox">
            <icon name="weibo"></icon>
            <span>关注微博</span>
          </li>
          <li class="sidebox">
            <icon name="kefu"></icon>
            <span>咨询电话</span>
          </li>
          <li class="sidebox" @click="isShow=!isShow">
            <icon name="fenxiang"></icon>
            <span>分享</span>
          </li>
        </ul>
      </div>
      <button class="sidetop" @click="goTop">
        <icon name="xiangshang"></icon>
        <span>回到顶部</span>
      </button>
    </div>
    <div class="share-box" v-if="isShow">
      <ul>
        <li class="share-icon">  
          <icon name="pengyouquan"></icon>
        </li>
        <li class="share-icon" >
          <icon name="weibo"></icon>
        </li>
        <li  class="share-icon">
          <icon name="qq"></icon>
        </li>
        <li  class="share-icon">
          <icon name="weixin"></icon>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  import icon from '@/components/m-icon.vue'
  export default {
    data() {
      return {
        isShow: false
      }
    },
    components: {
      icon
    },
    methods: {
      goTop() {
        clearInterval(timer);
        var timer = setInterval(function () {
          let target = document.documentElement.scrollTop;
          target -= Math.ceil(target / 10); //做减速运动
          window.scrollTo(0, target);
          if (target == 0) {
            clearInterval(timer);
          }
        }, 10);
      }
    }
  }

</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";
  aside {
    --color-background: #1d1c1b;
    font-family: var(--font-family-base);
    background-color: var(--color-background);
    position: fixed;
    box-sizing: border-box;
    width: 180px;
    height: 360px;
    right: 10px;
    top: 214px;
    z-index: 100;
    padding: 10px 10px 4px;
    margin: 0 auto;
    & > .container {
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column; //justify-content: space-between;
      & > .code {
        width: 80%;
      }
      & > .info {
        margin-top: 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: var(--color-yellow);
        & > ul {
          margin: 0;
          padding: 0;
          list-style: none;
          & :hover {
          }
          & > .sidebox {
            cursor: pointer;
            display: flex;
            width: 108px;
            flex-direction: row;
            padding: 8px 5px;
            margin: 5px 0;
            border-bottom: 1px solid var(--color-yellow);
            & > span {
              margin-left: 10px;
              flex: 1;
              text-align: center;
              letter-spacing: 2px;
            }
          }
          & > :last-child {
            border: none;
            & > span {
              letter-spacing: 5px;
            }
          }
        }
      }
      & > .sidetop {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50px;
        background-color: #2c2b29;
        color: #a0a0a0;
        text-align: center;
        border: none;
        &:focus {
          outline: none;
        }
        & > span {
          margin: auto;
          letter-spacing: 1px;
          font-size: 15px;
          margin-left: 12px;
          cursor: pointer;
        }
      }
    }
    & > .share-box {
      position: absolute;
      right: 175px;
      bottom: 50px;
      width: 300px;
      height: 56px;
      background-color: var(--color-background);
      border: 2px solid var(--color-yellow);
      // border-right: none;
      color: var(--color-yellow);

      & > ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        cursor: pointer;
        justify-content: space-around;
        margin: 10px auto;
        & > .share-icon {
          display: inline;
          font-size: 20px;
          position: relative;
          &:not(:last-child)::after {
            position: absolute;
            content: "";
            width: 2px;
            height: 16px;
            background-color: var(--color-yellow);
            top: 5px;
            right: -20px;
          }
        }
      }
      &::before,
      &::after {
        border: solid transparent;
        content: " ";
        height: 0px;
        width: 0px;
        left: 100%;
        position: absolute;
      }
      &::before {
        border-width: 12px;
        border-left-color: var(--color-yellow);
        top: 16px;
      }
      &::after {
        top: 18px;
        border-width: 10px;
        border-left-color: var(--color-background);
      }
    }
  }
</style>

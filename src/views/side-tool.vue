<template>
  <aside>
    <div class="container">
      <img src="/static/index/QR-code.png" alt="二维码">
      <ul class="info">
        <li class="sidebox">
          <m-icon class="icon" name="weibo"></m-icon>
          <span>关注微博</span>
        </li>
        <li class="sidebox" @click="phoneVisible = true">
          <m-icon class="icon" name="kefu"></m-icon>
          <span>咨询电话</span>
        </li>
        <li class="sidebox share">
          <m-icon class="icon" name="fenxiang"></m-icon>
          <span>分&emsp;&emsp;享</span>
          <ul class="share-box">
            <li class="share-icon" @click="weixin">
              <m-icon name="pengyouquan"></m-icon>
            </li>
            <li class="share-icon" @click="weibo">
              <m-icon name="weibo"></m-icon>
            </li>
            <li class="share-icon" @click="qq">
              <m-icon name="qq"></m-icon>
            </li>
            <li class="share-icon" @click="weixin">
              <m-icon name="weixin"></m-icon>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="sidetop" @click="goTop">
      <m-icon class="icon" name="xiangshang"></m-icon>
      <span>回到顶部</span>
    </div>

    <el-dialog class="phone" title="联系电话" center :visible.sync="phoneVisible" width="400px">
      <div class="number">+61 733-423-297</div>
    </el-dialog>

    <el-dialog class="dialog" title="快打开微信扫码分享吧" :visible.sync="dialogVisible" width="300px">
      <div class="qrcode" v-loading="qrcode.loading"><img :src="qrcode.url"></div>
    </el-dialog>
  </aside>
</template>

<script>
  import api_other from '@/api/other'

  export default {
    data() {
      return {
        isShow: false,
        phoneVisible: false,
        dialogVisible: false,
        qrcode: {
          loading: false,
          url: ''
        }
      }
    },
    methods: {
      weibo: function () {

      },
      qq: function () {
        let info = this.info
        let p = {
          url: location.hostname, /*获取URL，可加上来自分享到QQ标识，方便统计*/
          desc: '瑞华集团', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
          title: '瑞华集团', /*分享标题(可选)*/
          summary: '瑞虎集团', /*分享摘要(可选)*/
          // pics: '', /*分享图片(可选)*/
          style: '201',
          width: 32,
          height: 32
        }
        let s = []
        for (let i in p) {
          s.push(i + '=' + encodeURIComponent(p[i] || ''))
        }
        window.open(`http://connect.qq.com/widget/shareqq/index.html?${s.join('&')}`)
      },
      weixin: function () {
        this.dialogVisible = true
        this.qrcode.loading = true
        api_other.getQrcode({ content: location.href }).then(url => {
          this.qrcode.url = url
          this.qrcode.loading = false
        })
      },
      goTop() {
        clearInterval(timer);
        var timer = setInterval(function () {
          let target = document.documentElement.scrollTop
          target -= Math.ceil(target / 10) //做减速运动
          window.scrollTo(0, target)
          if (target == 0) {
            clearInterval(timer)
          }
        }, 10)
      }
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  aside {
    position: fixed;
    right: 5px;
    bottom: 40px;
    z-index: 3000;
    box-sizing: border-box;
    background-color: var(--color-background);
    & > .container {
      display: inline-block;
      margin: 20px 20px 0;
      & > .info {
        margin-top: 16px;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: var(--color-yellow);
        & > .sidebox {
          cursor: pointer;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 58px;
          border-bottom: 1px solid color(var(--color-yellow) a(0.3));
          transition: 0.2s;
          &:last-child {
            border: none;
          }
          &:hover {
            color: var(--color-white);
          }
          & > .icon {
            font-size: 18px;
          }
          & > span {
            display: flex;
            justify-content: space-between;
            margin-left: 12px;
            letter-spacing: 1px;
            transform: scaleX(0.94);
          }
          &.share {
            position: relative;
            & > .share-box {
              cursor: pointer;
              color: var(--color-yellow);
              text-align: center;
              position: absolute;
              right: 161px;
              top: 0;
              display: flex;
              align-items: center;
              box-sizing: border-box;
              height: 100%;
              padding: 0 4px;
              border: 2px solid var(--color-yellow);
              background-color: var(--color-background);
              transition: 0.4s;
              transform: scale(0);
              transform-origin: right center;
              & > .share-icon {
                font-size: 18px;
                position: relative;
                width: 52px;
                transition: 0.2s;
                &:not(:last-child)::after {
                  content: "";
                  position: absolute;
                  right: 0;
                  top: 0;
                  bottom: 0;
                  width: 1px;
                  height: 13px;
                  margin: auto 0;
                  background-color: color(var(--color-yellow) a(0.3));
                }
                &:hover {
                  color: var(--color-white);
                  transform: translateY(2px);
                }
              }
              &::before,
              &::after {
                content: " ";
                position: absolute;
                left: 100%;
                width: 0px;
                height: 0px;
                border: solid transparent;
              }
              &::before {
                top: 16px;
                border-width: 12px;
                border-left-color: var(--color-yellow);
              }
              &::after {
                top: 18px;
                border-width: 10px;
                border-left-color: var(--color-background);
              }
            }
            &:hover > .share-box {
              transform: scale(1);
            }
          }
        }
      }
    }
    & > .sidetop {
      cursor: pointer;
      color: #a0a0a0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      text-align: center;
      background-color: #2c2b29;
      & > .icon {
        font-size: 26px;
        margin: 0 4px 0 -6px;
      }
      & > span {
        font-size: 15px;
        letter-spacing: 1px;
        transform: scaleX(0.94);
      }
    }
    & > .phone .number{
      font-size: 28px;
      text-align: center;
      margin-bottom: 20px;
    }
    & > .dialog .qrcode {
      text-align: center;
      & > img {
        width: 180px;
        height: 180px;
      }
    }
  }
</style>

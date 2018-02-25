<template>
  <div class="overseas-info">
    <div class="container">
      <m-title en="estate" cn="海外房产" tips="专注海外精品房产投资，国际顶尖房产投资管理团队"></m-title>
      <m-breadcrumb class="breadcrumb" separator=">">
        <m-breadcrumb-item :to="{name: 'home'}">瑞华网</m-breadcrumb-item>
        <m-breadcrumb-item :to="{name: 'overseas-property'}">海外房产</m-breadcrumb-item>
        <m-breadcrumb-item>{{info.title}}</m-breadcrumb-item>
      </m-breadcrumb>
      <div class="info">
        <div class="page">
          <div class="title">{{info.title}}</div>
          <div class="other">
            <span>作者：{{info.author || '佚名' }}</span>
            <span>来源：{{info.source || '未知'}}</span>
            <span>时间：{{info.publishAt | format}}</span>
          </div>
          <div class="m-page" v-html="info.content || '暂无数据~'"></div>
          <div class="btn-container">
            <m-button class="btn">
              <m-icon class="icon" name="fenxiang"></m-icon>&nbsp;分享给朋友
            </m-button>
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
          </div>
        </div>
        <div class="recommand">
          <m-title class="title" level="2" en="recommend" cn="瑞华推荐"></m-title>
          <m-recommend v-for="item in recommend" :key="item.planid" :item="item"></m-recommend>
        </div>
      </div>
      <section class="recom">
        <m-title level="2" en="information" cn="瑞华房产资讯" line></m-title>
        <div class="list">
          <m-info class="item" v-for="item in recomInfo" :key="item.id" :info="item"></m-info>
        </div>
      </section>
    </div>

    <el-dialog class="dialog" title="快打开微信扫码分享吧" :visible.sync="dialogVisible" width="300px">
      <div class="qrcode" v-loading="qrcode.loading"><img :src="qrcode.url"></div>
    </el-dialog>
  </div>
</template>

<script>
  import api from '@/api/house'
  import api_other from '@/api/other'
  import mInfo from '@/components/m-info.vue'
  import mRecommend from '@/components/m-recommend.vue'

  export default {
    name: 'overseas-info',
    props: ['id'],
    data() {
      return {
        info: {},
        recommend: [],
        recomInfo: [],
        qrcode: {
          url: null,
          loading: true
        },
        dialogVisible: false
      }
    },
    filters: {
      format: function (time) {
        return moment.unix(time).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    methods: {
      weibo: function () {

      },
      qq: function () {
        let info = this.info
        let p = {
          url: location.href, /*获取URL，可加上来自分享到QQ标识，方便统计*/
          desc: '我是渣渣辉，一起来玩贪玩蓝月！', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
          title: info.title, /*分享标题(可选)*/
          summary: info.info, /*分享摘要(可选)*/
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
      }
    },
    components: {
      mRecommend,
      mInfo
    },
    beforeMount() {
      api.getHouseInfoDetail({ id: this.id }).then(info => {
        this.info = info
      })
      api.getHotHouses({ num: 4 }).then(recommend => {
        this.recommend = recommend
      })
      api.getHouseInfo({ num: 8 }).then(recomInfo => {
        this.recomInfo = recomInfo
      })
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .overseas-info {
    background-image: url("/static/background-top.png");
    background-repeat: no-repeat;
    background-size: contain;
    padding-bottom: 90px;
    & > .container {
      width: var(--index-width);
      margin: 0 auto;
      padding-top: var(--index-padding-top);
      & > .breadcrumb {
        margin-bottom: 50px;
      }
      & > .info {
        display: grid;
        grid-gap: var(--grid-gap);
        grid-template-columns: [start] repeat(3, 1fr) [end];
        grid-template-areas: "page page recommand";
        align-items: start;
        & > .page {
          grid-area: page;
          height: 600px;
          bottom: 1px solid color(--color-border);
          & > .title {
            color: var(--font-color-light-2);
            font-size: 24px;
            font-weight: bold;
            line-height: 50px;
          }
          & > .other {
            color: var(--font-color-light-4);
            font-size: 14px;
            line-height: 30px;
            padding-bottom: 20px;
            margin-bottom: 30px;
            & > span {
              margin-right: 36px;
            }
          }
          & > .m-page {
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 80px;
            margin-bottom: 55px;
          }
          & > .btn-container {
            text-align: center;
            margin-bottom: 100px;
            position: relative;
            & > .btn {
              font-size: 18px;
              font-weight: bold;
              display: inline-flex;
              align-content: center;
              justify-content: center;
              height: 66px;
              border-radius: 0%;
              &:focus + .share-box {
                transform: scale(1);
              }
            }
            & > .share-box {
              cursor: pointer;
              color: var(--color-white);
              text-align: center;
              position: absolute;
              left: 0;
              right: 0;
              top: calc(100% + 30px);
              display: flex;
              align-items: center;
              box-sizing: border-box;
              width: 210px;
              height: 56px;
              margin: auto;
              padding: 0 4px;
              background-color: var(--color-yellow);
              transition: 0.4s;
              transform: scale(0);
              transform-origin: top center;
              &:hover {
                transform: scale(1);
              }
              &::before {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: 100%;
                width: 0px;
                height: 0px;
                margin: auto;
                border: solid 12px;
                border-bottom-color: var(--color-yellow);
              }
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
                  background-color: color(var(--color-white) a(0.3));
                }
                &:hover {
                  transform: translateY(2px);
                }
              }
            }
          }
        }
        & > .recommand {
          grid-area: recommand;
          display: grid;
          grid-gap: var(--grid-gap);
          grid-template-columns: 1fr;
        }
      }
      & > .recom {
        margin-top: 40px;
        & > .list {
          & > .item {
            display: inline-block;
            width: 320px;
            margin-right: 100px;
            &:nth-child(3n) {
              margin-right: 0;
            }
          }
        }
      }
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

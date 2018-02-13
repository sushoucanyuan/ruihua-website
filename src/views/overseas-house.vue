<template>
  <div class="overseas-house">
    <div class="container">
      <m-title en="estate" cn="海外房产" tips="专注海外精品房产投资，国际顶尖房产投资管理团队"></m-title>
      <m-breadcrumb separator=">">
        <m-breadcrumb-item :to="{name: 'home'}">瑞华网</m-breadcrumb-item>
        <m-breadcrumb-item :to="{name: 'overseas-property', query: {tabId: 0}}">海外房产</m-breadcrumb-item>
        <m-breadcrumb-item :to="{name: 'overseas-property', query: {tabId: 2}}">墨尔本</m-breadcrumb-item>
        <m-breadcrumb-item>墨尔本本地公寓</m-breadcrumb-item>
      </m-breadcrumb>
      <m-card class="house" direction="row">
        <div class="header" slot="header">
          <img src="/static/estate/house.png">
        </div>
        <div class="body">
          <div class="value">
            <div>总价：
              <span class="number">{{house.rmb}}</span>
              万起（人名币）&nbsp;&nbsp;&nbsp;AUD：83.3万起（澳币）
            </div>
            <div class="rate">
              <m-icon class="icon" name="qian"></m-icon>首付{{house.rate}}</div>
          </div>
          <div class="detail">
            <div class="key ellipsis">项目编号：
              <span class="value">{{house.planid}}</span>
            </div>
            <div class="key ellipsis">
              地&emsp;&emsp;区：
              <span class="value place">{{house.place}}</span>
              城市：
              <span class="value">{{house.city}}</span>
            </div>
            <div class="key ellipsis">房产类型：
              <span class="value">{{house.type}}</span>
            </div>
            <div class="key ellipsis">套内面积：
              <span class="value">{{house.area}}</span>
            </div>
            <div class="key ellipsis">可选户型：
              <span class="value">{{house.layout}}</span>
            </div>
            <div class="key ellipsis">交楼时间：
              <span class="value">{{house.dealtime}}</span>
            </div>
          </div>
          <div class="btns">
            <m-button class="btn" size="large">预约购房</m-button>
            <m-button class="btn" size="large">
              <m-icon class="icon" name="dianhua"></m-icon>&nbsp;&nbsp;
              <span class="number">733-423-297</span>
            </m-button>
          </div>
        </div>
      </m-card>
      <m-card class="steps" direction="row">
        <img class="header" slot="header" src="/static/steps.png">
        <div class="body">
          <div v-for="(item, index) in ['预定房源', '约见律师', '签约合同', '贷款预批', '房屋交割']" :key="index">
            <div>
              <span class="step">Step</span>{{index + 1}}
            </div>
            <div>{{item}}</div>
          </div>
        </div>
      </m-card>
      <m-title class="title" level="2" en="project introduction" cn="项目介绍" line></m-title>
      <div class="intro">{{house.intro}}</div>
      <m-title class="title" level="2" en="surrounding facilities" cn="周边设施" line></m-title>
      <div class="resource">
        <div v-if="house.enduresource">
          <div>教育资源</div>
          <div>{{house.enduresource}}</div>
        </div>
        <div v-if="house.shopresource">
          <div>商业购物</div>
          <div>{{house.shopresource}}</div>
        </div>
        <div v-if="house.healthresource">
          <div>休闲健康</div>
          <div>{{house.healthresource}}</div>
        </div>
        <div v-if="house.trafficresource">
          <div>交通出行</div>
          <div>{{house.trafficresource}}</div>
        </div>
        <div v-if="house.otherresource">
          <div>其它</div>
          <div>{{house.otherresource}}</div>
        </div>
      </div>
      <m-title class="title" level="2" en="property support" cn="物业配套" line></m-title>
      <div class="property"></div>
      <m-title class="title" level="2" en="huxing show" cn="户型展示" line></m-title>
      <div class="show"></div>
      <m-title class="title" level="2" en="recommend" cn="瑞华推荐" line></m-title>
      <div class="recommend">
        <m-recommend v-for="item in recommend" :key="item.planid" :item="item"></m-recommend>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@/api/house'
  import mRecommend from '@/components/m-recommend.vue'

  export default {
    props: ['id'],
    data() {
      return {
        house: {},
        recommend: []
      }
    },
    components: {
      mRecommend
    },
    beforeMount() {
      api.getHouse({ placeid: this.id }).then(house => {
        this.house = house
      })
      api.getHotHouses({ num: 3 }).then(recommend => {
        this.recommend = recommend
      })
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .overseas-house {
    background-image: url("/static/background-top.png");
    background-repeat: no-repeat;
    & > .container {
      --line-height: 32px;
      width: var(--index-width);
      margin: 0 auto;
      padding-top: var(--index-padding-top);
      & > .house {
        & .header {
          width: 635px;
          height: 430px;
          display: flex;
          align-items: center;
          justify-content: center;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
        & .body {
          padding: 25px 56px;
          & > .value {
            color: var(--font-color-light-1);
            font-size: 16px;
            padding-bottom: 10px;
            border-bottom: 1px dashed var(--color-border);
            & .number {
              color: var(--color-orange);
              font-size: 41px;
              font-weight: bold;
            }
            & .rate {
              color: var(--font-color-light-4);
              font-size: 14px;
              line-height: 30px;
              display: flex;
              align-items: center;
              & > .icon {
                font-size: 12px;
                margin-right: 4px;
              }
            }
          }
          & > .detail {
            padding: 20px 0;
            & > .key {
              color: var(--font-color-light-4);
              font-size: 14px;
              line-height: 2.1;
              & .value {
                color: var(--font-color-light-1);
                &.place {
                  display: inline-block;
                  width: 120px;
                }
              }
            }
          }
          & > .btns {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding-top: 10px;
            & > .btn {
              font-weight: bold;
            }
            & > :first-child {
              background-color: var(--color-orange);
            }
            & > :last-child {
              display: flex;
              align-items: center;
              justify-content: center;
              & .icon {
                margin-right: -20px;
              }
              & .number {
                letter-spacing: 0;
                transform: scaleX(0.8);
                transform-origin: center;
              }
            }
          }
        }
      }
      & > .steps {
        margin-top: 40px;
        & .header {
          display: block;
        }
        & .body {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          & > div {
            --color: color(var(--color-yellow) a(0.6));
            --margin: 23px;
            --size: 20px;
            color: var(--color-yellow);
            font-size: 18px;
            font-weight: bold;
            line-height: 1.5;
            text-align: center;
            letter-spacing: 1px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 112px;
            height: 70px;
            margin: 0 var(--margin);
            border: 1px solid var(--color);
            &:not(:last-child)::after {
              color: var(--color);
              font-size: var(--size);
              content: ">";
              position: absolute;
              top: 0;
              bottom: 0;
              right: calc(0px - var(--margin) - var(--size) / 2);
              height: var(--size);
              line-height: var(--size);
              margin: auto 0;
            }
            & > :first-child {
              font-size: 20px;
            }
            & .step {
              font-weight: normal;
              margin-right: 5px;
            }
          }
        }
      }
      & > .title {
        margin-top: 36px;
      }
      & > :matches(.intro, .property, .show) {
        color: var(--font-color-light-2);
        font-size: 14px;
        line-height: var(--line-height);
        padding-top: 30px;
        & > img {
          max-width: 100%;
          margin: 0 auto;
        }
      }
      & > .intro {
        text-indent: 2em;
        padding-top: 20px;
      }
      & > .resource > div {
        line-height: var(--line-height);
        display: flex;
        align-items: flex-start;
        padding: 40px 140px 40px 5px;
        border-bottom: 1px solid var(--color-border);
        & > :first-child {
          color: var(--font-color-light-4);
          font-szie: 16px;
          flex-shrink: 0;
          width: 210px;
        }
        & > :last-child {
          flex-grow: 1;
          font-size: 14px;
        }
        &:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }
      }
      & > .recommend {
        display: grid;
        grid-gap: var(--grid-gap);
        grid-template-columns: [start] repeat(3, 1fr) [end];
        padding-top: 40px;
      }
    }
  }
</style>

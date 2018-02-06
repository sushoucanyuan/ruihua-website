<template>
  <div class="overseas-house">
    <div class="container">
      <m-title en="estate" cn="海外房产" tips="专注海外精品房产投资，国际顶尖房产投资管理团队"></m-title>
      <m-breadcrumb class="breadcrumb" separator=">">
        <m-breadcrumb-item :to="{name: 'home'}">瑞华网</m-breadcrumb-item>
        <m-breadcrumb-item :to="{name: 'overseas-property', query: {tabId: 0}}">海外房产</m-breadcrumb-item>
        <m-breadcrumb-item :to="{name: 'overseas-property', query: {tabId: 2}}">墨尔本</m-breadcrumb-item>
        <m-breadcrumb-item>墨尔本本地公寓</m-breadcrumb-item>
      </m-breadcrumb>
      <m-card class="house" direction="row">
        <div class="header" slot="header">
          <img src="/static/estate/house.png">
        </div>
        <div></div>
      </m-card>
      <m-card class="steps" direction="row">
        <img class="header" slot="header" src="/static/estate/steps.png">
        <div class="body">
          <div v-for="(item, index) in steps" :key="index">
            <div>
              <span class="step">Step</span>{{index + 1}}
            </div>
            <div>{{item}}</div>
          </div>
        </div>
      </m-card>
      <m-title class="title" level="2" en="project introduction" cn="项目介绍" line></m-title>
      <m-title class="title" level="2" en="surrounding facilities" cn="周边设施" line></m-title>
      <m-title class="title" level="2" en="property support" cn="物业配套" line></m-title>
      <m-title class="title" level="2" en="huxing show" cn="户型展示" line></m-title>     
      <m-title class="title" level="2" en="recommend" cn="瑞华推荐" line></m-title>             
    </div>
  </div>
</template>

<script>
  import mCard from '@/components/m-card.vue'
  import mTitle from '@/components/m-title.vue'
  import mBreadcrumb from '@/components/m-breadcrumb.vue'
  import mBreadcrumbItem from '@/components/m-breadcrumb-item.vue'

  export default {
    props: ['id'],
    data() {
      return {
        steps: ['预定房源', '约见律师', '签约合同', '贷款预批', '房屋交割']
      }
    },
    components: {
      mCard,
      mTitle,
      mBreadcrumb,
      mBreadcrumbItem
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .overseas-house {
    background-image: url("/static/background-top.png");
    background-repeat: no-repeat;
    & > .container {
      width: var(--index-width);
      margin: 0 auto;
      padding: 80px 0 100px;
      & > .breadcrumb {
        margin: 45px 0 60px;
      }
      & > .house {
        & .header {
          width: 640px;
          height: 430px;
          display: flex;
          align-items: center;
          justify-content: center;
          & > img {
            width: 100%;
            height: 100%;
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
      & > .title{
        margin-top: 40px;

      }
    }
  }
</style>

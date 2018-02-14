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
            <span>时间：{{info.publishAt}}</span>
          </div>
          <div class="page" v-html="info.content || '暂无数据~'"></div>
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
  </div>
</template>

<script>
  import api from '@/api/house'
  import mRecommend from '@/components/m-recommend.vue'
  import mInfo from '@/components/m-info.vue'

  export default {
    name: 'overseas-info',
    props: ['id'],
    data() {
      return {
        info: {},
        recommend: [],
        recomInfo: []
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
            border-bottom: 1px solid var(--color-border);
            & > span {
              margin-right: 36px;
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
  }
</style>

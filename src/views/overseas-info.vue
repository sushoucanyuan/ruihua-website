<template>
  <div class="overseas-info">
    <div class="container">
      <m-title en="estate" cn="海外房产" tips="专注海外精品房产投资，国际顶尖房产投资管理团队"></m-title>
      <m-breadcrumb class="breadcrumb" separator=">">
        <m-breadcrumb-item :to="{name: 'home'}">瑞华网</m-breadcrumb-item>
        <m-breadcrumb-item :to="{name: 'overseas-property', query: {tabId: 0}}">海外房产</m-breadcrumb-item>
        <m-breadcrumb-item :to="{name: 'overseas-property', query: {tabId: 0}}">瑞华房产资讯</m-breadcrumb-item>
        <m-breadcrumb-item>墨尔本本地公寓</m-breadcrumb-item>
      </m-breadcrumb>
      <div class="info">
        <div class="page"></div>
        <div class="recommand">
          <m-title class="title" level="2" en="recommend" cn="瑞华推荐"></m-title>
          <m-recommend v-for="item in recommend" :key="item.planid" :item="item"></m-recommend>
        </div>
      </div>
      <m-title level="2" en="information" cn="瑞华房产资讯" line></m-title>
    </div>
  </div>
</template>

<script>
  import api from '@/api/house'
  import mBreadcrumb from '@/components/m-breadcrumb.vue'
  import mBreadcrumbItem from '@/components/m-breadcrumb-item.vue'
  import mRecommend from '@/components/m-recommend.vue'

  export default {
    data() {
      return {
        recommend: []
      }
    },
    components: {
      mBreadcrumb,
      mBreadcrumbItem,
      mRecommend
    },
    beforeMount() {
      api.getHotHouses({ num: 4 }).then(recommend => {
        this.recommend = recommend
      })
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .overseas-info {
    background-image: url("/static/background-top.png");
    background-repeat: no-repeat;
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
          background-color: rgb(133, 133, 196);
        }
        & > .recommand {
          grid-area: recommand;
          display: grid;
          grid-gap: var(--grid-gap);
          grid-template-columns: 1fr;
        }
      }
    }
  }
</style>

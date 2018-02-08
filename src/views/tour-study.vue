<template>
  <div class="tour-study">
    <section class="banner">
      <img src="static/tour-study/bg.png" alt="banner">
      <div class="region-tab">
        <m-tabs class="tabs" type="banding" v-model="tabId">
          <m-tab-item v-for="(item, index) in option" :key="index" :id="index">{{item}}</m-tab-item>
        </m-tabs>
      </div>
    </section>
    <section class="list">
      <div class="title">
        <m-title class="recommend-info" :level="2" cn="线路推荐" en="最权威、最专业的移民讲座"></m-title>
        <div class="sort-tool">
          <m-button type="sort" size="mini">推荐</m-button>
          <m-button type="sort" size="mini">时间</m-button>
          <m-button type="sort" size="mini">价格</m-button>

        </div>
      </div>
      <div class="router-cards">
        <m-card class="card" v-for="item in 5" :key="item">
          <img src="static/tour-study/destnation.png" />
        </m-card>
        <div class="Pagination">
        </div>
      </div>
    </section>
    <section class="footer">
      <img src="static/tour-study/footer.png" alt="footer">
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
    import mTabs from '@/components/m-tabs.vue'
    import mTabItem from '@/components/m-tab-item.vue'
    import mTitle from '@/components/m-title.vue'
    import mButton from '@/components/m-button.vue'
    import mCard from '@/components/m-card.vue'

    export default {
        data() {
            return {
                tabId: "1",
                option: ['全部', '旅游', '游学', '考察']
            }
        },
        components: {
            mTabs,
            mTabItem,
            mTitle,
            mButton,
            mCard
        }
    }

</script>

<style scoped lang="postcss">
    @import "../assets/css/var.css";
    .tour-study {
      & > .banner {
        background-color: var(--color-yellow);
        height: 500px;
        position: relative;
        & > img {
          width: 100%;
          height: 100%;
        }
        & > .region-tab {
          z-index: 100;
          position: absolute;
          bottom: -10px;
          width: var(--index-width);
          margin: 0 auto;
          right: 0px;
          left: 0px;
        }
      }
      & > .list {
        width: var(--index-width);
        margin: 90px auto 50px;
        & > .title {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          &::after {
            content: "";
            position: absolute;
            bottom: -18px;
            width: 100%;
            height: 1px;
            background-color: color(var(--font-color-light-4) a(0.6));
          }
        }
        & > .router-cards {
          margin: 50px auto 10px;
          & > .card {
            margin: 20px auto 20px;
          }
          & > .Pagination {
            margin: 20px auto 5px;
            background-color: var(--font-color-light-4);
            width: calc(var(--index-width) / 2);
            height: 50px;
          }
        }
      }
      & > .footer {
        height: 200px;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
    }
</style>

<template>
  <div class="overseas">
    <div class="estate">
      <m-title class="title" :level="1" en="estate" cn="海外房产" tips="专注海外精品房产投资，国际顶尖房产投资管理团队"></m-title>
      <m-tabs class="tabs" v-model="tabId">
        <m-tab-item v-for="(item, index) in sites" :key="index" :id="index">{{item}}</m-tab-item>
      </m-tabs>
      <section class="ruihua-recommend">
        <m-title class="title" :level="2" cn="瑞华推荐" en="recommend"></m-title>
        <m-card class="card" v-for="item in 3" :key="item">
          <img src="static/estate/recommand.png" />
        </m-card>
      </section>
      <section class="info">
        <div class="house-info">
          <m-title class="title" :level="3" cn="房源信息"></m-title>
        </div>
        <div class="house-cards">
          <m-card class="card" v-for="item in 10" :key="item">
            <img src="static/estate/house.png" />
          </m-card>
        </div>
        <m-title class="recommend-info" :level="2" cn="瑞华房产资讯" en="information"></m-title>
        <div class="recommend-card">
          <m-card class="info-list"></m-card>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import mTitle from '@/components/m-title.vue'
  import mCard from '@/components/m-card.vue'
  import mTabs from '@/components/m-tabs.vue'
  import mTabItem from '@/components/m-tab-item.vue'

  export default {
    data() {
      return {
        tabId: this.$route.query.tabId,
        sites: ['全部', '悉尼', '墨尔本', '布里斯班', '黄金海岸', '阿德莱德', '珀斯', '达尔文', '其它地区']
      }
    },
    watch: {
      tabId: function (val, oldVal) {
        this.replace(val)
      },
      '$route.query.tabId': function (val, oldVal) {
        if (val != undefined) {
          this.tabId = val
        }
        else {
          this.replace(oldVal)
        }
      }
    },
    methods: {
      replace(tabId) {
        let name = this.$route.name
        if (name == 'overseas-property') {
          this.$router.replace({ name, query: { tabId } })
        }
      }
    },
    components: {
      mTitle,
      mCard,
      mTabs,
      mTabItem
    },
    beforeRouteEnter(to, from, next) {
      if (to.query.tabId == undefined) {
        next(vm => {
          vm.replace(vm.tabId || 0)
        })
      }
      else {
        next()
      }
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .overseas {
    & > .estate {
      display: grid;
      grid-gap: var(--grid-gap);
      grid-template-columns: [start] repeat(3, 1fr) [end];
      width: var(--index-width);
      margin: 90px auto 100px;
      & > .title {
        grid-column: start / end;
      }
      & > .tabs {
        grid-column: start / end;
        background-color: var(--color-white);
      }
      & > .ruihua-recommend {
        grid-column: start / end;
        display: grid;
        grid-gap: var(--grid-gap);
        grid-template-columns: [start] repeat(3, 1fr) [end];
        margin-bottom: 20px;
        & > .title {
          grid-column: start / end;
        }
        & > .card {
          & img {
            width: 100%;
          }
        }
      }
      & > .info {
        grid-column: start / end;
        display: grid;
        grid-gap: var(--grid-gap);
        grid-template-columns: [start] repeat(3, 1fr) [end];
        grid-template-areas:
          "house-info  house-info  recom-info"
          "house-cards house-cards recom-card";
        & > .house-info {
          grid-area: house-info;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }
        & > .house-cards {
          grid-area: house-cards;
          display: grid;
          grid-gap: var(--grid-gap);
          grid-columns: 1fr;
        }
        & > .recommend-info {
          grid-area: recom-info;
        }
        & > .recommend-card {
          grid-area: recom-card;
          align-items: start;
          & > .info-list {
            height: 800px;
          }
        }
      }
    }
  }
</style>

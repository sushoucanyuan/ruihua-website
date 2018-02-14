<template>
  <div class="overseas">
    <m-swiper class="swiper" :list="banner"></m-swiper>
    <div class="estate">
      <m-title class="title" :level="1" en="estate" cn="海外房产" tips="专注海外精品房产投资，国际顶尖房产投资管理团队"></m-title>
      <div class="grid">
        <m-tabs class="tabs" v-model="tabId">
          <template v-if="citys.length">
            <m-tab-item :id="0">全部</m-tab-item>
            <m-tab-item v-for="item in citys" :key="item.id" :id="item.id">{{item.name}}</m-tab-item>
          </template>
        </m-tabs>
        <section class="ruihua-recommend" v-loading="recom_loading">
          <m-title class="title ellipsis" :level="2" cn="瑞华推荐" en="recommend"></m-title>
          <div class="none" v-show="!recommend.length">暂时没有数据惹~</div>
          <m-recommend v-for="item in recommend" :key="item.planid" :item="item"></m-recommend>
        </section>
        <section class="info">
          <div class="house-info">
            <m-title class="title" :level="3" cn="房源信息"></m-title>
            <m-tool :types="['推荐', '时间', '价格']" :typeId.sync="type" :sortway.sync="sortway"></m-tool>
          </div>
          <div class="house-cards" v-loading="house_loading">
            <div class="none" v-show="!houses.length">暂时没有数据惹~</div>
            <m-card class="card" v-for="item in houses" :key="item.planid" direction="row" :ishot="item.ishot">
              <div class="header" slot="header">
                <img :src="item.picurl" />
              </div>
              <div class="body">
                <div class="title ellipsis">{{item.title}}</div>
                <div class="info">
                  <div>
                    <div class="key ellipsis">房产类型：
                      <span class="value">{{item.type}}</span>
                    </div>
                    <div class="key ellipsis">可选户型：
                      <span class="value">{{item.layout}}</span>
                    </div>
                    <div class="key ellipsis">套内面积：
                      <span class="value">{{item.area}}</span>
                    </div>
                    <div class="key ellipsis">交楼时间：
                      <span class="value">{{item.dealtime}}</span>
                    </div>
                  </div>
                  <div>
                    <div class="rmb">总价：
                      <span class="num">{{item.rmb}}
                      </span>万起（人名币）</div>
                    <div class="aud">AUD：
                      <span class="num">{{item.aud}}</span>万起（澳币）</div>
                    <m-button class="btn" @click.native="$router.push({name: 'overseas-house', params: {id: item.planid}})">咨询</m-button>
                  </div>
                </div>
              </div>
            </m-card>
            <el-pagination class="pagination" layout="prev, pager, next, jumper" :total="count" :page-size="size" :current-page.sync="page" background></el-pagination>
          </div>
          <m-title class="recommend-info" :level="2" cn="瑞华房产资讯" en="information"></m-title>
          <div class="recommend-card">
            <m-card class="card">
              <m-info class="info" v-for="item in info" :key="item.id" :info="item"></m-info>
            </m-card>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@/api/house'
  import mRecommend from '@/components/m-recommend.vue'
  import mSwiper from '@/components/m-swiper.vue'
  import mTool from '@/components/m-tool.vue'
  import mInfo from '@/components/m-info.vue'

  export default {
    data() {
      return {
        banner: [],
        tabId: this.$route.query.tabId,
        citys: [],
        recommend: [],
        recom_loading: true,
        info: [],
        houses: [],
        house_loading: true,
        count: 1,
        size: 10,
        page: 1,
        type: 0,
        sortway: 0
      }
    },
    computed: {
      index: function () {
        return (this.page - 1) * this.size
      }
    },
    watch: {
      tabId: function (val, oldVal) {
        this.replace(val)
      },
      '$route.query.tabId': function (val, oldVal) {
        let placeid = this.placeid
        if (val != undefined) {
          if (this.index) {
            this.page = 1
          }
          else {
            this.getHouses()
          }
          this.getHouseCount()
          this.getHotHouses()
        }
        else {
          this.replace(oldVal)
        }
      },
      page: function (val, oldVal) {
        this.getHouses()
      },
      type: function (val, oldVal) {
        this.getHouses()
      },
      sortway: function (val, oldVal) {
        this.getHouses()
      }
    },
    methods: {
      replace(tabId) {
        let name = this.$route.name
        // 必须判断是不是本页面
        if (name == 'overseas-property') {
          this.$router.replace({ name, query: { tabId } })
        }
      },
      getHouses() {
        this.house_loading = true
        let params = {
          index: this.index,
          type: this.type,
          sortway: this.sortway
        }
        if (this.tabId != 0) {
          params.placeid = this.tabId
        }
        api.getHouses(params).then(houses => {
          this.houses = houses
          this.house_loading = false
        })
      },
      getHotHouses() {
        this.recom_loading = true
        let params = {
          num: 3
        }
        if (this.tabId != 0) {
          params.placeid = this.tabId
        }
        api.getHotHouses(params).then(recommend => {
          this.recommend = recommend
          this.recom_loading = false
        })
      },
      getHouseCount() {
        let params = {}
        if (this.tabId != 0) {
          params.placeid = this.tabId
        }
        api.getHouseCount(params).then(count => {
          this.count = count
        })
      }
    },
    components: {
      mRecommend,
      mSwiper,
      mTool,
      mInfo
    },
    beforeMount() {
      api.getHouseBanners().then(banner => {
        this.banner = banner
      })
      api.getCitys().then(citys => {
        this.citys = citys
        this.getHouses()
        this.getHotHouses()
        this.getHouseCount()
      })
      api.getHouseInfo({ num: 7 }).then(info => {
        this.info = info
      })
    },
    beforeRouteEnter(to, from, next) {
      // 保持 tanId 有值
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

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .overseas {
    padding-bottom: 120px;
    & > .swiper {
      height: 700px;
    }
    & > .estate {
      width: var(--index-width);
      margin: 0 auto;
      padding-top: var(--index-padding-top);
      & > .grid {
        display: grid;
        grid-gap: var(--grid-gap);
        grid-template-columns: [start] repeat(3, 1fr) [end];
        & > .tabs {
          grid-column: start / end;
        }
        & > .ruihua-recommend {
          grid-column: start / end;
          display: grid;
          grid-gap: var(--grid-gap);
          grid-template-columns: [start] repeat(3, 1fr) [end];
          margin-bottom: 20px;
          & > :matches(.title, .none) {
            grid-column: start / end;
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
            & > .tool {
              display: flex;
              align-items: center;
              & .sort {
                cursor: pointer;
                margin-left: 10px;
                & .icon {
                  font-size: 16px;
                  vertical-align: bottom;
                  transform: scale(1);
                  transition: 0.2s;
                  &:matches(.sort-enter, .sort-leave-to) {
                    transform: scale(0);
                    transform-origin: center;
                  }
                }
              }
            }
          }
          & > .house-cards {
            grid-area: house-cards;
            display: grid;
            grid-gap: var(--grid-gap);
            grid-columns: 1fr;
            & > .card {
              & .header {
                width: 359px;
                height: var(--house-img-height);
                overflow: hidden;
                & img {
                  display: block;
                  width: 100%;
                  height: 100%;
                  transition: var(--house-img-transition);
                }
              }
              & .body {
                padding: var(--house-padding);
                & > .title {
                  color: var(--color-yellow);
                  font-size: 20px;
                  font-weight: bold;
                }
                & > .info {
                  padding-top: 12px;
                  & > :first-child {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    padding-bottom: 20px;
                    padding-left: 2px;
                    &::after {
                      content: "";
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      width: 28px;
                      height: 2px;
                      background-color: var(--color-yellow);
                    }
                    & > .key {
                      color: var(--font-color-light-4);
                      font-size: 14px;
                      line-height: 25px;
                      width: 50%;
                      & > .value {
                        color: var(--font-color-light-1);
                      }
                    }
                  }
                  & > :last-child {
                    font-size: 16px;
                    position: relative;
                    margin-top: 10px;
                    & > .rmb {
                      line-height: 28px;
                      & > .num {
                        color: var(--color-yellow);
                        font-size: 24px;
                        font-weight: bold;
                      }
                    }
                    & > .aud {
                      color: var(--font-color-light-4);
                      & > .num {
                        font-weight: bold;
                      }
                    }
                    & > .btn {
                      --spacing: 6px;
                      font-size: 18px;
                      text-indent: var(--spacing); /* 使文字保持居中 */
                      letter-spacing: var(--spacing);
                      position: absolute;
                      top: 0;
                      bottom: 0;
                      right: 0;
                      width: 85px;
                      height: 35px;
                      margin: auto 0;
                      border-radius: 0;
                    }
                  }
                }
              }
              &:hover img {
                transform: var(--house-img-transform);
              }
            }
            & > .pagination {
              text-align: right;
            }
          }
          & > .recommend-info {
            grid-area: recom-info;
          }
          & > .recommend-card {
            grid-area: recom-card;
            align-items: start;
            & > .card {
              padding: 15px 10px 30px 22px;
              &.title{
                width: 340px;
              }
            }
          }
        }
      }
    }
  }
</style>

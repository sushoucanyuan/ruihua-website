<template>
  <div class="overseas">
    <div class="estate">
      <m-title class="title" :level="1" en="estate" cn="海外房产" tips="专注海外精品房产投资，国际顶尖房产投资管理团队"></m-title>
      <div class="grid">
        <m-tabs class="tabs" v-model="tabId">
          <m-tab-item :id="0">全部</m-tab-item>
          <m-tab-item v-for="(item, index) in citys" :key="item.id" :id="index + 1">{{item.name}}</m-tab-item>
        </m-tabs>
        <section class="ruihua-recommend">
          <m-title class="title ellipsis" :level="2" cn="瑞华推荐" en="recommend"></m-title>
          <m-recommend v-for="item in recommend" :key="item.planid" :item="item"></m-recommend>
        </section>
        <section class="info">
          <div class="house-info">
            <m-title class="title" :level="3" cn="房源信息"></m-title>
            <div class="tool">
              <m-tabs type="text" v-model="type">
                <m-tab-item :id="0">默认排序</m-tab-item>
                <m-tab-item :id="1">总价</m-tab-item>
              </m-tabs>
              <div class="sort">
                <transition name="sort" mode="out-in">
                  <m-icon class="icon" v-if="sortway" :key="1" name="paixu-shengxu" @click.native="sortway = 0"></m-icon>
                  <m-icon class="icon" v-else :key="0" name="paixu-jiangxu" @click.native="sortway = 1"></m-icon>
                </transition>
              </div>
            </div>
          </div>
          <div class="house-cards">
            <m-card class="card" v-for="item in houses" :key="item.planid" direction="row">
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
            <el-pagination class="pagination" layout="prev, pager, next, jumper" :page-count="count" :page-size="size" :current-page.sync="page" background></el-pagination>
          </div>
          <m-title class="recommend-info" :level="2" cn="瑞华房产资讯" en="information"></m-title>
          <div class="recommend-card">
            <m-card class="card">
              <div class="info" v-for="item in info" :key="item.id" @click="$router.push({name: 'overseas-info', params: {id: item.id}})">
                <div class="title ellipsis">{{item.title}}</div>
                <div class="publishAt">
                  {{item.publishAt}}
                </div>
              </div>
            </m-card>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@/api'
  import mIcon from '@/components/m-icon.vue'
  import mTitle from '@/components/m-title.vue'
  import mButton from '@/components/m-button.vue'
  import mCard from '@/components/m-card.vue'
  import mTabs from '@/components/m-tabs.vue'
  import mTabItem from '@/components/m-tab-item.vue'
  import mRecommend from '@/components/m-recommend.vue'

  export default {
    data() {
      return {
        tabId: this.$route.query.tabId,
        citys: [],
        recommend: [],
        info: [],
        houses: [],
        count: 1,
        size: 10,
        page: 1,
        type: 0,
        sortway: 0
      }
    },
    computed: {
      placeid: function () {
        if (this.tabId > 0 && this.citys.length) {
          return this.citys[this.tabId - 1].placeid
        }
        else {
          return null
        }
      }
    },
    watch: {
      tabId: function (val, oldVal) {
        this.replace(val)
      },
      '$route.query.tabId': function (val, oldVal) {
        let placeid = this.placeid
        if (val != undefined) {
          this.tabId = val
          this.getHouses({ placeid })
          if (this.page != 1) {
            this.page = 1
          }
          else {
            this.getHouses({ placeid })
          }
          this.getHotHouses({ placeid })
        }
        else {
          this.replace(oldVal)
        }
      },
      page: function (val, oldVal) {
        this.getHouses({ index: val, placeid: this.placeid })
      },
      type: function (val, oldVal) {
        this.getHouses({ type: val, placeid: this.placeid })
      },
      sortway: function (val, oldVal) {
        this.getHouses({ sortway: val, placeid: this.placeid })
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
      getHouses({ index = this.page, type = this.type, sortway = this.sortway, placeid }) {
        let num = this.size
        if (placeid != undefined) {
          api.getHouses({ num, type, sortway, placeid }).then(houses => {
            this.houses = houses
          })
        }
        else {
          api.getHouses({ num, type, sortway }).then(houses => {
            this.houses = houses
          })
        }
      },
      getHotHouses({ placeid }) {
        if (placeid != undefined) {
          api.getHotHouses({ placeid, num: 3 }).then(recommend => {
            this.recommend = recommend
          })
        }
        else {
          api.getHotHouses({ num: 3 }).then(recommend => {
            this.recommend = recommend
          })
        }
      },
      getHousesPage({ placeid }) {
        if (placeid != undefined) {
          api.getHousesPage({ placeid }).then(count => {
            this.count = count
          })
        }
        else {
          api.getHousesPage().then(count => {
            this.count = count
          })
        }
      }
    },
    components: {
      mIcon,
      mTitle,
      mCard,
      mButton,
      mTabs,
      mTabItem,
      mRecommend
    },
    beforeMount() {
      api.getCitys().then(citys => {
        this.citys = citys
        let placeid = this.placeid
        this.getHouses({ placeid })
        this.getHotHouses({ placeid })
        this.getHousesPage({ placeid })
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
              & .info {
                cursor: pointer;
                position: relative;
                margin: 26px 0;
                &::after {
                  content: "";
                  position: absolute;
                  bottom: 0;
                  left: 4px;
                  width: 93%;
                  height: 1px;
                  background-color: color(var(--color-border) a(0.4));
                }
                & .title {
                  font-size: 16px;
                  font-weight: bold;
                  letter-spacing: 1px;
                  display: flex;
                  align-items: center;
                  transform: scaleX(0.98);
                  transform-origin: left center;
                  transition: 0.1s;
                  &::before {
                    content: "";
                    display: inline-block;
                    width: 7px;
                    height: 7px;
                    margin: 4px;
                    background-color: var(--color-yellow);
                    border-radius: 50%;
                  }
                }
                & .publishAt {
                  color: var(--font-color-light-4);
                  font-size: 12px;
                  line-height: 36px;
                  padding-left: 22px;
                }
                &:hover .title {
                  color: var(--color-yellow);
                }
              }
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="tour-study">
    <section class="banner">
      <transition name="img">
        <img v-if="picurl" :src="picurl">
      </transition>
    </section>
    <m-tabs class="tabs" type="banding" v-model="typeId">
      <template v-if="types.length">
        <m-tab-item :id="0">全部</m-tab-item>
        <m-tab-item v-for="(item, index) in types" :key="index" :id="item.id">{{item.name}}</m-tab-item>
      </template>
    </m-tabs>
    <section class="list" v-loading="loading">
      <div class="title">
        <m-title class="recommend-info" :level="2" cn="线路推荐" tips="最权威、最专业的移民讲座"></m-title>
        <m-tool :types="['推荐', '时间', '价格']" :typeId.sync="type" :sortway.sync="sortway"></m-tool>
      </div>
      <div class="none" v-show="!trips.length">暂时没有数据惹~</div>
      <m-card class="card" v-for="item in trips" :key="item.id" direction="row" @click.native="$router.push({name: 'tour-study-detail', params: {id: item.id}})">
        <div class="header" slot="header">
          <img :src="item.picurl" />
        </div>
        <div class="body">
          <div class="title">{{item.title}}</div>
          <div class="advantage">
            <span>{{item.advantage}}</span>
          </div>
          <div class="container">
            <div>
              <div class="info ellipsis">{{item.info}}</div>
              <div class="schedule ellipsis">班期：{{item.schedule}}</div>
            </div>
            <div>
              <div class="person">{{item.person}}人出游</div>
              <div class="price">
                <span class="num">{{item.price}}</span>起
              </div>
            </div>
          </div>
        </div>
      </m-card>
      <el-pagination class="pagination" layout="prev, pager, next, jumper" :page-count="count" :page-size="num" @current-change="page => this.page = page" background></el-pagination>
    </section>
    <tour-study-footer></tour-study-footer>
  </div>
</template>

<script>
  import api from '@/api/trip'
  import mTool from '@/components/m-tool.vue'
  import tourStudyFooter from '@/views/tour-study-footer.vue'

  export default {
    data() {
      return {
        picurl: '',
        types: [],
        typeId: 0,
        trips: [],
        count: 0,
        num: 5,
        page: 1,
        type: 0,
        sortway: 0,
        loading: true
      }
    },
    computed: {
      index: function () {
        return this.page - 1
      }
    },
    methods: {
      getTrips: function () {
        this.loading = true
        let params = {
          num: this.num,
          index: this.index,
          type: this.type,
          sortway: this.sortway
        }
        if (this.typeId) {
          params.triptype = this.typeId
        }
        api.getTrips(params).then(trips => {
          this.trips = trips
          this.loading = false
        })
      }
    },
    watch: {
      typeId: function () {
        this.getTrips()
      },
      type: function () {
        this.getTrips()
      },
      sortway: function () {
        this.getTrips()
      },
      page: function () {
        this.getTrips()
      }
    },
    components: {
      mTool,
      tourStudyFooter
    },
    beforeMount() {
      api.getTripBannerImg().then(picurl => {
        this.picurl = picurl
      })
      api.getTripType().then(types => {
        this.types = types
        this.getTrips()
        api.getCount().then(count => {
          this.count = count
        })
      })
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .tour-study {
    & > .banner {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 60px;
      & > img {
        display: block;
        width: 100%;
        transition: 1s;
        &.img-enter {
          width: 0;
        }
      }
    }
    & > .tabs {
      width: var(--index-width);
      margin: 0 auto;
      transform: translateY(-50%);
    }
    & > .list {
      width: var(--index-width);
      margin: var(--index-padding-top) auto 150px;
      & > .title {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding-bottom: 10px;
        margin-bottom: 50px;
        border-bottom: 1px solid var(--color-line);
      }
      & > .none {
        color: var(--color-yellow);
        font-size: 28px;
        letter-spacing: 5px;
        text-align: center;
        padding: 150px 0;
      }
      & > .card {
        cursor: pointer;
        margin-bottom: 26px;
        & .header {
          width: 320px;
          height: 170px;
          padding: 4px;
          & > img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        & .body {
          padding: 15px 20px;
          & > .title {
            font-size: 18px;
            font-weight: bold;
            line-height: 38px;
            letter-spacing: 1px;
            border-bottom: 1px solid var(--color-line);
          }
          & > .advantage > span {
            --height: 26px;
            color: var(--color-white);
            font-size: 14px;
            letter-spacing: 1px;
            line-height: var(--height);
            display: inline-block;
            padding: 0 18px;
            margin: 11px 0;
            border-radius: calc(var(--height) / 2);
            background-color: var(--color-yellow);
          }
          & > .container {
            display: flex;
            & > :first-child {
              flex-grow: 1;
              align-items: flex-end;
              & > :matches(.info, .schedule) {
                color: var(--font-color-light-4);
                font-size: 14px;
                line-height: 28px;
              }
            }
            & > :last-child {
              font-size: 14px;
              letter-spacing: 1px;
              display: flex;
              align-items: center;
              & > .person {
                line-height: 33px;
                padding: 0 10px;
                border-radius: 5px;
                border: 1px solid var(--color-border);
                margin-right: 25px;
                transition: 0.1s;
                &:hover {
                  color: var(--color-yellow);
                  border-color: var(--color-yellow);
                }
              }
              & > .price {
                color: var(--color-orange);
                font-weight: bold;
                text-align: right;
                min-width: 120px;
                & > .num {
                  font-size: 38px;
                  position: relative;
                  &::before {
                    content: "￥";
                    font-size: 14px;
                    font-weight: normal;
                    position: absolute;
                    top: 8px;
                    left: -14px;
                  }
                }
              }
            }
          }
        }
      }
      & > .pagination {
        text-align: center;
        margin-top: 44px;
      }
    }
  }
</style>

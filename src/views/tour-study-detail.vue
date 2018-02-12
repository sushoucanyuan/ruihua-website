<template>
  <div class="tourstudy-detail">
    <div class="container">
      <m-title :level="1" en="toutism" cn="旅游&游学" tips="定制旅游，游学自住一站式VIP服务"></m-title>
      <m-breadcrumb class="breadcrumb" separator=">">
        <m-breadcrumb-item :to="{name: 'home'}">瑞华网</m-breadcrumb-item>
        <m-breadcrumb-item :to="{name: 'tour-study', query: {tabId: 0}}">旅游游学</m-breadcrumb-item>
        <m-breadcrumb-item>{{trip.title}}</m-breadcrumb-item>
      </m-breadcrumb>
      <div class="info">
        <m-card class="detail" direction="row">
          <m-swiper-thumbnail class="swiper" slot="header" :list="trip.managebanners"></m-swiper-thumbnail>
          <div class="body">
            <div class="title">{{trip.title}}</div>
            <div class="detail">
              <div class="ellipsis">
                <span class="key">价&emsp;&emsp;格：</span>
                <span class="value">
                  <span class="icon">￥</span>
                  <span class="price">{{trip.price}}</span>
                  RMB
                </span>
              </div>
              <div>
                <span class="key">产品特色：</span>
                <span class="value">{{trip.advantage}}</span>
              </div>
              <div>
                <span class="key">行&emsp;&emsp;程：</span>
                <span class="value">{{trip.days}}天</span>
              </div>
              <div>
                <span class="key">包&emsp;&emsp;含：</span>
                <span class="value include">{{trip.include}}</span>
              </div>
              <div>
                <span class="key">资讯热线：</span>
                <span class="value">{{trip.phone}}</span>
              </div>
            </div>
            <div class="btns">
              <m-button class="btn" size="large">马上预定</m-button>
              <m-button class="btn" size="large">
                <m-icon class="icon" name="dianhua"></m-icon>&nbsp;&nbsp;
                <span class="number">733-423-297</span>
              </m-button>
            </div>
          </div>
        </m-card>
        <div class="travel-highlights">
          <m-title class="title" :level="2" cn="旅行亮点" en="travel highlights"></m-title>
          <div class="exhibition">
            <div>
              <img :src="trip.lightpicurl1">
            </div>
            <div>
              <div class="title">{{trip.lighttitle1}}</div>
              <div class="content">{{trip.lightcontent1}}</div>
            </div>
            <div>
              <img :src="trip.lightpicurl2">
            </div>
            <div>
              <div class="title">{{trip.lighttitle2}}</div>
              <div class="content">{{trip.lightcontent2}}</div>
            </div>
            <div>
              <img :src="trip.lightpicurl3">
            </div>
            <div>
              <div class="title">{{trip.lighttitle3}}</div>
              <div class="content">{{trip.lightcontent3}}</div>
            </div>
            <div>
              <img :src="trip.lightpicurl">
            </div>
          </div>
        </div>
        <div class="schedule">
          <m-title :level="2" cn="行程安排" en="schedule"></m-title>
          <m-card class="schedule-info" v-html="trip.schedule || '暂无说明~'"></m-card>
          <m-tabs class="intruction-tabs" type="tag" v-model="tripId">
            <m-tab-item v-for="(item, index) in ['费用说明','付款方式','签证说明','行前准备','常见问题']" :key="index" :id="index">{{item}}</m-tab-item>
          </m-tabs>
          <m-card class="intruction" v-html="intruction || '暂无说明~'"></m-card>
        </div>
      </div>
      <section class="recommend">
        <m-title class="title" :level="2" cn="瑞华推荐" en="recommend" line></m-title>
        <div class="cards">
          <m-card class="card" v-for="item in recommend" :key="item.id">
            <div class="tips">热门线路</div>
            <div class="header" slot="header">
              <img :src="item.picurl" />
              <div class="tips">热门推荐</div>
            </div>
            <div class="body">{{item.title}}</div>
          </m-card>
        </div>
      </section>
    </div>
    <tour-study-footer></tour-study-footer>
  </div>
</template>

<script>
  import api from '@/api/trip'
  import mIcon from '@/components/m-icon.vue'
  import mTitle from '@/components/m-title.vue'
  import mButton from '@/components/m-button.vue'
  import mBreadcrumb from '@/components/m-breadcrumb.vue'
  import mBreadcrumbItem from '@/components/m-breadcrumb-item.vue'
  import mCard from '@/components/m-card.vue'
  import mSwiperThumbnail from '@/components/m-swiper-thumbnail.vue'
  import mTabs from '@/components/m-tabs.vue'
  import mTabItem from '@/components/m-tab-item.vue'
  import tourStudyFooter from '@/views/tour-study-footer.vue'

  export default {
    props: ['id'],
    data() {
      return {
        trip: {},
        tripId: 0,
        recommend: []
      }
    },
    computed: {
      intruction: function () {
        let trip = this.trip
        switch (this.tripId) {
          case 0: return trip.paynote
          case 1: return trip.payway
          case 2: return trip.visanote
          case 3: return trip.beforenote
          case 4: return trip.commonquestion
        }
      }
    },
    components: {
      mTitle,
      mBreadcrumb,
      mBreadcrumbItem,
      mCard,
      mSwiperThumbnail,
      mTabs,
      mTabItem,
      tourStudyFooter,
      mIcon,
      mButton
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        api.getTripDetail({ id: vm.id }).then(trip => {
          vm.trip = trip
        })
        api.getHotTrips().then(recommend => {
          vm.recommend = recommend
        })
      })
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .tourstudy-detail {
    background-image: url("/static/tour-study/detail-bg.png");
    background-repeat: no-repeat;
    & > .container {
      --border-color: #c9c9c9;
      width: var(--index-width);
      margin: 0 auto;
      padding-top: var(--index-padding-top);
      & > .info {
        margin: 50px auto 50px;
        & > .detail {
          & .swiper {
            width: 720px;
            height: 480px;
          }
          & .body {
            padding: 35px 40px;
            & > .title {
              font-size: 18px;
              font-weight: bold;
              line-height: 40px;
              padding-bottom: 5px;
              border-bottom: 1px dashed var(--color-border);
            }
            & > .detail {
              padding-top: 5px;
              & > div {
                color: var(--font-color-light-4);
                font-size: 14px;
                line-height: 2.1;
                display: flex;
                &.ellipsis {
                  display: block;
                }
                & > .key {
                  flex-shrink: 0;
                  vertical-align: baseline;
                  padding-right: 15px;
                }
                & > .value {
                  color: var(--font-color-light-1);
                  & > .icon {
                    color: var(--color-orange);
                    font-size: 18px;
                    font-weight: bold;
                    display: inline-block;
                    transform: translate(6px, -10px);
                  }
                  & > .price {
                    color: var(--color-orange);
                    font-size: 32px;
                    font-weight: bold;
                  }
                }
              }
            }
            & > .btns {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding-top: 50px;
              & > .btn {
                width: 185px;
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
        & > .travel-highlights {
          margin-top: 60px;
          & > .exhibition {
            display: grid;
            grid-gap: 6px;
            grid-template-rows: [start] repeat(2, 50%) [end];
            grid-template-columns: [start] repeat(6, 1fr) [end];
            margin-top: 25px;
            height: 400px;
            & img {
              display: block;
              width: 100%;
              height: 100%;
            }
            & > :nth-child(even) {
              color: var(--color-yellow);
              text-align: center;
              position: relative;
              display: flex;
              flex-direction: column;
              padding: 50px 30px 0;
              border: 2px solid var(--color-yellow);
              &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 0;
                border: 25px solid transparent;
                border-top-color: var(--color-yellow);
                border-left-color: var(--color-yellow);
              }
              & > .title {
                font-size: 24px;
                font-weight: bold;
                letter-spacing: 4px;
              }
              & > .content {
                font-size: 14px;
                font-weight: bold;
                line-height: 22px;
                letter-spacing: 1px;
                margin-top: 12px;
              }
            }
            & > :last-child {
              grid-row: start / end;
              grid-column: 4 / end;
            }
          }
        }
        & > .schedule {
          margin-top: 80px;
          & > :matches(.schedule-info, .intruction) {
            padding: 30px 60px;
            overflow-y: auto;
          }
          & > .schedule-info {
            margin-top: 40px;
            height: 900px;
          }
          & > .intruction-tabs {
            margin-top: 74px;
          }
          & > .intruction {
            font-size: 14px;
            line-height: 30px;
            letter-spacing: 1px;
            height: 560px;
            margin-top: 4px;
            border: 1px solid var(--border-color);
          }
        }
        & > .recommend {
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
      }
      & > .recommend > .cards {
        display: grid;
        grid-gap: var(--grid-gap);
        grid-template-columns: [start] repeat(3, 1fr) [end];
        padding-top: 40px;
        & > .card {
          cursor: pointer;
          position: relative;
          & .tips {
            color: var(--color-white);
            font-size: 17px;
            font-weight: bold;
            line-height: 45px;
            text-align: center;
            letter-spacing: 1px;
            position: absolute;
            top: 0;
            left: 0;
            width: 120px;
            background-color: var(--color-orange);
          }
          & .header {
            height: var(--house-img-height);
            overflow: hidden;
            & img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
          & .body {
            font-size: 18px;
            line-height: 24px;
            font-family: var(--font-family-normal);
            letter-spacing: 1px;
            padding: 18px 32px 28px;
          }
        }
      }
    }
  }
</style>

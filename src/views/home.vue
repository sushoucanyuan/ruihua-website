<template>
  <div class="home">
    <m-swiper class="swiper" :list="banner"></m-swiper>
    <section class="about">
      <div>
        <span class="line"></span>
        <div class="container">
          <m-title class="title" :level="1" en="about" cn="公司简介"></m-title>
          <div class="cn">瑞华集团成立于2014年，总部设立于澳大利亚昆士兰省。瑞华集团扎根于澳大利亚，为澳洲本地及中国大陆的华人服务，业务涉及房地产销售、地产开发、房产租赁与管理、贷款服务、基金管理、国际猎聘、以及投资移民等多个领域。</div>
          <div class="en">Rivo Group was founded in Queensland, Australia in 2014. Based in Australia, Rivo provides professional servises to Chinese clients in Australia and Mainland China.Services across a range of areas from property development, property sales, property letting and man-agement, finance services, fund management, international recruit-ment to investment immigration.</div>
          <m-button class="btn" type="plain" @click="$router.push({name: 'about-ruihua'})">了解我们</m-button>
        </div>
      </div>
      <div>
        <span class="line"></span>
        <div class="container">
          <img src="/static/home-about.png">
          <div class="info">
            <div class="cn">
              <div>以客户为中心</div>
              <div>以创新为根本</div>
            </div>
            <div class="en">
              <div>CUSTOMER IS THE CENTER</div>
              <div>INNOVATION IS FUNDAMENTAL</div>
            </div>
            <div class="tips">长期艰苦奋斗、敢于自我批判&nbsp;&nbsp;忠诚、真正、善良</div>
          </div>
        </div>
      </div>
    </section>
    <section class="estate">
      <div class="container">
        <div class="title">
          <m-title :level="1" en="estate" cn="海外房产" tips="专注海外精品房产投资，国际顶尖房产投资管理团队"></m-title>
          <m-button class="btn" type="plain" size="small" @click="$router.push({name: 'overseas-property', query: {tabId: 0}})">更多</m-button>
        </div>
        <div class="grid" v-loading="estate.loading">
          <m-tabs class="tabs" type="button" v-model="estate.tabId">
            <m-tab-item v-for="item in estate.citys" :key="item.id" :id="item.id">{{item.name}}</m-tab-item>
          </m-tabs>
          <div class="none" v-if="estate.citys.length" v-show="!estate.houses.length">暂时没有数据惹~</div>
          <m-card class="card" v-for="item in estate.houses" :key="item.id" :ishot="item.ishot" @click.native="$router.push({name: 'overseas-house', params: {id: item.planid}})">
            <div class="header" slot="header">
              <img :src="item.picurl" />
            </div>
            <div class="body">
              <div class="title">{{item.title}}</div>
              <div class="value">
                总价：￥
                <span class="num">{{item.rmb}}</span>
                万起
              </div>
              <div class="type">类型：{{item.type}} / 套内面积：{{item.area}}</div>
            </div>
          </m-card>
        </div>
      </div>
    </section>
    <section class="toutism">
      <div class="container">
        <div class="title">
          <m-title :level="1" en="toutism" cn="旅游&amp;游学" tips="定制旅游，留学自住一站式VIP服务"></m-title>
          <m-button class="btn" type="plain" size="small" @click="$router.push({name: 'tour-study'})">更多</m-button>
        </div>
        <div class="grid" v-loading="toutism.loading">
          <m-tabs class="tabs" type="button" v-model="toutism.tabId">
            <m-tab-item v-for="item in toutism.types" :key="item.id" :id="item.id">{{item.name}}</m-tab-item>
          </m-tabs>
          <div class="none" v-show="!toutism.trips.length">暂时没有数据惹~</div>
          <m-card class="card" v-for="item in toutism.trips" :key="item.id" :ishot="item.ishot" @click.native="$router.push({name: 'tour-study-detail', params: {id: item.id}})">
            <div class="header" slot="header">
              <img :src="item.picurl" />
            </div>
            <div class="body">
              <div class="title">{{item.title}}</div>
              <div class="info">{{item.info}}</div>
              <div class="tips">机票 / 酒店 / 景点 / 活动 / 路书 / 签证 / 保险 / WiFi，一价全包</div>
            </div>
          </m-card>
        </div>
      </div>
    </section>
    <section class="trustFund">
      <div class="container">
        <div class="title">
          <m-title :level="1" en="trust fund" cn="信托基金" tips="移民安家，一站式尊贵VIP服务"></m-title>
          <m-button class="btn" type="plain" size="small" @click="$router.push({name: 'trust-fund'})">更多</m-button>
        </div>
        <div class="grid">
          <m-card class="card" v-for="item in trustFund.funds" :key="item.id" :ishot="item.ishot" @click.native="$router.push({name: 'trust-fund-detail', params: {id: item.id}})" notZoom>
            <div class="header" slot="header">
              <img :src="item.picurl1" />
            </div>
            <div class="body">
              <div class="line"></div>
              <div class="name">{{item.fundname}}</div>
              <div class="intro">{{item.intro}} </div>
            </div>
          </m-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import api_other from '@/api/other'
  import api_house from '@/api/house'
  import api_trip from '@/api/trip'
  import api_fund from '@/api/fund'
  import mSwiper from '@/components/m-swiper.vue'

  export default {
    data() {
      return {
        banner: [],
        estate: {
          tabId: 0,
          citys: [],
          houses: [],
          loading: false
        },
        toutism: {
          tabId: 0,
          types: [],
          trips: [],
          loading: false
        },
        trustFund: {
          funds: []
        },
        swiper: {
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet(index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom banner-pagination"></span>`
            }
          },
          navigation: {
            nextEl: '.banner-button-next',
            prevEl: '.banner-button-prev',
          }
        }
      }
    },
    watch: {
      'estate.tabId': function (val, oldVal) {
        this.estate.loading = true
        api_house.getHouses({ placeid: val, num: 6 }).then(houses => {
          this.estate.houses = houses
          this.estate.loading = false
        })
      },
      'toutism.tabId': function (val, oldVal) {
        this.toutism.loading = true
        api_trip.getTrips({ triptype: val, num: 4 }).then(trips => {
          this.toutism.trips = trips
          this.toutism.loading = false
        })
      }
    },
    components: {
      mSwiper
    },
    beforeMount() {
      api_other.getBannerList().then(banner => {
        this.banner = banner
      })
      api_house.getCitys().then(citys => {
        this.estate.citys = citys
        this.estate.tabId = citys[0].id
      })
      api_trip.getTripType().then(types => {
        this.toutism.types = types
        this.toutism.tabId = types[0].id
      })
      api_fund.getFunds().then(funds => {
        this.trustFund.funds = funds
      })
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .home {
    background-color: #f5f5f5;
    padding-bottom: 80px;
    & > .about {
      display: flex;
      & > div {
        --padding-top: 130px;
        --padding-gap: 110px;
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: 50%;
        padding: var(--padding-top) 0 110px;
        & > .line {
          --height: 2px;
          position: absolute;
          top: calc(var(--padding-top) - var(--height) / 2);
          height: var(--height);
          width: 160px;
        }
        & > .container {
          box-sizing: border-box;
          width: calc(var(--index-width) / 2);
        }
        &:nth-child(1) {
          justify-content: flex-end;
          & > .line {
            right: 0;
            background-color: var(--color-yellow);
          }
          & > .container {
            padding-right: var(--padding-gap);
            & > .title {
              margin-top: -10px;
            }
            & > .cn {
              font-size: 14px;
              line-height: 25px;
              letter-spacing: 0.5px;
            }
            & > .en {
              font-size: 14px;
              line-height: 18px;
              letter-spacing: 0.5px;
              margin-top: 25px;
            }
            & > .btn {
              margin-top: 70px;
            }
          }
        }
        &:nth-child(2) {
          background-color: var(--color-yellow);
          & > .line {
            left: 0;
            background-color: var(--color-white);
          }
          & > .container {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding-left: var(--padding-gap);
            & > img {
              margin-top: 100px;
            }
            & > .info {
              color: var(--color-white);
              width: 334px;
              & > .cn {
                font-family: var(--font-family-thin);
                font-size: 53px;
                line-height: 70px;
                letter-spacing: 2px;
                margin-top: 50px;
              }
              & > .en {
                font-family: var(--font-family-normal);
                font-size: 14px;
                line-height: 20px;
                letter-spacing: 1px;
                margin-top: 25px;
                padding-left: 3px;
              }
              & > .tips {
                font-family: var(--font-family-normal);
                font-size: 16px;
                line-height: 20px;
                letter-spacing: 1px;
                margin-top: 40px;
              }
            }
          }
        }
      }
    }
    & > section:not(:last-child) {
      border-bottom: 2px solid var(--color-yellow);
    }
    & > section:not(.about) {
      & > .container {
        width: var(--index-width);
        margin: 0 auto;
        padding: 75px 0 105px;
        & > .title {
          grid-column: start / end;
          display: flex;
          justify-content: space-between;
          & > .btn {
            margin-top: 16px;
          }
        }
        & > .grid {
          display: grid;
          grid-gap: var(--grid-gap);
          grid-template-columns: [start] repeat(3, 1fr) [end];
          & > .tabs {
            grid-column: start / end;
          }
          & > .none {
            grid-column: start / end;
          }
          & > .card {
            cursor: pointer;
            & .header {
              width: 100%;
            }
            & .body {
              padding: var(--house-padding);
              box-sizing: border-box;
            }
          }
        }
      }
      &.estate {
        & .header {
          height: var(--house-img-height);
        }
        & .body {
          transform: scaleX(0.94);
          transform-origin: left center;
          overflow: hidden;
          & .title {
            font-size: 18px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          & .value {
            font-size: 16px;
            & > .num {
              color: var(--color-yellow);
              font-size: 28px;
              font-weight: bold;
            }
          }
          & .type {
            color: var(--font-color-light-4);
            font-size: 14px;
            margin-top: 4px;
          }
        }
      }
      &.toutism {
        background-color: var(--color-white);
        & > .container > .grid {
          grid-template-columns: [start] repeat(2, 1fr) [end];
        }
        & .header {
          height: 285px;
        }
        & .body {
          & > .title {
            color: var(--color-yellow);
            font-size: 22px;
            font-weight: bold;
          }
          & > .info {
            color: var(--font-color-light-2);
            font-size: 16px;
            font-weight: bold;
            line-height: 36px;
          }
          & > .tips {
            color: var(--font-color-light-4);
            font-size: 14px;
            margin-top: 15px;
          }
        }
      }
      &.trustFund {
        & .header {
          height: 240px;
        }
        & .body {
          & > .line {
            width: 28px;
            height: 3px;
            background-color: var(--color-yellow);
            margin: 16px 0 22px;
          }
          & > .name {
            color: var(--font-color-light-1);
            font-size: 20px;
            margin-bottom: 5px;
          }
          & > .intro {
            color: var(--font-color-light-4);
            font-size: 20px;
            line-height: 25px;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
</style>

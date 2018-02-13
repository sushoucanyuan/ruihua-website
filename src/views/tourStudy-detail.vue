<template>
  <div class="page">
    <div class="tourstudy-detail">
      <img src="static/tour-study/detail-bg.png" alt="">
      <div class="title">
        <m-title class="title" :level="1" en="toutism" cn="旅游&游学" tips="定制旅游，游学自住一站式VIP服务"></m-title>
      </div>
      <div class="info">
        <m-breadcrumb class="breadcrumb" separator=">">
          <m-breadcrumb-item :to="{name: 'home'}">瑞华网</m-breadcrumb-item>
          <m-breadcrumb-item :to="{name: 'tour-study', query: {tabId: 0}}">旅游游学</m-breadcrumb-item>
          <m-breadcrumb-item>{{productInfo}}</m-breadcrumb-item>
        </m-breadcrumb>
        <div class="detial">
          <div class="slide">
            <img src="static/tour-study/product.png" alt="产品详情">
          </div>
          <div class="info">

          </div>
        </div>
        <div class="travel-highlights">
          <m-title class="title" :level="2" cn="旅行亮点" en="travel highlights"></m-title>
          <div class="exhibition">
            <div class="left">
              <div class="card" v-for="item in 3" :key="item">
                <img src="static/tour-study/exhibition-2.png" alt="亮点封面">
              </div>
              <div class="card" v-for="item in 3" :key="item">
                <img src="static/tour-study/exhibition-2.png" alt="亮点封面">
              </div>
            </div>
            <div class="right">
              <img src="static/tour-study/exhibition-1.png" alt="亮点封面">
            </div>
          </div>
        </div>
        <div class="schedule">
          <m-title class="title" :level="2" cn="行程安排" en="schedule"></m-title>
          <div class="schedule-info">
          </div>
          <div class="intruction">
          </div>
        </div>
        <section class="recommend">
          <m-title class="title" :level="2" cn="瑞华推荐" en="recommend"></m-title>
          <m-card class="card" v-for="item in 3" :key="item">
            <img src="static/estate/recommand.png" />
          </m-card>
        </section>

      </div>
    </div>
    <section class="footer">
      <img src="static/tour-study/footer.png" alt="footer">
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import mBreadcrumb from '@/components/m-breadcrumb.vue'
  import mBreadcrumbItem from '@/components/m-breadcrumb-item.vue'

  export default {
    data() {
      return {

      }

    },
    props: {
      productInfo: {

      }
    },
    components: {
      mBreadcrumb,
    }
  }

</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";
  .tourstudy-detail {
    --border-color: #c9c9c9;
    width: var(--index-width);
    margin: 90px auto 100px;
    & > img {
      z-index: -100;
      position: absolute;
      top: 0;
      right: 0;
    }
    & > .info {
      margin: 50px auto 50px;
      & > .detial {
        margin: 10px auto 50px;
        height: 482px;
        display: flex;
        flex-direction: row;
        border: 1px solid var(--border-color);
        & > .slide {
          width: 60%;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
        & > .info {
          width: 40%;
          background-color: #fff;
        }
      }
      & > .travel-highlights {
        & > .exhibition {
          margin: 10px auto 50px;
          height: 400px;
          width: 100%;
          display: flex;
          justify-content: space-around;
          & > .left {
            width: 50%;
            height: 100%;
            display: grid;
            grid-gap: 10px 5px;
            grid-template-columns: [start] repeat(3, 1fr) [end];
            & > .card {
              border: 2px solid #c59b54;
              width: 194.9px;
              height: 194.9px;
              box-sizing: border-box;
              & > img {
                width: 190.9px;
                height: 190.9px;
              }
            }
          }
          & > .right {
            width: 48%;
            & > img {
              height: 100%;
              width: 100%;
            }
          }
        }
      }
      & > .schedule {
        & > .schedule-info {
          margin: 10px auto 10px;
          height: 923px;
          border: 1px solid var(--border-color);
        }
        & > .intruction {
          margin: 40px auto 50px;
          height: 560px;
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
  }
  .footer {
    width: 100%;
    & > img {
      width: 100%;
      height: 200px;
    }
  }
</style>

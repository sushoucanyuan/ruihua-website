<template>
  <div class="detail">
    <m-title :level="1" cn="信托基金" en="trust fund" tips="您的职能财富管家"></m-title>
    <m-card class="card">
      <div class="name">{{fund.fundname}}</div>
      <div class="info">
        <div class="rate">
          <div>
            <span>{{fund.rate}}</span>%</div>
          <div>预计年化收益</div>
        </div>
        <div class="cycle">
          <div>
            <span>{{fund.cycle}}</span>天</div>
          <div>预计年化收益</div>
        </div>
        <div class="money">
          <div>
            <span>募集总额：</span>{{fund.totalmoney}}元</div>
          <div>
            <span>还款方式：</span>{{fund.intro}}</div>
          <div>
            <span>项目评级：</span>{{fund.type}}</div>
        </div>
        <div class="time">
          <div>
            <span>保障方式：</span>{{fund.grantway}}</div>
          <div>
            <span>项目起息：</span>{{fund.starttime}}</div>
          <div>
            <span>项目结束：</span>{{fund.endtime}}</div>
        </div>
        <div class="buy">
          <div class="progress">
            <span>项目进度：</span>
            <span>{{progress}}</span>
          </div>
          <div class="left">
            <span>剩余可投：</span>
            <span>{{fund.leftmoney}}元</span>
          </div>
          <input class="input" type="number" placeholder="0">
          <div class="tips">预计收益
            <span class="num">{{num}}</span>元
          </div>
          <m-button class="btn" size="large">立即申购</m-button>
        </div>
      </div>
    </m-card>
    <m-tabs class="tabs" type="tag" v-model="tabId">
      <m-tab-item v-for="(item, index) in ['项目详情','风险保障']" :key="index" :id="index">{{item}}</m-tab-item>
    </m-tabs>
    <m-card class="intruction" v-html="intruction || '暂无说明~'"></m-card>
  </div>
</template>

<script>
  import api from '@/api/fund'

  export default {
    name: 'trust-fund-detail',
    props: ['id'],
    data() {
      return {
        num: 0,
        fund: {},
        tabId: 0
      }
    },
    computed: {
      progress: function () {
        let fund = this.fund
        if (fund.leftmoney && fund.totalmoney) {
          return Math.floor((1 - fund.leftmoney / fund.totalmoney) * 100) + '%'
        }
        else return 0
      },
      intruction: function () {
        let fund = this.fund
        switch (this.tabId) {
          case 0: return fund.detail
          case 1: return fund.safanote
        }
      }
    },
    beforeMount() {
      api.getFundDetail({ id: this.id }).then(fund => {
        this.fund = fund
      })
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .detail {
    width: var(--index-width);
    margin: var(--index-padding-top) auto 135px;
    & .card {
      padding: 33px 53px;
      & .name {
        font-size: 32px;
      }
      & .info {
        display: grid;
        grid-template-columns: [start] repeat(3, 1fr) [end];
        grid-template-areas:
          "rate  cycle buy"
          "money time  buy";
        margin-top: 55px;
        & > .rate {
          grid-area: rate;
          padding-left: 15px;
        }
        & > .cycle {
          position: relative;
          grid-area: cycle;
          &::before {
            content: "";
            position: absolute;
            left: -40px;
            top: 15px;
            width: 1px;
            height: 63px;
            background-color: var(--color-line);
          }
        }
        & > :matches(.rate, .cycle) {
          color: var(--font-color-light-4);
          font-size: 14px;
          height: 110px;
          & > :first-child {
            color: var(--font-color-light-1);
            font-size: 25px;
            & > span {
              font-size: 47px;
            }
          }
          &.rate > :first-child {
            color: var(--color-orange);
            & > span {
              font-weight: bold;
            }
          }
        }
        & > .money {
          grid-area: money;
          padding-left: 15px;
        }
        & > .time {
          grid-area: time;
        }
        & > :matches(.money, .time) {
          color: var(--font-color-light-1);
          font-size: 14px;
          line-height: 1.9;
          & span {
            color: var(--font-color-light-4);
            padding-right: 20px;
          }
        }
        & > .buy {
          position: relative;
          grid-area: buy;
          padding-top: 8px;
          padding-left: 48px;
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            width: 1px;
            height: 215px;
            background-color: var(--color-line);
          }
          & > :matches(.progress, .left) {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            line-height: 2;
          }
          & > .input {
            font-size: 42px;
            font-weight: bold;
            line-height: 48px;
            text-align: right;
            box-sizing: border-box;
            width: 100%;
            border: 2px solid var(--color-border);
            margin-top: 25px;
          }
          & > .tips {
            color: var(--font-color-light-4);
            font-size: 14px;
            text-align: right;
            & > .num {
              color: var(--color-yellow);
            }
          }
          & > .btn {
            font-size: 24px;
            height: 50px;
            width: 100%;
            margin-top: 20px;
            background-color: var(--color-orange);
          }
        }
      }
    }
    & > .tabs {
      margin-top: 74px;
    }
    & > .intruction {
      font-size: 14px;
      line-height: 30px;
      letter-spacing: 1px;
      padding: 30px 60px;
      overflow-y: auto;
      transition: 0.2s;
      min-height: 300px;
      max-height: 600px;
      margin-top: 4px;
    }
  }
</style>

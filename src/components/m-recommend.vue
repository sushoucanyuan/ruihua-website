<template>
  <m-card class="m-recommend" ishot @click.native="route(item.id)">
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
      <div class="type">类型：{{item.type}}</div>
      <div class="area">套内面积：{{item.area}}</div>
      <div class="city">
        <m-icon name="location"></m-icon>{{item.city}}
      </div>
    </div>
  </m-card>
</template>

<script>
  export default {
    props: ['item'],
    methods: {
      route: function (id) {
        this.$router.push({ name: 'overseas-house', params: { id } })
        document.body.scrollTop = document.documentElement.scrollTop = 0
      }
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .m-recommend {
    cursor: pointer;
    position: relative;
    & .header {
      height: var(--house-img-height);
      overflow: hidden;
    }
    & .body {
      position: relative;
      padding: var(--house-padding);
      transform: scaleX(0.94);
      transform-origin: left center;
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
      & .type,
      & .area {
        color: var(--font-color-light-4);
        font-size: 14px;
        margin-top: 4px;
        &.type {
          margin-top: 8px;
        }
      }
      & .city {
        color: var(--font-color-light-4);
        font-size: 14px;
        vertical-align: middle;
        letter-spacing: 2px;
        position: absolute;
        right: 15px;
        bottom: 25px;
        display: flex;
        align-items: center;
        & > svg {
          font-size: 12px;
          margin-right: 4px;
        }
      }
    }
  }
</style>
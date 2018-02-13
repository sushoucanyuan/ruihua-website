<template>
  <div class="trust-fund-list">
    <section class="banner">
      <transition name="img">
        <img v-if="picurl" :src="picurl">
      </transition>
    </section>
    <section class="fund">
      <m-title :level="1" cn="信托基金" en="trust fund" tips="您的职能财富管家"></m-title>
      <div class="container" v-loading="loading">
        <img v-for="item in funds" :key="item.id" :src="item.picurl1" @click="$router.push({name: 'trust-fund-detail', params:{id: item.id}})">
        <el-pagination class="pagination" layout="prev, pager, next, jumper" :total="count" :page-size="num" @current-change="page => this.page = page" background></el-pagination>
      </div>
    </section>
  </div>
</template>

<script>
  import api from '@/api/fund'

  export default {
    data() {
      return {
        picurl: '',
        funds: [],
        count: 0,
        num: 4,
        page: 1,
        loading: true
      }
    },
    computed: {
      index: function () {
        return this.page - 1
      }
    },
    watch: {
      page: function () {
        this.getFunds()
      }
    },
    methods: {
      getFunds() {
        this.loading = true
        let params = {
          num: this.num,
          page: this.page
        }
        api.getFunds(params).then(funds => {
          this.funds = funds
          this.loading = false
        })
      }
    },
    beforeMount() {
      api.getFundBannerImg().then(picurl => {
        this.picurl = picurl
      })
      api.getFundCount().then(count => {
        this.count = count
      })
      this.getFunds()
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .trust-fund-list {
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
    & > .fund {
      width: var(--index-width);
      margin: var(--index-padding-top) auto 135px;
      & > .container {
        & > img {
          cursor: pointer;
          width: 100%;
          margin-bottom: 20px;
        }
        & > .pagination {
          text-align: right;
        }
      }
    }
  }
</style>

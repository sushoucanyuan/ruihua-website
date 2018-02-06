<template>
  <div class="overseas-house">
    <div class="container">
      <m-title en="estate" cn="海外房产" tips="专注海外精品房产投资，国际顶尖房产投资管理团队"></m-title>
      <m-breadcrumb class="breadcrumb" separator=">">
        <m-breadcrumb-item :to="{name: 'home'}">瑞华网</m-breadcrumb-item>
        <m-breadcrumb-item :to="{name: 'overseas-property', query: {tabId: 0}}">海外房产</m-breadcrumb-item>
        <m-breadcrumb-item :to="{name: 'overseas-property', query: {tabId: 2}}">墨尔本</m-breadcrumb-item>
        <m-breadcrumb-item>墨尔本本地公寓</m-breadcrumb-item>
      </m-breadcrumb>
      <m-card class="house" direction="row">
        <div class="header" slot="header">
          <img src="/static/estate/house.png">
        </div>
        <div></div>
      </m-card>
      <m-card class="steps" direction="row">
        <div class="header" slot="header">
          <div>5</div>
          <div>
            <div>步购房</div>
            <div>安全快捷</div>
          </div>
        </div>
        <div>ss</div>
      </m-card>
    </div>
  </div>
</template>

<script>
  import mCard from '@/components/m-card.vue'
  import mTitle from '@/components/m-title.vue'
  import mBreadcrumb from '@/components/m-breadcrumb.vue'
  import mBreadcrumbItem from '@/components/m-breadcrumb-item.vue'

  export default {
    props: ['id'],
    components: {
      mCard,
      mTitle,
      mBreadcrumb,
      mBreadcrumbItem
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .overseas-house {
    background-image: url("/static/background-top.png");
    & > .container {
      width: var(--index-width);
      margin: 0 auto;
      padding: 80px 0 100px;
      & > .breadcrumb {
        margin: 45px 0 60px;
      }
      & > .house {
        & .header {
          width: 640px;
          height: 430px;
          display: flex;
          align-items: center;
          justify-content: center;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
      }
      & > .steps {
        & .header {
          display: flex;
          align-items: center;
          justify-content: center;
          & > div:first-child {
            color: var(--color-white);
          }
          & > div:last-child {
            &:first-child {
              color: var(--color-white);
            }
            &:last-child {
              color: var(--color-yellow);
              background-color: var(--color-white);
            }
          }
        }
      }
    }
  }
</style>

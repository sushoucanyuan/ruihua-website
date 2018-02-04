<template>
  <div class="overseas">
    <div class="title">
      <m-title :level="1" en="estate" cn="海外房产" tips="专注海外精品房产投资，国际顶尖房产投资管理团队"></m-title>
    </div>
    <div class="tabs"></div>
    <seation class="ruihua-recommend">
      <div class="title">
        <m-title :level="2" cn="瑞华推荐" en="recommend"></m-title>
      </div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </seation>
    <seation class="house-info">
      <div class="title">
        <m-title :level="2" cn="房源信息"></m-title>
      </div>
      <div class="title">
        <m-title :level="2" cn="瑞华推荐" en="recommend"></m-title>
      </div>
      <div class="house-card">
        <div class="card"></div>
        <div class="card"></div>
      </div>
      <div class="recommend-info"></div>
    </seation>
  </div>
</template>

<script type="text/ecmascript-6">
  import mTitle from '@/components/m-title.vue'
  export default {
    data() {
      return {

      }

    },
    components: {
      mTitle,
    }
  }

</script>

<style lang="postcss">
  @import "../assets/css/var.css";
  .overseas {
    background-color: #f5f5f5;
    grid-gap: 40px 60px;
    display: grid;
    grid-template-columns: [start] repeat(3, 1fr) [end];
    grid-auto-flow: row;
    padding: 40px 180px 100px;
    &>.title {
      grid-column: start / end;
    }
    &>.tabs {
      height: 60px;
      grid-column: start / end;
      background-color: var(--color-white);
    }
    &>.ruihua-recommend {
      display: grid;
      grid-gap: 40px 60px;
      grid-template-columns: [start] repeat(3, 1fr) [end];
      grid-column: start / end;
      &>.title {
        grid-column: start / end;
      }
      &>.card {
        height: 200px;
        background-color: var(--color-white);
      }
    }
    &>.house-info {
      display: grid;
      grid-gap: 40px 60px;
      grid-template-columns: [start] repeat(3, 1fr) [end];
      grid-column: start / end;
      &> :nth-child(1) {
        grid-column: start / span 2;
      }
      &> :nth-child(2) {
        grid-column: 3 / end;
      }
      &>.house-card {
        grid-column: start / span 2;
        background-color: #f5f5f5;
        &>.card {
          height: 200px;
          background-color: var(--color-white);
          margin-bottom: 40px;
        }
      }
      &>.recommend-info {
        grid-column: 3 / end;
        height: 500px;
        background-color: var(--color-white);
      }
    }
  }

</style>

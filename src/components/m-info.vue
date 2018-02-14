<template>
  <div class="m-info" @click="route(info.id)">
    <div class="title">{{info.title}}</div>
    <div class="publishAt">
      <m-icon class="icon" name="shijian"></m-icon>{{info.publishAt | format}}
    </div>
  </div>
</template>

<script>
  import mIcon from '@/components/m-icon.vue'

  export default {
    props: ['info'],
    filters: {
      format: function (time) {
        return moment.unix(time).fromNow()
      }
    },
    methods: {
      route: function (id) {
        this.$router.push({ name: 'overseas-info', params: { id: id } })
        document.body.scrollTop = document.documentElement.scrollTop = 0
      }
    },
    components: {
      mIcon
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .m-info {
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
        margin: 4px 10px 4px 5px;
        background-color: var(--color-yellow);
        border-radius: 50%;
      }
    }
    & .publishAt {
      color: var(--font-color-light-4);
      font-size: 12px;
      line-height: 36px;
      display: flex;
      align-items: center;
      padding-left: 22px;
      & > .icon {
        font-size: 12px;
        transform: scale(0.8);
        margin-left: -4px;
        margin-right: 6px;
      }
    }
    &:hover .title {
      color: var(--color-yellow);
    }
  }
</style>

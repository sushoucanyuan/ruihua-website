<template>
  <div :class="`m-title level-${level}`">
    <template v-if="level === 1">
      <span class="en">{{en.toUpperCase()}}</span>
      <span class="cn">
        <span class="title">{{cn}}</span>
        <span class="tips">{{tips}}</span>
      </span>
    </template>
    <template v-else-if="level === 2">
      <span class="cn">{{cn}}</span>
      <span class="en">{{en}}</span>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      level: {
        type: Number,
        default: 1
      },
      en: String,
      cn: String,
      tips: String
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .m-title {
    &.level-1 {
      display: flex;
      align-items: flex-start;
      margin: -8px 0;
      & > .en {
        color: var(--color-yellow);
        font-family: "en-title";        
        font-size: 60px;
      }
      & > .cn {
        display: flex;
        align-items: center;
        position: relative;
        margin: 8px 0 0 38px;
        &::after {
          content: "";
          position: absolute;
          left: 4px;
          bottom: -18px;
          width: 45px;
          height: 2px;
          background-color: var(--color-yellow);
        }
        & > .title {
          color: var(--font-color-light-1);
          font-size: 23px;
          box-sizing: border-box;
        }
        & > .tips {
          color: var(--font-color-light-3);
          font-size: 14px;
          position: relative;
          margin-left: 20px;
          padding-left: 20px;
          &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 1px;
            height: 70%;
            margin: auto 0;
            background-color: var(--font-color-light-3);
          }
        }
      }
    }
  }
</style>

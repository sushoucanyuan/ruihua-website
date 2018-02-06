<template>
  <div class="m-title" :class="`level-${level}`">
    <template v-if="level === 1">
      <span class="m-title-en">{{en.toUpperCase()}}</span>
      <span class="m-title-cn">
        <span class="m-title-title">{{cn}}</span>
        <span class="m-title-tips">{{tips}}</span>
      </span>
    </template>
    <template v-else-if="level === 2">
      <span class="m-title-cn">{{cn}}</span>
      <span v-if="en" class="m-title-en">{{en.toUpperCase()}}</span>
      <span v-else-if="tips" class="m-title-tips">{{tips}}</span>
    </template>
    <template v-else-if="level === 3">
      <span>{{cn}}</span>
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

  :root {
    --font-family-en: "en-title";
  }

  .m-title {
    &.level-1 {
      display: flex;
      align-items: flex-start;
      margin: -8px 0;
      & > .m-title-en {
        color: var(--color-yellow);
        font-size: 60px;
        font-family: var(--font-family-en);
      }
      & > .m-title-cn {
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
        & > .m-title-title {
          color: var(--font-color-light-2);
          font-size: 23px;
          box-sizing: border-box;
        }
        & > .m-title-tips {
          color: var(--font-color-light-3);
          font-size: 14px;
          position: relative;
          margin-left: 12px;
          padding-left: 20px;
          transform: scaleX(0.94);
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 1px;
            height: 75%;
            margin: auto 0;
            background-color: var(--font-color-light-3);
          }
        }
      }
    }
    &.level-2 {
      display: flex;
      align-items: center;
      letter-spacing: 1px;
      & > .m-title-cn {
        color: var(--color-yellow);
        font-size: 24px;
        font-weight: bold;
        padding-left: 8px;
      }
      & > .m-title-en {
        color: var(--font-color-light-4);
        font-size: 24px;
        font-family: var(--font-family-en);
        position: relative;
        margin-left: 20px;
        padding-left: 20px;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 1px;
          height: 60%;
          margin: auto 0;
          background-color: var(--font-color-light-4);
        }
      }
    }
    &.level-3 {
      color: var(--color-yellow);
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
</style>

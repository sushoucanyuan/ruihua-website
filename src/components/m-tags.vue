<template>
  <span class="m-tags">
    <span class="m-tag-item" v-for="(item,index) in array" :key="index">{{item}}</span>
  </span>
</template>

<script>
  export default {
    name: 'm-tags',
    props: {
      string: {
        type: String,
        default: ''
      }
    },
    computed: {
      array: function () {
        return this.string.split('，')
      }
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .m-tags {
    & > .m-tag-item {
      --height: 23px;
      cursor: pointer;
      font-size: 12px;
      letter-spacing: 1px;
      line-height: var(--height);
      display: inline-block;
      box-sizing: border-box;
      padding: 0 13px;
      border-radius: calc(var(--height) / 2);
      &:nth-child(odd) {
        color: var(--color-white);
        background-color: var(--color-yellow);
      }
      &:nth-child(even) {
        color: var(--font-color-light-1);
        background-color: #eee;
        border: 1px solid var(--color-border);
      }
      &:not(:last-child){
        margin-right: 8px;
      }
    }
  }
</style>

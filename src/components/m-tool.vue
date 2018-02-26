<template>
  <div class="m-tool">
    <m-tabs type="text" :value="typeId" @input="$emit('update:typeId', arguments[0])">
      <m-tab-item v-for="(item, index) in types" :key="index" :id="index">{{item}}</m-tab-item>
    </m-tabs>
    <div class="sort">
      <transition name="sort" mode="out-in">
        <m-icon class="icon" v-if="sortway" :key="1" name="paixu-shengxu" @click.native="$emit('update:sortway', 0)"></m-icon>
        <m-icon class="icon" v-else :key="0" name="paixu-jiangxu" @click.native="$emit('update:sortway', 1)"></m-icon>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'm-tool',
    props: ['types', 'typeId', 'sortway'],
    watch: {
      typeId: function (val, oldVal) {
        this.$emit('update:typeId', val)
      }
    },
  }
</script>

<style lang="postcss">
  .m-tool {
    display: flex;
    align-items: center;
    & .sort {
      cursor: pointer;
      margin-left: 10px;
      & .icon {
        font-size: 16px;
        vertical-align: bottom;
        transform: scale(1);
        transition: 0.2s;
        &:matches(.sort-enter, .sort-leave-to) {
          transform: scale(0);
          transform-origin: center;
        }
      }
    }
  }
</style>

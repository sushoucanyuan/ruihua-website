<template>
  <span class="m-breadcrumb-item">
    <span class="m-breadcrumb-item-label" @click="handleClick">
      <slot></slot>
    </span>
    <span class="m-breadcrumb-item-separator">{{$parent.separator}}</span>
  </span>
</template>

<script>
  export default {
    name: '',
    props: {
      to: {},
      replace: Boolean
    },
    methods: {
      handleClick() {
        this.$router.push(this.to)
      }
    }
  }
</script>

<style>

</style>

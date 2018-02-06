<template>
  <span class="m-tab-item" :class="{ 'is-active': $parent.value == id }" @click="$parent.$emit('input', id)">
    <span class="m-tab-item-label">
      <slot></slot>
    </span>
  </span>
</template>

<script>
  export default {
    name: 'm-tab-item',
    props: ['id']
  }
</script>

<style>

</style>
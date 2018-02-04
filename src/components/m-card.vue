<template>
  <div class="m-card">
    <div class="header"></div>
    <div class="body">
      <slot></slot>
    </div>    
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="postcss">
    @import "../assets/css/var.css";

  .m-card{
    border: 1px solid #c0c0c0;
    background-color: var(--color-white);
  }
</style>

<template>
  <div class="index">
    <index-header></index-header>
    <main>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </main>
  </div>
</template>

<script>
  import indexHeader from '@/views/index-header.vue'

  export default {
    components: {
      indexHeader
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .index {
    min-width: calc(var(--index-width) + 2 * var(--index-padding));
  }
</style>

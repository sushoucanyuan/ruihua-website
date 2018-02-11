<template>
  <div class="index">
    <!-- <side-tool></side-tool> -->
    <index-header></index-header>
    <main>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </main>
  </div>
</template>

<script>
  import sideTool from '@/views/side-tool.vue'
  import indexHeader from '@/views/index-header.vue'

  export default {
    components: {
      sideTool,
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

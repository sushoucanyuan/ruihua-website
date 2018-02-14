<template>
  <div class="index">
    <side-tool></side-tool>
    <index-header></index-header>
    <main>
      <keep-alive :exclude="['overseas-house', 'overseas-info', 'tour-study-detail', 'trust-fund-detail']">
        <router-view :key="$route.path.replace(/\//g, '_')"/>
      </keep-alive>
    </main>
    <index-footer></index-footer>
  </div>
</template>

<script>
  import sideTool from '@/views/side-tool.vue'
  import indexHeader from '@/views/index-header.vue'
  import indexFooter from '@/views/index-footer.vue'
  
  export default {
    components: {
      sideTool,
      indexHeader, 
      indexFooter
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .index {
    min-width: calc(var(--index-width) + 2 * var(--index-padding));
  }
</style>

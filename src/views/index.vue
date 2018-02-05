<template>
  <div class="index">
    <index-header></index-header>
          <side-tool></side-tool>
    <main>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </main>
  </div>
</template>

<script>
  import indexHeader from '@/views/index-header.vue'
  import sideTool from '@/views/side-tool.vue'

  export default {
    components: {
      indexHeader,sideTool
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .index {
    min-width: calc(var(--index-width) + 2 * var(--index-padding));
  }
</style>

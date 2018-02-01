<template>
  <div>
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

</style>

<template>
  <div class="index">
    <side-tool></side-tool>
    <index-header></index-header>
    <main>
      <keep-alive :exclude="['overseas-house', 'overseas-info', 'tour-study-detail', 'trust-fund-detail']">
        <router-view :key="$route.path.replace(/\//g, '_')" />
      </keep-alive>
    </main>
    <index-footer></index-footer>
    <el-dialog class="dialog" title="重要提示" :visible.sync="dialogVisible" :closeOnClickModal="false" width="520px">
      <div class="tips">您的浏览器版本过低，建议下载使用最新版本的 Chrome 浏览器或打开极速模式以获得更好的浏览体验！</div>
    </el-dialog>
  </div>
</template>

<script>
  import sideTool from '@/views/side-tool.vue'
  import indexHeader from '@/views/index-header.vue'
  import indexFooter from '@/views/index-footer.vue'

  export default {
    data() {
      return {
        dialogVisible: false
      }
    },
    components: {
      sideTool,
      indexHeader,
      indexFooter
    },
    beforeMount() {
      try {
        if (!CSS.supports('display', 'flex')) {
          this.dialogVisible = true
        }
      }
      catch(e){
        this.dialogVisible = true
      }
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .index {
    min-width: calc(var(--index-width) + 2 * var(--index-padding));
  }
  .dialog {
    & .tips {
      font-size: 24px;
      line-height: 40px;
    }
  }
</style>

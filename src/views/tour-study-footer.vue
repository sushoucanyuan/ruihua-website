<template>
  <section class="footer">
    <div>服务于定制旅游，专注学生国际化教育和成长</div>
    <div>赴澳旅游游学引领者</div>
    <div class="imgs">
      <div>
        <img src="/static/tour-study/anquan.png" />
        <span>境外安全 完美保障</span>
      </div>
      <div>
        <img src="/static/tour-study/gexing.png" />
        <span>个性定制 私享美景</span>
      </div>
      <div>
        <img src="/static/tour-study/baoxian.png" />
        <span>海外保险 共享无忧</span>
      </div>
      <div>
        <img src="/static/tour-study/luxian.png" />
        <span>精选路线 美不胜收</span>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .footer {
    color: var(--color-yellow);
    font-size: 24px;
    line-height: 2;
    letter-spacing: 8px;
    text-align: center;
    box-sizing: border-box;
    height: 520px;
    background: url("/static/tour-study/footer.png") no-repeat scroll center;
    background-size: cover;
    padding: 60px 0 0;
    margin-top: 100px;
    & > .imgs {
      display: flex;
      justify-content: space-around;
      margin-top: 110px;
      padding: 0 30px;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > span {
          margin-top: 30px;
        }
      }
    }
  }
</style>

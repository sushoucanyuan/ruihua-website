<template>
  <el-dialog class="m-form" :title="title" :visible.sync="vis" width="520px">
    <div class="body">
      <div class="info" v-if="type == 'house'">您预约的房子为：
        <span>{{info}}</span>
      </div>
      <div class="info" v-else-if="type == 'tour'">您预约的线路为：
        <span>{{info}}</span>
      </div>
      <div class="info" v-else-if="type == 'trust'">您预约的基金为：
        <span>{{info}}</span>
      </div>
      <div class="input">
        您的姓名 <input class="input" maxlength="40" placeholder="请输入您的姓名" v-model="name">
      </div>
      <div class="input">
        您的电话 <input class="input" maxlength="20" placeholder="请输入您的电话" v-model="phone">
      </div>
      <div class="tips">*请输入您自己的电话号码或手机号码，点击“呼叫”按钮，我们将尽快接通您的电话！您也可以直接电话联系我们。</div>
      <div class="btns">
        <m-button class="btn" size="large" @click.native="post">呼&nbsp;叫</m-button>
        <m-button class="btn" size="large">
          <m-icon class="icon" name="dianhua"></m-icon>
          <span class="number">733-423-297</span>
        </m-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    props: {
      visible: {
        default: false
      },
      type: {},
      title: {},
      info: {}
    },
    data() {
      return {
        name: '',
        phone: ''
      }
    },
    computed: {
      vis: {
        get() {
          return this.visible
        },
        set(val) {
          this.$emit('update:visible', val)
        }
      }
    },
    methods: {
      post: function () {
        if (this.name && this.phone) {
          this.$emit('post', {
            name: this.name,
            phone: this.phone
          })
        }
        else {
          this.$message.error('输入不能为空')
        }
      }
    }
  }
</script>

<style scoped lang="postcss">
  @import "../assets/css/var.css";

  .m-form {
    &>>>.el-dialog__header {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      padding: 0;
      background-color: var(--color-yellow);
      & > .el-dialog__title {
        color: var(--color-white);
        font-weight: bold;
        letter-spacing: 3px;
      }
      & .el-dialog__close {
        color: var(--color-white);
        font-size: 26px;
      }
    }
    & .body {
      color: var(--font-color-light-3);
      font-size: 14px;
      padding: 0 57px 25px;
      & > .info {
        letter-spacing: 1px;
        margin-bottom: 35px;
        & > span {
          color: var(--color-yellow);
          font-size: 16px;
          font-weight: bold;
        }
      }
      & > .input {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        & > input {
          text-align: right;
          flex-grow: 1;
          margin-left: 16px;
          padding: 0 15px;
          height: 40px;
        }
      }
      & > .tips {
        color: var(--color-yellow);
        line-height: 1.4;
      }
      & > .btns {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 40px;
        & > .btn {
          width: 175px;
          font-weight: bold;
        }
        & > :first-child {
          background-color: var(--color-orange);
        }
        & > :last-child {
          display: flex;
          align-items: center;
          justify-content: center;
          & .icon {
            margin-right: -8px;
          }
          & .number {
            letter-spacing: 0;
            transform: scaleX(0.8);
            transform-origin: center;
          }
        }
      }
    }
  }
</style>

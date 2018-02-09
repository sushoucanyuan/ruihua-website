<template>
  <button class="m-button" :class="['type-' + type, 'size-' + size]" @click="handleClick">
    <template v-if="$slots.default" @click="handleInnerClick">
      <slot></slot>
    </template>
  </button>
</template>

<script>
  export default {
    name: 'm-button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'medium'
      },
      disabled: Boolean
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt)
      },
      handleInnerClick(evt) {
        if (this.disabled) {
          evt.stopPropagation()
        }
      }
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/var.css";

  .m-button {
    font-family: var(--font-family-base);
    font-weight: bold;
    box-sizing: border-box;
    transition: 0.1s;
    &:focus {
      outline: none;
    }
    /* type */
    &.type-default {
      cursor: pointer;
      color: var(--color-white);
      border: none;
      background-color: var(--color-yellow);
    }
    &.type-plain {
      cursor: pointer;
      color: var(--color-yellow);
      background-color: color(var(--color-white) a(60%));
      border: 1px solid var(--color-yellow);
      &:hover {
        color: var(--color-white);
        background-color: var(--color-yellow);
      }
    }
    &.type-text {
      cursor: pointer;
      color: rgb(0, 0, 0);
      background-color: transparent;
      > span:hover {
        color: var(--color-yellow);
      }
    }
    /* size */
    &.size-small {
      font-size: 16px;
      letter-spacing: 1px;
      width: 95px;
      height: 37px;
      border-radius: 4px;
    }
    &.size-medium {
      font-size: 16px;
      letter-spacing: 1px;
      width: 210px;
      height: 50px;
      border-radius: 5px;
    }
    &.size-large{
      font-size: 18px;
      letter-spacing: 1px;
      width: 200px;
      height: 45px;            
    }
  }
</style>

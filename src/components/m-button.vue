<template>
  <button class="m-button" :class="['pattern-' + pattern, 'size-' + size]" @click="handleClick">
    <span v-if="$slots.default" @click="handleInnerClick">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  export default {
    props: {
      pattern: {
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
    transition: .1s;
    &:focus {
      outline: none;
    }
    /* pattern */
    &.pattern-default {
      color: var(--color-white);
      border: none;
      background-color: var(--color-yellow);
      &:hover {
        cursor: pointer;
      }
    }
    &.pattern-plain {
      color: var(--color-yellow);
      background-color: color(var(--color-white) a(60%));
      border: 1px solid var(--color-yellow);
      &:hover{
        cursor: pointer;
        color: var(--color-white);
        background-color: var(--color-yellow);        
      }
    }
    &.pattern-text {
      color: rgb(0, 0, 0);
      background-color: transparent;
      > span:hover {
        cursor: pointer;
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
    &.size-large {
      font-size: 14px;
      padding: 10px 20px;
      border-radius: 4px;
    }
  }
</style>

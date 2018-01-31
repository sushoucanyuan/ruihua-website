<template>
  <button class="my-button" :class="['size-' + size, 'pattern-' + pattern]" @click="handleClick">
    <span v-if="$slots.default" @click="handleInnerClick">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: 'medium'
      },
      pattern: {
        type: String,
        default: 'default'
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

<style lang="scss">
  $main-color: rgb(243, 239, 16);
  .my-button {
    font-weight: bold;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:focus{
      outline: none;
    }

    // size

    &.size-small,
    &.size-medium {
      font-size: 12px;
      border-radius: 3px;
    }

    &.size-small {
      padding: 7px 15px;
    }

    &.size-medium {
      padding: 9px 15px;
    }

    &.size-large {
      font-size: 14px;
      padding: 10px 20px;
      border-radius: 4px;
    }

    // pattern

    &.pattern-default,
    &.pattern-plain {
      border-color: $main-color;
      &:hover {
        cursor: pointer;
      }
    }

    &.pattern-default {
      color: rgb(255, 255, 255);
      background-color: $main-color;
    }

    &.pattern-plain {
      color: $main-color;
      background-color: rgb(255, 255, 255);
    }

    &.pattern-text {
      color: rgb(0, 0, 0);
      background-color: transparent;
      > span:hover {
        cursor: pointer;
        color: $main-color;
      }
    }
  }
</style>

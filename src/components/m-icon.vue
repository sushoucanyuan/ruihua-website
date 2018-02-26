<template>
  <svg class="m-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'm-icon',
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  .m-icon {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>

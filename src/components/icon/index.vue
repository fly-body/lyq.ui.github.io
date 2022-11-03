<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="IconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'r-icon',
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  computed:{
    IconName(){
      return `#icon-${this.name}`;
    }
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
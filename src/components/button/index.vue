<template>
  <button class="r-button" :class="styleClass" :disabled="disabled" :round="round" @click="handleClick">
    <slot></slot>
    <span v-if="icon">
      <r-icon :name="icon"></r-icon>
    </span>
  </button>
</template>

<script>
export default {
  name: 'r-button',
  props:{
    type: {
      type: String,
      default: '',
      Validator: (value) => {
        return ['primary', 'success', 'warning', 'danger'].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },
  computed:{
    styleClass(){
      return {
        [`r-button--${this.type}`] : this.type,
        "is-disabled" : this.disabled,
        "is-round" : this.round
      }
    }
  },
  methods: {
    handleClick(){
      this.$emit("click");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
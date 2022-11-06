<template>
  <div class="inline-container">
    <template v-if="type === 'textarea'">
      <textarea
        class="r-textarea"
        v-bind="$attrs"
        v-on="MyListeners"
        v-model="inputValue"
        :disabled="disabled"
      ></textarea>
    </template>
    <template v-else-if="type === 'text'">
      <div class="inline-container" :class="className">
        <!-- 前缀 -->
        <div class="r-input-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="r-input-outer">
          <!-- $attrs作用是继承父标签的所有属性 -->
          <input
            type="text"
            class="r-input"
            :class="styleClass"
            v-bind="$attrs"
            v-on="MyListeners"
            v-model="inputValue"
            :disabled="disabled"
            :center="center"
          />
          <span class="r-input-clear" v-if="showClear" @click="clearText">
            <r-icon name="cuowu"></r-icon>
          </span>
        </div>
        <!-- 后缀 -->
        <div class="r-input-append" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="r-input-outer">
        <input
          class="r-input"
          :class="styleClass"
          v-bind="$attrs"
          v-on="MyListeners"
          :disabled="disabled"
          v-model="inputValue"
          type="password"
          ref="password"
        />
        <span class="r-input-password-show" @click="showPassword" v-if="controlShowPwd">
          <r-icon :name="isShow ? 'yanjing' : 'biyanjing'"></r-icon>
        </span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "r-input",
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
      validator: (value) => {
        return ["text", "textarea", "password"].includes(value);
      },
    },
    size: {
      type: String,
      default: "",
      validator: (value) => {
        return ["", "medium", "small"].includes(value);
      },
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    controlShowPwd: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: String,
      default: "10"
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    MyListeners() {
      // this.$listeners父组件传递的事件
      return Object.assign(this.$listeners, {
        input: (event) => this.$emit("input", event.target.value),
      });
    },
    styleClass() {
      return {
        [`r-input--${this.size}`]: this.size,
        "is-disabled": this.disabled,
        "is-center": this.center,
      };
    },
    className() {
      return {
        "has-prepend": this.$slots.prepend,
        "has-append": this.$slots.append,
      };
    },
    showClear() {
      return this.clearable && this.inputValue !== "";
    },
  },
  methods: {
    clearText() {
      this.inputValue = "";
    },
    showPassword(){
      this.isShow = !this.isShow
      if(this.isShow){
        this.$refs.password.type = 'text'
      }else{
        this.$refs.password.type = 'password'
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
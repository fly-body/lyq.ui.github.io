<template>
  <div class="input-wrapper">
    <!-- <r-input placeholder="请输入姓名" :value="msg" @input="(data) => msg = data"></r-input> -->
    <r-input placeholder="请输入姓名" v-model="msg" size="medium" clearable center maxlength="10">
      <template slot="prepend">
        https://
      </template>
    </r-input>
    <r-input type="password" v-model="password" controlShowPwd size="medium"></r-input>
    <r-input placeholder="请输入姓名" v-model="msg" size="medium" clearable disabled center>
      <template slot="append">
        .com
      </template>
    </r-input>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg: '',
      password:''
    }
  }
}
</script>

<style lang="scss" scope>
.input-wrapper{
  width: 480px;
  margin: 100px auto;
}
</style>
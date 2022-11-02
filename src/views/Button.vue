<template>
  <div>
    <r-button type="primary" disabled @click="handleClick">primary</r-button>
    <r-button type="success" round>success</r-button>
    <r-button type="danger" icon="info">danger</r-button>
    <r-button type="warning" @click="handleClick">warning</r-button>
  </div>
</template>

<script>
export default {
  methods:{
    handleClick(){
      alert("1");
    }
  }
};
</script>

<style>
</style>
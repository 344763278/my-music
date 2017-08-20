<template>
  <div class="wrap">
    <router-link to="./a" tag="div" class="a">a</router-link>
    <router-link to="./b" tag="div" class="a">b</router-link>
    <router-link to="./c" tag="div" class="a">c</router-link>
  </div>
</template>

<script>
 
</script>

<style scoped lang="less" rel="stylesheet/less">
  .wrap{
    display: flex;
    width: 300px;
    height: 30px;
    line-height: 30px;
    border: 1px solid red;
    margin: 0 auto;
    text-align: center;
    .a{
      flex: 1;
    }
    .router-link-active{
    background-color: #eee;
    color: blue;
    font-size: 30px;
  }
  }
</style>
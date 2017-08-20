<template>
  <div class="wrap">
    aaaaaaa
    <i class="fa fa-youtube"></i>
  </div>
</template>

<script>      
  export default {
    data() {
      return {
        msg: '123'
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
@import '../common/less/mixin.less';
  .wrap{
    width: 600px;
    height: 300px;
    margin-top: 20px;
    margin: 20px auto;
    border: 1px solid red;
    font-size: 50px;
    text-align: center;
    .bg(red);  
  }
</style>
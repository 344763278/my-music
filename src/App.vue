<template>
  <div id="app">
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import tab from 'components/tab'
export default {
  name: 'app',
  components: {
    tab
  }
}
</script>

<style>

</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 对es6的api做个转义，比如promise
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'  
import 'src/common/less/reset.less'
import 'src/common/less/icon.less' 

Vue.config.productionTip = false

// 消除移动端点击300ms的延迟问题
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

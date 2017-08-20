import Vue from 'vue'
import Router from 'vue-router'
import a from 'components/a'
import b from 'components/b'
import c from 'components/c'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/a'
    },
    {
      path: '/a',
      component: a
    },
    {
      path: '/b',
      component: b
    },
    {
      path: '/c',
      component: c
    }
  ],
  'mode': 'history'
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home/Home'
import Test from '@/view/Test/Test'
import NotFound from '@/view/NotFound/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'Home',
      path: '/home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      name: 'not-found',
      path: '/404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

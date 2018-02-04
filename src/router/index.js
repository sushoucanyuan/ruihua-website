import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import home from '@/views/home'
import overseas from '@/views/overseas'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: index,
    children: [{
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/overseas-property',
      name: 'overseas-property',
      component: overseas
    }, {
      path: '/tour-study',
      name: 'tour-study',
      component: home
    }, {
      path: '/trust-fund',
      name: 'trust-fund',
      component: home
    }, {
      path: '/about-ruihua',
      name: 'about-ruihua',
      component: home
    }, {
      path: '/info-table',
      name: 'info-table',
      component: home
    }]
  }]
})

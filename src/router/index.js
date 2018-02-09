import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import home from '@/views/home'
import overseas from '@/views/overseas-list'
import overseasHouse from '@/views/overseas-house'
import overseasInfo from '@/views/overseas-info'
import trustFund from '@/views/trust-fund-list'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: {
      name: 'home'
    },
    component: index,
    children: [{
      path: 'home',
      name: 'home',
      component: home
    }, {
      path: 'overseas-property',
      name: 'overseas-property',
      component: overseas
    }, {
      path: 'overseas-property/house/:id',
      name: 'overseas-house',
      props: true,
      component: overseasHouse
    }, {
      path: 'overseas-property/info/:id',
      name: 'overseas-info',
      props: true,
      component: overseasInfo
    }, {
      path: 'tour-study',
      name: 'tour-study',
      component: home
    }, {
      path: 'trust-fund',
      name: 'trust-fund',
      component: trustFund
    }, {
      path: 'about-ruihua',
      name: 'about-ruihua',
      component: home
    }]
  }]
})

import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index'
import home from '@/views/home'

const overseas = () =>
  import ( /* webpackChunkName: "overseas" */ '@/views/overseas-list')
const overseasHouse = () =>
  import ( /* webpackChunkName: "overseasHouse" */ '@/views/overseas-house')
const overseasInfo = () =>
  import ( /* webpackChunkName: "overseasInfo" */ '@/views/overseas-info')
const tourStudy = () =>
  import ( /* webpackChunkName: "tourStudy" */ '@/views/tour-study')
const tourStudyDetail = () =>
  import ( /* webpackChunkName: "tourStudyDetail" */ '@/views/tour-study-detail')
const trustFund = () =>
  import ( /* webpackChunkName: "trustFund" */ '@/views/trust-fund-list')
const trustFundDetail = () =>
  import ( /* webpackChunkName: "trustFundDetail" */ '@/views/trust-fund-detail')

Vue.use(Router)

const router = new Router({
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
      component: tourStudy
    }, {
      path: 'tour-study/detail/:id',
      name: 'tour-study-detail',
      props: true,
      component: tourStudyDetail
    }, {
      path: 'trust-fund',
      name: 'trust-fund',
      component: trustFund
    }, {
      path: 'trust-fund/detail/:id',
      name: 'trust-fund-detail',
      props: true,
      component: trustFundDetail
    }, {
      path: 'about-ruihua',
      name: 'about-ruihua',
      component: home
    }]
  }]
})

router.beforeEach((to, from, next) => {
  if (to.name != from.name) {
    setTimeout(() => document.body.scrollTop = document.documentElement.scrollTop = 0, 200)
  }
  next()
})

export default router

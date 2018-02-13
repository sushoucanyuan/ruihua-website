import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import home from '@/views/home'
const overseas = () => import ( /* webpackChunkName: "overseas" */ '@/views/overseas-list')
const overseasHouse = () => import ( /* webpackChunkName: "overseas" */ '@/views/overseas-house')
const overseasInfo = () => import ( /* webpackChunkName: "overseas" */ '@/views/overseas-info')
import trustFund from '@/views/trust-fund-list'
const tourStudy = () => import( /* webpackChunkName: "tourstudy" */ '@/views/tour-study')
const tourStudyDetail = () => import( /* webpackChunkName: "tourstudy" */ '@/views/tourStudy-detail')

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
      component: tourStudy
    }, {
      path: 'tour-study/detail/:id',
      name: 'tourStudy-detail',
      component: tourStudyDetail
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

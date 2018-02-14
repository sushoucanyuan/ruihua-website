import Vue from 'vue'
import App from './App'
import router from './router'

//import '@/mock'
import '@/assets/fonts/font.css'
import '@/assets/icons/iconfont'

import moment from 'moment'

moment.locale('zh-cn')

window.moment = moment

//import 基础组件
import mIcon from '@/components/m-icon.vue'
import mCard from '@/components/m-card.vue'
import mTags from '@/components/m-tags.vue'
import mTitle from '@/components/m-title.vue'
import mButton from '@/components/m-button.vue'
import mTabs from '@/components/m-tabs.vue'
import mTabItem from '@/components/m-tab-item.vue'
import mBreadcrumb from '@/components/m-breadcrumb.vue'
import mBreadcrumbItem from '@/components/m-breadcrumb-item.vue'

import {
  Loading,
  Pagination
} from 'element-ui'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(Loading)
Vue.use(Pagination)
Vue.use(VueAwesomeSwiper, /* { default global options } */ )

Vue.component(mIcon.name, mIcon)
Vue.component(mCard.name, mCard)
Vue.component(mTags.name, mTags)
Vue.component(mTitle.name, mTitle)
Vue.component(mButton.name, mButton)
Vue.component(mTabs.name, mTabs)
Vue.component(mTabItem.name, mTabItem)
Vue.component(mBreadcrumb.name, mBreadcrumb)
Vue.component(mBreadcrumbItem.name, mBreadcrumbItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

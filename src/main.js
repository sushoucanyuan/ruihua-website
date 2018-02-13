import Vue from 'vue'
import App from './App'
import router from './router'

//import '@/mock'
import '@/assets/fonts/font.css'
import '@/assets/icons/iconfont'

//import 基础组件
import mIcon from '@/components/m-icon.vue'
import mCard from '@/components/m-card.vue'
import mTitle from '@/components/m-title.vue'
import mTabs from '@/components/m-tabs.vue'
import mTabItem from '@/components/m-tab-item.vue'

import {
  Loading,
  Pagination
} from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(Loading)
Vue.use(Pagination)
Vue.use(VueAwesomeSwiper, /* { default global options } */ )

Vue.component('m-icon', mIcon)
Vue.component('m-card', mCard)
Vue.component('m-title', mTitle)
Vue.component('m-tabs', mTabs)
Vue.component('m-tab-item', mTabItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

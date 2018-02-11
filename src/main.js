import Vue from 'vue'
import App from './App'
import router from './router'

//import '@/mock'
import '@/assets/fonts/font.css'
import '@/assets/icons/iconfont'

import {
  Loading,
  Pagination
} from 'element-ui'

Vue.use(Loading)
Vue.use(Pagination)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require('@/assets/base.scss')
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Util from '@/assets/util.js'


Vue.config.productionTip = false

Vue.use(ElementUI)

window.Util = Util

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/*
 * @Description: 
 * @Author: Zengxs
 * @Date: 2021-04-16 15:08:49
 * @LastEditors: Zengxs
 * @LastEditTime: 2021-04-20 16:01:42
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

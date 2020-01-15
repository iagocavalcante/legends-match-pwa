import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import store from './store'
import services from './plugins/services'
import cookies from './plugins/cookies'


Vue.config.productionTip = false
Vue.use(services)
Vue.use(cookies)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

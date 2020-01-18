import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import store from './store'
import services from './plugins/services'
import cookies from './plugins/cookies'
import VueNotifications from 'vue-notifications'
import iziToast from 'izitoast'
import Vuelidate from 'vuelidate'
import 'izitoast/dist/css/iziToast.min.css'

const messageSize = 20
const titleSize = 22
const timeout = 8000
const messageLineHeight = 22
const titleLineHeight = 22
function toast ({ title, message, position, type }) {
  if (type === VueNotifications.types.warn) type = 'warning'
  return iziToast[type]({ title, titleSize, message, position, messageSize, messageLineHeight, titleLineHeight, timeout })
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.config.productionTip = false
Vue.use(services)
Vue.use(cookies)
Vue.use(VueNotifications, options)
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

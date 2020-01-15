import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes } from './routes'

import store from '@/store'

Vue.use(VueRouter)

const Router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
  mode: 'history',
})


Router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['isAuthenticated']
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const recordName = to.name
  if (requiresAuth && isAuthenticated) {
    next('/')
  } else if (!isAuthenticated && (recordName === 'login' || recordName === 'register')) {
    next('/match')
  } else {
    next()
  }
})

export default Router
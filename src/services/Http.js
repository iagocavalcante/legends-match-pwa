import axios from 'axios'
import { pick } from 'lodash'
import store from '@/store'
import Router from '@/router'
import vueCookie from 'vue-cookie'
import status from 'http-status'

export const Http = axios.create({
  baseURL: `${process.env.VUE_APP_HOST}`
})
Http.interceptors.response.use((config) => {
  if (config.headers['access-token']) {
    const authHeaders = pick(config.headers, ['access-token','client','expiry','uid','token-type'])
    store.commit('auth', authHeaders)

    let session = vueCookie.get('session')
    
    if (session) {
      session = JSON.parse(session)
      session['tokens'] = authHeaders

      vueCookie.set('session', JSON.stringify(session), { expires: '14D' })
    }
  }

  return config
}, (error) => {
  if (Router.currentRoute.name !== 'login' && error.config.status === status.UNAUTHORIZED) {
    store.commit('user', null)
    Router.push({ name: 'login' })
  }

  return Promise.reject(error)
})

Http.interceptors.request.use((config) => {
  const headers = store.getters['auth']

  config.headers = headers
  return config
}, (error) => {
  return Promise.reject(error)
})

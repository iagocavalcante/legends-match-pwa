import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    auth: {}
  },
  getters: {
    user: state => state.user,
    auth: state => state.auth,
    isAuthenticated (state) {
      return state.user !== null && typeof state.user !== 'undefined'
    }
  },
  mutations: {
    user (state, value) {
      state.user = value
    },
    auth (state, value) {
      state.auth = value
    }
  }
})

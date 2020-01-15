import vueCookie from 'vue-cookie'

function install (Vue) {
  Object.defineProperty(Vue.prototype, '$cookies', {
    get () { return vueCookie }
  })
}

export default { install }
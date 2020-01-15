<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate () {
    const existingSession = this.$cookies.get('session')

    if (existingSession && existingSession.length) {
      const session = JSON.parse(existingSession)
      this.$store.commit('user', session.user)
      this.$store.commit('auth', session.tokens)
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap')
@import "@/styles/style.sass"

*
  margin: 0
  padding: 0
  outline: none
  box-sizing: border-box
  font-family: 'Poppins', sans-serif
</style>

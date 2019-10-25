<template>
  <div class="home">
    <div class="-login">
      <h1 class="-legends">LEGENDS<b class="-match">MATCH</b></h1>
      <div class="-form-input">
        <LInput placeholder="Email"/>
      </div>
      <div class="-form-input">
        <LInput placeholder="Senha"/>
      </div>
      <div class="-form-button">
        <LButton :buttonText="'entrar'"/>
      </div>
      <div class="-forgot-password">
        <a class="link" href="/register">ou Esqueceu a senha? =[</a>  
      </div>
      <div class="-form-input -fixed-bottom">
        <LButton :buttonClass="'btn-outlined'" @click="goTo('register')" :buttonText="'cadastre-se'"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LInput from '@/components/LInput'
import LButton from '@/components/LButton'

export default {
  name: 'home',
  components: {
    LInput,
    LButton
  },
  methods: {
    goTo (route) {
      this.$router.push({ path: route })
    }
  }
}
</script>

<style lang="sass" scoped>
.home
  text-align: center
  height: 100vh
  width: 100vw
  display: table
  margin: 0 auto
  position: relative
  background: linear-gradient(-8deg, rgba(99, 50, 128, 0.98221) 0%, rgba(227, 46, 69, 1) 61%, rgba(220, 21, 67, 1) 100%)
  &::before
    display: block
    content: ''
    position: absolute
    border-radius: 5px
    height: 50px
    width: 50px
    z-index: 8
    top: 0
    left: 10px

    $shadow: null
    @for $i from 0 through 8
      @for $j from 1 through 20
        $shadow: $shadow #{$i * 60}px #{$j * 60}px 0 rgba(255, 255, 255, 0.1)#{if($j != 20 or $i != 8, ",", "")}
    box-shadow: $shadow

  .-fixed-bottom
    position: fixed 
    bottom: 24px
    margin: 5% auto
    left: 0
    right: 0

  .-legends
    margin-bottom: 60px
    font-weight: lighter
    color: #fff
    text-shadow: rgba(0, 0, 0, 0.2)

  .-match
    font-weight: bold
    color: #fff

  .-login
    display: table-cell
    vertical-align: middle

  .-form-input
    width: 100%
    margin-top: 10px
    padding-left:  10px
    padding-right:  10px
  
  .-form-button
    margin-top: 42.66px

  .-forgot-password
    margin-top: 21.33px

</style>

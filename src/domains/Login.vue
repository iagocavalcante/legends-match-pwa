<template>
  <div class="home">
    <div class="-login">
      <h1 class="-legends">LEGENDS<b class="-match">MATCH</b></h1>
      <div class="-form-input">
        <l-input placeholder="Email" v-model="email"/>
      </div>
      <div class="-form-input">
        <l-input placeholder="Senha" v-model="password" type="password"/>
      </div>
      <div class="-form-button">
        <l-button :buttonText="'entrar'" @click="signIn()"/>
      </div>
      <div class="-forgot-password">
        <a class="link" href="/register">ou Esqueceu a senha? =[</a>  
      </div>
      <div class="-form-input -fixed-bottom">
        <l-button :buttonClass="'btn-outlined'" @click="goTo('register')" :buttonText="'cadastre-se'"/>
      </div>
    </div>
  </div>
</template>

<script>
import { pick } from 'lodash'
import LInput from '@/components/LInput'
import LButton from '@/components/LButton'
import { mapMutations } from 'vuex'

export default {
  name: 'home',
  components: {
    LInput,
    LButton
  },
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    goTo (route) {
      this.$router.push({ path: route })
    },
    ...mapMutations([
      'user',
      'auth'
    ]),
    async signIn () {
      const credentials = { email: this.email, password: this.password }
      const response = await this.$services.auth().signIn( credentials )

      const authHeaders = pick(response.headers,
                           ['access-token','client','expiry','uid','token-type'])

      const contents = {
        tokens: authHeaders,
        user: response.data.data
      }

      this.auth(contents.tokens)
      this.user(contents.user)

      this.$cookies.set('session',
                   JSON.stringify(contents),
                   { expires: '14D' })

      this.$router.push({ name: 'match' })
    }
  }
}
</script>

<style lang="sass" scoped>
.home
  text-align: center
  overflow-y: hidden
  height: 100vh
  width: 100vw
  display: table
  margin: 0 auto
  position: relative
  background: linear-gradient(-8deg, rgba(99, 50, 128, 0.98221) 0%, rgba(227, 46, 69, 1) 61%, rgba(220, 21, 67, 1) 100%)
  background-image: linear-gradient(152deg, #dc1543, #e32445 19%, #be1965 46%, #633280 89%)
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
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2)
    font-family: Poppins
    font-size: 36px
    font-weight: 300
    font-stretch: normal
    font-style: normal
    line-height: 1.53
    letter-spacing: normal
    color: #ffffff
    margin-bottom: 65px
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
    margin-top: 32px

  .-forgot-password
    margin-top: 16px

</style>

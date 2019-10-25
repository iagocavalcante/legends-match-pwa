<template>
  <nav class="header">
    <span @click="goBack()" class="-icon">
      <img src="~@/assets/baseline-arrow_back-24px.png" />
    </span>
    <div class="-logo">
      <h1 class="-legends">LEGENDS<b class="-match">MATCH</b></h1>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'LHeader',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="sass">
.header
  display: flex
  height: 37.333px

  .-icon
    cursor: pointer
    margin-top: 5px
    margin-left: 17.33px
    background-image: url('~@/assets/baseline-arrow_back-24px.png') no-repeat

  .-logo
    margin: auto 10%

  .-legends
    font-size: 26.66px
    margin-bottom: 60px
    font-weight: 300
    color: rgb(190, 25, 101)
    text-shadow: rgba(0, 0, 0, 0.2)

  .-match
    font-weight: bold
    font-size: 26.66px
    color: rgb(99, 50, 128)
    text-shadow: rgba(0, 0, 0, 0.2)
</style>
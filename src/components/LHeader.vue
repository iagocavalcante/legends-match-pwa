<template>
  <nav class="header">
    <span @click="goBack()" class="-icon" v-if="!disabled">
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
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
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
  align-items: center
  justify-content: space-between
  margin-top: 10px

  .-icon
    cursor: pointer
    width: 20px
    margin-top: 5px
    background-image: url('~@/assets/baseline-arrow_back-24px.png') no-repeat

  .-logo
    display: block
    flex-grow: 1
    overflow: hidden
    text-align: center
    text-overflow: ellipsis
    white-space: nowrap

  .-legends
    font-size: 20px
    font-weight: 300
    color: rgb(190, 25, 101)
    line-height: 1.5
    text-shadow: rgba(0, 0, 0, 0.2)

  .-match
    font-weight: bold
    font-size: 20px
    color: rgb(99, 50, 128)
    line-height: 1.5
    text-shadow: rgba(0, 0, 0, 0.2)
</style>
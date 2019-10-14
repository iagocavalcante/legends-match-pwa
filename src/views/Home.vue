<template>
  <div class="home">
    <h1 class="legends">LEGENDS<b class="match">MATCH</b></h1>
    <div class="form-input">
      <LInput/>
    </div>
    <div class="form-input">
      <LInput/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LInput from '@/components/LInput.vue'

export default {
  name: 'home',
  components: {
    LInput
  }
}
</script>

<style lang="sass" scoped>
.legends
  font-weight: lighter
  color: #fff

.match
  font-weight: bold
  color: #fff

.home
  text-align: center

.form-input
  margin-top: 10px
</style>

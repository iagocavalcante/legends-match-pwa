<template>
  <div class="">
    <button class="wrapper-upload">
      Adicionar Imagem
      <br>
      <img class="-icon" src="~@/assets/baseline-add_circle-24px.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'LUploadButton'
}
</script>

<style lang="sass" scoped>
.wrapper-upload
  cursor: pointer
  width: 120px
  height: 120px
  border-radius: 13.33px
  background-color: #633280
  border: none
  color: #fff
  font-weight: 500
  font-size: 16px
  line-height: 0.94

  .-icon
    margin-top: 10px
</style>
<template>
  <div class="">
    <div class="preview"
      :style="{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover'
      }"
      v-if="image"
      @click="clickUploader()"
    >
    </div>
    <input
      type="file"
      :id="`input-file-${id}`"
      :name="`input-file-${id}`"
      multiple
      accept="image/*"
      @change="previewThumbnail($event);"
      hidden
      ref="uploader"
    />
    <button v-if="!image" class="wrapper-upload" :for="`input-file-${id}`" role="button" @click="clickUploader()">
      Adicionar Imagem
      <br>
      <img class="-icon" src="~@/assets/baseline-add_circle-24px.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'LUploadButton',
  props: {
    id: {
      type: Number,
      default: () => new Date().getTime(),
      required: false
    },
    image: {
      type: String,
      default: '',
      required: false
    }
  },
  methods: {
    previewThumbnail (e) {
      let reader = new FileReader()
      const file = e.target.files[0]

      if (!file.type.includes('image/')) return

      reader.readAsDataURL(file)

      this.handleImage(e)
    },
    handleImage (e) {
      this.$emit('handleImage', e)
    },
    clickUploader () {
      this.$refs.uploader.click()
    }
  }
}
</script>

<style lang="sass" scoped>
.preview
  cursor: pointer
  width: 120px
  height: 120px
  border-radius: 13.33px
  background-color: #633280
  border: none
  margin: 0 auto

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
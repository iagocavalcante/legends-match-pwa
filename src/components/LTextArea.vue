<template>
  <textarea
    class="legends-input -register"
    :value="value"
    @input="$emit('input', $event.target.value)"
    rows="5" cols="20">
  </textarea>
</template>

<script>
export default {
  name: 'LTextArea',
  props: {
    value: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
$lipstick: rgb(190, 25, 101)
$purple: #633280

.-register
  width: 100%
  height: auto
  border-radius: 5px
  border: 2px solid $purple
</style>
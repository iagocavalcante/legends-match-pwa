<template>
  <button class="btn" @click="$emit('click', $event)" :class="buttonClass">{{buttonText}}</button>
</template>

<script>
export default {
  name: 'LButton',
  props: {
    buttonClass: {
      type: String,
      required: false,
      default: 'btn-primary'
    },
    buttonText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
$outlined: #ffffff

.btn
  cursor: pointer
  font-size: 16pt
  border: none
  font-weight: 500
  border-radius: 50px
  text-align: center
  padding: 5px 50px
  color: $outlined
  text-transform: uppercase
</style>>

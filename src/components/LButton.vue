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
  height: 35px
  border: none
  padding: 0 10px
  font-size: 16px
  font-weight: 500
  font-stretch: normal
  font-style: normal
  line-height: 1.56
  letter-spacing: normal
  font-weight: 500
  border-radius: 50px
  text-align: center
  color: $outlined
  text-transform: uppercase
</style>>

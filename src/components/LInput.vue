<template>
  <input
    class="legends-input"
    :class="isRegister ? '-register' : ''"
    :type="type"
    :value="value"
    :name="name"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
  >
</template>

<script>
export default {
  name: 'LInput',
  props: {
    value: {
      required: false
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    isRegister: {
      type: Boolean,
      required: false,
      default: false
    },
    id: {
      type: String,
      required: false,
      default: ''
    },
    verifiyError: {
      required: false
    }
  },
  watch: {
    verifiyError: function (val) {
      if (val === true) {
        this.className = 'text-input-error'
        this.$emit('resetClass', this.className)
      } else {
        this.className = 'text-input'
        this.$emit('resetClass', this.className)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
$purple: #633280

.-register
  width: 100%
  border-radius: 5px
  border: 2px solid $purple

.legends-input:focus
  border-radius: 5px
  box-shadow: 0 0 5px rgba(190, 25, 101, 1)
  padding: 3px 0px 3px 10px
  border: 1px solid rgb(190, 25, 101)

.legends-input-error:focus
  border: 1px solid #ff0000
  border-left-width: 7px
  padding-left: 28px
</style>

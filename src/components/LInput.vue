<template>
  <input
    class="legends-input"
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
.legends-input
  color: rgb(190, 25, 101)

.legends-input:focus
  outline: none
</style>

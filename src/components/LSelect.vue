<template>
  <multiselect
    :options="optionItems"
    :multiple="true"
    :closeOnSelect="false"
    :clearOnSelect="false"
    :preserveSearch="false"
    :placeholder="defaultLabelText"
    :preselectFirst="false"
    :searchable="false"
    :value="value"
    :taggable="false"
    :class="isRegister ? '-register' : ''"
    @input="$emit('input', $event)"
  >
  </multiselect>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'LSelect',
  components: {
    Multiselect
  },
  props: {
		value: Array,
		customClass: String,
		optionItems: Array,
		disableLabelText: Number,
		defaultLabelText: String,
		onSelectedEvent: Function,
    defaultSelectedValue: String,
    isRegister: {
      type: Boolean,
      required: false,
      default: false
    }
	}
}
</script>

<style lang="sass" scoped>
$lipstick: rgb(190, 25, 101)
$purple: #633280

.multiselect__option--highlight 
  background: $purple
  outline: none
  color: #fff

.-register
  width: 100%
  -moz-appearance: none
  -webkit-appearance: none
  appearance: none
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #fff
  background-position-x: 100% - 2
  border-radius: 5px
  border: 2px solid $purple
</style>

<style lang="sass">
$lipstick: rgb(190, 25, 101)
$purple: #633280

.multiselect__option--highlight 
  background: $purple
  outline: none
  color: #fff

.multiselect__option--highlight::after 
  background: $purple
  color: #fff

.multiselect__tag-icon::after
  color: #fff

.multiselect__tag
  position: relative
  display: inline-block
  padding: 4px 26px 4px 10px
  border-radius: 5px
  margin-right: 10px
  color: #fff
  line-height: 1
  background: $purple
  margin-bottom: 5px
  white-space: nowrap
  overflow: hidden
  max-width: 100%
  text-overflow: ellipsis
</style>
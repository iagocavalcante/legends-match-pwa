<template>
  <select
    v-model="currentOption"
    class="legends-input"
    :class="isRegister ? '-register' : ''"
    @input="$emit('input', $event.target.value)"
    @change="onSelectedEvent(currentOption)"
  >
    <option
      value=""
      v-if="defaultLabelText != null && defaultLabelText.length > 0"
      :disabled="disableLabelText == 1"
    >
      {{ defaultLabelText }}
    </option>
    <option
      v-for="item in optionItems"
      :value="item.id"
      :key="item.id"
      :selected="defaultSelectedValue == item.id"
    >
      {{ defaultSelectedValue }}{{ item.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'LSelect',
  props: {
		value: String,
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
	},
	
	data: () => ({
    currentOption: ''
  }),
	
	watch: {
		value: (newValue) => {
			this.currentOption = newValue;
		}
	},
	
	mounted () {
		this.currentOption = this.defaultSelectedValue;
	}
}
</script>

<style lang="sass" scoped>
$lipstick: rgb(190, 25, 101)
$purple: #633280

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
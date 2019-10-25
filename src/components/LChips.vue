<template>
  <div class="chip">
    <div class="chip-head" v-if="hasHeader">{{header}}</div>
    <div class="chip-content">{{label}}</div>
    <div class="chip-close" v-if="hasIcon">
      <svg class="chip-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
        </path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LChip',
  props: {
    hasHead: {
      type: Boolean,
      required: false,
      default: false
    },
    hasIcon: {
      type: Boolean,
      required: false,
      default: false
    },
    header: {
      type: String,
      default: '',
      required: false
    },
    label: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="sass" scoped>
.chip
  display: inline-flex
  flex-direction: row
  background-color: #633280
  border: none
  cursor: default
  height: 34.66px
  outline: none
  padding: 0
  font-size: 18.66px
  font-color: #fff
  white-space: nowrap
  align-items: center
  border-radius: 17.33px
  vertical-align: middle
  text-decoration: none
  justify-content: center

.chip-head
  display: flex
  position: relative
  overflow: hidden
  background-color: #32C5D2
  font-size: 1.25rem
  flex-shrink: 0
  align-items: center
  user-select: none
  border-radius: 50%
  justify-content: center
  width: 36px
  color: #fff
  height: 36px
  font-size: 20px
  margin-right: -4px

.chip-content
  cursor: inherit
  display: flex
  align-items: center
  user-select: none
  white-space: nowrap
  padding-left: 12px
  padding-right: 12px
  text-transform: uppercase
  color: #fff

.chip-svg
  color: #999999
  cursor: pointer
  height: auto
  margin: 4px 4px 0 -8px
  fill: currentColor
  width: 1em
  height: 1em
  display: inline-block
  font-size: 24px
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
  user-select: none
  flex-shrink: 0

.chip-svg:hover
  color: #666666
</style>
<template>
  <div class="fab">
    <button class="-button" :class="color">
      <svg v-if="menu" xmlns="http://www.w3.org/2000/svg" id="baseline-layers-24px" width="33.985" height="33.985" viewBox="0 0 33.985 33.985">
        <path id="Path_81" d="M0 0h33.985v33.985H0z" fill="none" data-name="Path 81"/>
        <path id="Path_82" d="M15.73 25.421L5.294 17.307 3 19.092 15.744 29l12.744-9.912-2.308-1.8-10.45 8.133zm.014-3.6l10.422-8.114 2.322-1.8L15.744 2 3 11.912l2.308 1.8z" fill="#fff" data-name="Path 82" transform="translate(1.248 .832)"/>
      </svg>
      <svg v-if="confirm" xmlns="http://www.w3.org/2000/svg" id="baseline-thumb_up-24px" width="29" height="29" viewBox="0 0 29 29">
        <path id="Path_83" d="M0 0h29v29H0z" fill="none" data-name="Path 83"/>
        <path id="Path_84" d="M1 26h4.909V11H1zm27-13.75a2.485 2.485 0 0 0-2.455-2.5H17.8l1.166-5.712.037-.4a1.9 1.9 0 0 0-.54-1.325L17.163 1 9.088 9.237A2.467 2.467 0 0 0 8.364 11v12.5a2.485 2.485 0 0 0 2.454 2.5h11.046a2.438 2.438 0 0 0 2.258-1.525l3.706-8.812A2.51 2.51 0 0 0 28 14.75z" fill="#fff" data-name="Path 84"/>
      </svg>
      <svg v-if="cancel" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <path fill="#fff" d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LFabButton',
  props: {
    color: {
      type: String,
      default: '-menu'
    },
    cancel: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Boolean,
      default: false
    },
    menu: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
.fab

  .-button
    border: none
    width: 56px
    height: 56px
    border-radius: 50%
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.24)
    padding-top: 5px
  
  .-cancel
    background-color: #e60730
  
  .-confirm
    background-color: #009688
  
  .-menu
    background-color: #be1965

</style>
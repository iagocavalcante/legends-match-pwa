<template>
  <div class="match">
    <l-header :disabled="true" />
    <Vue2InteractDraggable
      v-if="isVisible"
      :interact-out-of-sight-x-coordinate="500"
      :interact-max-rotation="15"
      :interact-x-threshold="200"
      :interact-y-threshold="200"
      :interact-event-bus-events="interactEventBus"
      interact-block-drag-down
      @draggedRight="emitAndNext('match')"
      @draggedLeft="emitAndNext('reject')"
      @draggedUp="emitAndNext('skip')"
      class="rounded-borders card card--one">
        <div class="-pic">
      
        </div>
        <div class="-national">
          <img :src="require('@/assets/brazil.svg')" />
        </div>
        <div class="-info">
          <div class="-name-age-national">
            <p class="-name">{{current.name}}, {{current.age}}</p>
            <p class="-name -lastname">{{current.name}}</p>
          </div>
          <div class="-play">
            <l-chips class="-play-chips" :label="'CS:GO'"/>
            <l-chips class="-play-chips" :label="'LOL'"/>
            <l-chips class="-play-chips" :label="'FORTNITE'"/>
            <l-chips class="-play-chips" :label="'PUBG'"/>
          </div>
          <div class="-level">
            <div class="-friendly">
              <svg xmlns="http://www.w3.org/2000/svg" id="baseline-sentiment_very_satisfied-24px" width="30" height="30" viewBox="0 0 30 30">
                <path id="Path_85" d="M0 0h30v30H0z" fill="none" data-name="Path 85"/>
                <circle id="Ellipse_11" cx="1.5" cy="1.5" r="1.5" fill="#be1965" data-name="Ellipse 11" transform="translate(18 10.286)"/>
                <circle id="Ellipse_12" cx="1.5" cy="1.5" r="1.5" fill="#be1965" data-name="Ellipse 12" transform="translate(9 10.286)"/>
                <path id="Path_86" d="M14.987 2A13 13 0 1 0 28 15 12.994 12.994 0 0 0 14.987 2zM15 25.4A10.4 10.4 0 1 1 25.4 15 10.4 10.4 0 0 1 15 25.4zm-6.5-7.8a7.1 7.1 0 0 0 6.5 5.2 7.1 7.1 0 0 0 6.5-5.2z" fill="#be1965" data-name="Path 86"/>
              </svg>
              <l-chips class="-level-chips" :label="'amigável'"/>
            </div>
            <div class="-friendly -space">
              <svg xmlns="http://www.w3.org/2000/svg" id="baseline-school-24px" width="30" height="30" viewBox="0 0 30 30">
                <path id="Path_87" d="M0 0h30v30H0z" fill="none" data-name="Path 87"/>
                <path id="Path_88" d="M6.091 16.573v5.333L15 27l8.909-5.093v-5.334L15 21.667zM15 3L1 11l14 8 11.455-6.547v9.213H29V11z" fill="#be1965" data-name="Path 88"/>
              </svg>
              <l-chips class="-level-chips" :label="'professor'"/>
            </div>
          </div>
          <div class="-play">
            <p class="-title">A procura de</p>
            <l-chips class="-play-chips" :label="'top laner'"/>
            <l-chips class="-play-chips" :label="'duo'"/>
          </div>
        </div>
    </Vue2InteractDraggable>


    <div class="-decision">
      <l-fab-button class="-cancel" :color="'-cancel'" :cancel="true" @click="reject"/>
      <l-fab-button :color="'-confirm'" :confirm="true" @click="match"/>
    </div>
    <div class="-menu">
      <div class="-menu-buttons">
        <div class="-profile" @click="goTo('profile')">
          <svg xmlns="http://www.w3.org/2000/svg" id="baseline-face-24px_1_" width="22" height="22" data-name="baseline-face-24px (1)" viewBox="0 0 22 22">
            <path id="Path_77" d="M8.3 10.775A1.125 1.125 0 1 0 9.425 11.9 1.125 1.125 0 0 0 8.3 10.775zm5.4 0a1.125 1.125 0 1 0 1.125 1.125 1.125 1.125 0 0 0-1.125-1.125zM11 2a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 16.2A7.21 7.21 0 0 1 3.8 11a7.3 7.3 0 0 1 .045-.774 9.056 9.056 0 0 0 4.689-4.833A8.977 8.977 0 0 0 15.878 9.2a8.784 8.784 0 0 0 2.022-.234A7.189 7.189 0 0 1 11 18.2z" fill="#fff" data-name="Path 77"/>
            <path id="Path_78" d="M0 0h22v22H0z" fill="none" data-name="Path 78"/>
          </svg>
          <p class="-text-color">PERFIL</p>
        </div>
        <div class="-fab-menu">
          <l-fab-button :menu="true"/>
        </div>
        <div class="-chat" @click="goTo('chat')">
          <svg xmlns="http://www.w3.org/2000/svg" id="baseline-chat-24px" width="22" height="22" viewBox="0 0 22 22">
            <path id="Path_79" d="M18.2 2H3.8a1.8 1.8 0 0 0-1.791 1.8L2 20l3.6-3.6h12.6a1.805 1.805 0 0 0 1.8-1.8V3.8A1.805 1.805 0 0 0 18.2 2zM5.6 8.3h10.8v1.8H5.6zm7.2 4.5H5.6V11h7.2zm3.6-5.4H5.6V5.6h10.8z" fill="#fff" data-name="Path 79"/>
            <path id="Path_80" d="M0 0h22v22H0z" fill="none" data-name="Path 80"/>
          </svg>
          <p class="-text-color">CHAT</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LChips from '@/components/LChips'
import LFabButton from '@/components/LFabButton'
import LHeader from '@/components/LHeader'
import { Vue2InteractDraggable, InteractEventBus } from 'vue2-interact'
const EVENTS = {
  MATCH: 'match',
  SKIP: 'skip',
  REJECT: 'reject'
}

export default {
  name: 'Match',
  components: {
    LChips,
    LFabButton,
    LHeader,
    Vue2InteractDraggable
  },
  data: () => ({
    isVisible: true,
    index: 0,
    interactEventBus: {
      draggedRight: EVENTS.MATCH,
      draggedLeft: EVENTS.REJECT,
      draggedUp: EVENTS.SKIP
    },
    cards: [
      { src: 'karina.jpg', name: 'Karina', age: 7 },
      { src: 'alexander.jpg', name: 'Alexander', age: 5 },
      { src: 'bona.jpg', name: 'Bona', age: 3 },
      { src: 'ichi.jpg', name: 'Ichi', age: 7 },
      { src: 'lloyd.jpg', name: 'Lloyd', age: 4 },
      { src: 'luiza.jpg', name: 'Luiza', age: 9 },
      { src: 'max.jpg', name: 'Max', age: 6 },
      { src: 'mona.jpg', name: 'Mona', age: 3 },
      { src: 'naru.jpg', name: 'Naru', age: 7 },
      { src: 'ramdan.jpg', name: 'Ramdan', age: 8 },
      { src: 'rikki-austin.jpg', name: 'Rikki Austin', age: 3 },
      { src: 'tucker.jpg', name: 'Tucker', age: 9 },
      { src: 'uriel.jpg', name: 'Uriel', age: 6 },
      { src: 'zoe.jpg', name: 'Zoe', age: 2 },
    ]
  }),
  computed: {
    current() {
      return this.cards[this.index]
    },
    next() {
      return this.cards[this.index + 1]
    }
  },
  methods: {
    match() {
      InteractEventBus.$emit(EVENTS.MATCH)
    },
    reject() {
      InteractEventBus.$emit(EVENTS.REJECT)
    },
    skip() {
      InteractEventBus.$emit(EVENTS.SKIP)
    },
    emitAndNext(event) {
      this.$emit(event, this.index)
      setTimeout(() => this.isVisible = false, 200)
      setTimeout(() => {
        this.index++
        this.isVisible = true
      }, 200)
    },
    goTo (route) {
      this.$router.push({ name: route })
    }
  }
}
</script>

<style lang="sass" scoped>
.match
  .-national
    position: absolute
    left: 20px
    margin-top: -20px

  .-pic
    width: 93vw
    height: 260px
    border-top-left-radius: 5px
    border-top-right-radius: 5px
    border: solid 1px #d6d6d6
    background-color: #ffffff
    margin-top: 82px
    margin-left: 13px
    display: -webkit-box
    display: -webkit-flex
    display: -ms-flexbox
    display: flex
    -webkit-flex-wrap: wrap
    -ms-flex-wrap: wrap
    flex-wrap: wrap
    -webkit-box-flex: 2
    -webkit-flex: 2
    -ms-flex: 2
    flex: 2

  .-info
    width: 93vw
    padding-bottom: 10px
    border-bottom-right-radius: 5px
    border-bottom-left-radius: 5px
    border: solid 1px #d6d6d6
    background-color: #ffffff
    margin-left: 13px
    padding-left: 10px

    .-name-age-national

      .-name
        margin-top: 10px
        font-size: 26px
        font-weight: 300
        font-stretch: normal
        font-style: normal
        line-height: 1.5
        letter-spacing: normal
        text-align: left
        color: #be1965
      
      .-lastname
        font-weight: 600

    @media (max-width: 360px)
    
      .-name
        font-size: 26px
        font-weight: 300
        font-stretch: normal
        font-style: normal
        line-height: 1.5
        letter-spacing: normal
        text-align: left
        color: #be1965
      
      .-lastname
        font-weight: 600

    .-level
      display: flex
      margin-top: 13px

      .-friendly
        color: #be1965
        display: flex

      .-space
        margin-left: 33px

      .-level-chips
        margin-left: 4px
        margin-top: 2px
        background-color: #be1965 !important

    .-play
      margin-top: 12px
      
      .-play-chips
        margin-right: 10px

      .-title
        margin-bottom: 7px
        font-size: 16px
        font-weight: normal
        font-stretch: normal
        font-style: normal
        line-height: 1.56
        letter-spacing: 0.32px
        text-align: left
        text-transform: uppercase
        color: #be1965

  .-decision
    display: flex
    align-content: center
    justify-content: center
    margin: 35px auto
  
    .-cancel
      margin-right: 18px

  .-menu
    display: flex
    align-content: center
    .-menu-buttons
      display: flex
      position: relative
      margin: 0 auto
      width: 350px
      height: 40px
      border-radius: 200px
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16)
      background-color: #633280
      justify-content: space-between
      
      .-text-color
        color: #fff
        font-size: 18px
        font-weight: normal
        font-stretch: normal
        font-style: normal
        line-height: 1.5
        letter-spacing: normal
        text-align: left
        margin-left: 6px
        margin-top: -3px

      .-profile
        cursor: pointer
        display: inline-flex
        padding: 10px

      .-fab-menu
        position: absolute
        top: -9px
        left: 147px

      .-chat
        cursor: pointer
        display: inline-flex
        padding: 10px
</style>
<template>
  <div class="profile">
    <l-header />
    <div class="-info">
      <img class="-avatar" :src="'https://d33wubrfki0l68.cloudfront.net/614f75e872ae472cfe3a2e2c8d38ad913b216694/e2668/events/2018-belem/speakers/iago-cavalcante.jpg'"/>
      <div class="-name-age-national">
        <p class="-name">Iago Angelim, 27</p>
        <p class="-name -lastname">Cavalcante</p>
        <div class="-national">
          <img class="" src="~@/assets/brazil.svg"/>
        </div>
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
        <p class="-title">Joga</p>
        <l-chips class="-play-chips" :label="'CS:GO'"/>
        <l-chips class="-play-chips" :label="'LOL'"/>
        <l-chips class="-play-chips" :label="'FORTNITE'"/>
        <l-chips class="-play-chips" :label="'PUBG'"/>
      </div>
      <div class="-play">
        <p class="-title">Características</p>
        <l-chips class="-play-chips" :label="'ADCARRY'"/>
        <l-chips class="-play-chips" :label="'snipper'"/>
        <l-chips class="-play-chips" :label="'luker'"/>
      </div>
      <div class="-play">
        <p class="-title">A procura de</p>
        <l-chips class="-play-chips" :label="'top laner'"/>
        <l-chips class="-play-chips" :label="'duo'"/>
      </div>
    </div>
  </div>
</template>

<script>
import LChips from '@/components/LChips'
import LHeader from '@/components/LHeader'

export default {
  name: 'Profile',
  components: {
    LChips,
    LHeader
  },
}
</script>

<style lang="sass" scoped>
.profile

  .-info
    padding-top: 82px
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

    .-avatar
      width: 120px
      height: 120px
      border-radius: 10px
      border: 5px solid #633280

    .-name-age-national
      margin-left: 19px

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
    
    @media (max-width: 360px)
      .-name-age-national
        margin-left: 10px
    
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
      margin-top: 30px
      
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

</style>
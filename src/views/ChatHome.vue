<template>
  <div class="chat">
    <l-header />
    <div class="chat-list">
      <div class="-header">
        <l-chips label="Conversas Ativas"></l-chips>
      </div>     
      <div id="friends">
        
        <div class="-friend" v-for="friend in friends" :key="friend.id">
          <div class="clickable" @click="goToChat(friend.id)">
            <img :src="friend.profilePic" />
            <div class="-notification" v-if="friend.notification > 0">
              <span>{{ friend.notification }}</span>
            </div>
            <p>
              <strong>{{ friend.fullName }}</strong>
              <br>
              <span>{{ friend.nickname }}</span>
            </p>
          </div>
          <div class="status">
            <div class="-fav" v-if="friend.isFav">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 51 48">
                <path fill="#F8D64E" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
              </svg>
            </div>
            <div class="-no-fav" v-else>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 51 48">
                <path fill="none" stroke="#a1a1a1" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
              </svg>
            </div>
            <div class="-menu">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="20" x="0px" y="0px"
                fill="#633280" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <g>
                  <g>
                    <g>
                      <circle cx="256" cy="256" r="64"/>
                      <circle cx="256" cy="448" r="64"/>
                      <circle cx="256" cy="64" r="64"/>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
          
      </div>                
        
    </div>
  </div>
</template>

<script>
import LHeader from '@/components/LHeader'
import LChips from '@/components/LChips'

export default {
  name: 'Profile',
  components: {
    LHeader,
    LChips
  },
  data: () => ({
    friends: [
      {
        fullName: 'Teste Json',
        nickname: 'Rellikeht',
        isFav: true,
        id: 1,
        profilePic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg',
        notification: 10
      },
      {
        fullName: 'Teste Json',
        nickname: 'Rellikeht',
        isFav: false,
        id: 2,
        profilePic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg',
        notification: 0
      },
      {
        fullName: 'Teste Json',
        nickname: 'Rellikeht',
        isFav: true,
        id: 3,
        profilePic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg',
        notification: 25
      },
      {
        fullName: 'Teste Json',
        nickname: 'Rellikeht',
        isFav: false,
        id: 4,
        profilePic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg',
        notification: 5
      },
      {
        fullName: 'Teste Json',
        nickname: 'Rellikeht',
        isFav: true,
        id: 5,
        profilePic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg',
        notification: 0
      },
      {
        fullName: 'Teste Json',
        nickname: 'Rellikeht',
        isFav: false,
        id: 6,
        profilePic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg',
        notification: 10
      },
      {
        fullName: 'Teste Json',
        nickname: 'Rellikeht',
        isFav: true,
        id: 7,
        profilePic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg',
        notification: 10
      },
      {
        fullName: 'Teste Json',
        nickname: 'Rellikeht',
        isFav: false,
        id: 8,
        profilePic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg',
        notification: 10
      },
      {
        fullName: 'Teste Json',
        nickname: 'Rellikeht',
        isFav: true,
        id: 9,
        profilePic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg',
        notification: 10
      },
      {
        fullName: 'Teste Json',
        nickname: 'Rellikeht',
        isFav: false,
        id: 10,
        profilePic: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg',
        notification: 10
      }
    ]
  }),
  methods: {
    goToChat (id) {
      this.$router.push({ path: `chat/${id}` })
    }
  }
}
</script>

<style lang="sass" scoped>
$green: #be1965
$blue: #633280
$orange: #E38968
$gray: #92959E


p
  margin: 0
  padding: 0

.chat-list
  padding-top: 82px
  position: absolute
  top: 0
  left: 0
  width: 100vw
  height: 100vh

  .-header
    text-align: center


.-friend
  height: 84px
  border-bottom: 1px solid #e7ebee       
  position: relative

  .clickable
    cursor: pointer

.-friend img
  width: 54px
  object-fit: contain
  border-radius: 7px
  margin: 15px
  float: left
  border: 3px solid #be1965

.-notification

  span
    position: absolute
    top: 5px
    left: 55px
    padding: 3px 6px
    border-radius: 100px
    width: 25px
    height: 25px
    background: #be1965
    font-size: 13px
    font-weight: 300
    font-stretch: normal
    text-align: center
    color: #ffffff
    text-decoration: none

.floatingImg
  width: 54px
  height: 54px
  object-fit: contain
  border-radius: 7px
  position: absolute
  top: 0
  left: 12px
  border: 3px solid #be1965

.-friend p
  padding: 15px 0 0 0        
  float: left
  width: 220px
  font-size: 14px
  font-weight: 300
  font-stretch: normal
  font-style: normal
  line-height: 1.5
  letter-spacing: normal
  color: #be1965

.-friend p strong
  font-size: 14px
  font-weight: 400
  color: #be1965


.-friend p span
  font-size: 14px
  font-weight: bold
  color: #be1965

.-friend .status
  display: flex
  border-radius: 50% 
  width: 9px
  height: 9px
  position: absolute
  top: 31px
  right: 55px
  justify-content: space-between
  
  .-fav
    color: #ffcb64
    margin-right: 16px
    cursor: pointer
  
  .-no-fav
    width: 20px
    height: 20px
    color: #a1a1a1
    margin-right: 16px
    cursor: pointer
  
  .-menu
    color: #be1965
    cursor: pointer

.-friend .status.away
  background: #ffce54
.-friend .status.inactive
  background: #eaeef0

</style>
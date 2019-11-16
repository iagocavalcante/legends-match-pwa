<template>
  <div class="chat">
    <l-header />
    <div class="chat-list">
      <div class="-header">
        <l-chips label="Conversas Ativas"></l-chips>
      </div>     
      <div id="friends">
        <div class="-friend" @click="goToChat(1)">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />
          <div class="-notification">
            <span>10</span>
          </div>
          <p>
            <strong>Miro Badev</strong>
            <br>
            <span>nickname</span>
          </p>
          <div class="status">
            <i class="-fav fas fa-star"></i>
            <i class="-menu fas fa-ellipsis-v"></i>
          </div>
        </div>
        
        <div class="-friend" @click="goToChat(1)">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />
          <div class="-notification">
            <span>10</span>
          </div>
          <p>
            <strong>Miro Badev</strong>
            <br>
            <span>nickname</span>
          </p>
          <div class="status">
            <i class="-fav fas fa-star"></i>
            <i class="-menu fas fa-ellipsis-v"></i>
          </div>
        </div>
        
        <div class="-friend" @click="goToChat(1)">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />
          <div class="-notification">
            <span>10</span>
          </div>
          <p>
            <strong>Miro Badev</strong>
            <br>
            <span>nickname</span>
          </p>
          <div class="status">
            <i class="-no-fav far fa-star"></i>
            <i class="-menu fas fa-ellipsis-v"></i>
          </div>
        </div>
        
        
        <div class="-friend" @click="goToChat(1)">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />
          <div class="-notification">
            <span>10</span>
          </div>
          <p>
            <strong>Miro Badev</strong>
            <br>
            <span>nickname</span>
          </p>
          <div class="status">
            <i class="-no-fav far fa-star"></i>
            <i class="-menu fas fa-ellipsis-v"></i>
          </div>
        </div>
        
        
        <div class="-friend" @click="goToChat(1)">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />
          <div class="-notification">
            <span>10</span>
          </div>
          <p>
            <strong>Miro Badev</strong>
            <br>
            <span>nickname</span>
          </p>
          <div class="status">
            <i class="-no-fav far fa-star"></i>
            <i class="-menu fas fa-ellipsis-v"></i>
          </div>
        </div>
        
        
        <div class="-friend" @click="goToChat(1)">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />
          <div class="-notification">
            <span>10</span>
          </div>
          <p>
            <strong>Miro Badev</strong>
            <br>
            <span>nickname</span>
          </p>
          <div class="status">
            <i class="-no-fav far fa-star"></i>
            <i class="-menu fas fa-ellipsis-v"></i>
          </div>
        </div>
        
        
        <div class="-friend" @click="goToChat(1)">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />
          <div class="-notification">
            <span>10</span>
          </div>
          <div class="-notification">
            <span>10</span>
          </div>
          <p>
            <strong>Miro Badev</strong>
            <br>
            <span>nickname</span>
          </p>
          <div class="status">
            <i class="-no-fav far fa-star"></i>
            <i class="-menu fas fa-ellipsis-v"></i>
          </div>
        </div>
        
        
        <div class="-friend" @click="goToChat(1)">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />
          <div class="-notification">
            <span>10</span>
          </div>
          <p>
            <strong>Miro Badev</strong>
            <br>
            <span>nickname</span>
          </p>
          <div class="status">
            <i class="-no-fav far fa-star"></i>
            <i class="-menu fas fa-ellipsis-v"></i>
          </div>
        </div>
        
        <div class="-friend" @click="goToChat(1)">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3_copy.jpg" />
          <div class="-notification">
            <span>10</span>
          </div>
          <p>
            <strong>Miro Badev</strong>
            <br>
            <span>nickname</span>
          </p>
          <div class="status">
            <i class="-no-fav far fa-star"></i>
            <i class="-menu fas fa-ellipsis-v"></i>
          </div>
        </div>
        
        <div class="-friend" @click="goToChat(1)">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4_copy.jpg" />
          <div class="-notification">
            <span>10</span>
          </div>
          <p>
            <strong>Miro Badev</strong>
            <br>
            <span>nickname</span>
          </p>
          <div class="status">
            <i class="-no-fav far fa-star"></i>
            <i class="-menu fas fa-ellipsis-v"></i>
          </div>
        </div>
        
        <div class="-friend" @click="goToChat(1)">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg" />
          <div class="-notification">
            <span>10</span>
          </div>
          <p>
            <strong>Miro Badev</strong>
            <br>
            <span>nickname</span>
          </p>
          <div class="status">
            <i class="-fav fas fa-star"></i>
            <i class="-menu fas fa-ellipsis-v"></i>
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
  cursor: pointer
  height: 84px
  border-bottom: 1px solid #e7ebee       
  position: relative

.-friend:hover
  background: #f1f4f6
  cursor: pointer

.-friend img
  width: 54px
  object-fit: contain
  border-radius: 7px
  margin: 15px
  float: left
  border: 3px solid #be1965

.-friend img[data-count]:not([data-count=""]):not([data-count="0"]):after
	position: absolute
	right: 0%
	top: 1%
	content: attr(data-count)
	font-size: 30%
	padding: .4em
	border-radius: 2em
	line-height: .75em
	color: white
	background: rgb(255, 0, 0)
	text-align: center
	min-width: 1.5em
	font-weight: bold

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
    font-style: normal
    line-height: 1.54
    letter-spacing: normal
    text-align: left
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
  color: red
  right: 55px
  justify-content: space-between
  
  .-fav
    color: #ffcb64
    margin-right: 16px
  
  .-no-fav
    color: #a1a1a1
    margin-right: 16px
  
  .-menu
    color: #be1965

.-friend .status.away
  background: #ffce54
.-friend .status.inactive
  background: #eaeef0

</style>
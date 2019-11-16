<template>
  <div class="chat">
    <l-header />
    <div class="chat">
      <div class="chat-history">
        <ul>
          <li class="clearfix">
            <div class="message-data align-right">
              <span class="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
              <span class="message-data-name" >Olia</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="message other-message float-right">
              Hi Vincent, how are you? How is the project coming along?
            </div>
          </li>
          
          <li>
            <div class="message-data">
              <span class="message-data-name"><i class="fa fa-circle online"></i> Vincent</span>
              <span class="message-data-time">10:12 AM, Today</span>
            </div>
            <div class="message my-message">
              Are we meeting today? Project has been already finished and I have results to show you.
            </div>
          </li>
          
          <li class="clearfix">
            <div class="message-data align-right">
              <span class="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
              <span class="message-data-name" >Olia</span> <i class="fa fa-circle me"></i>
              
            </div>
            <div class="message other-message float-right">
              Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?
            </div>
          </li>
          
          <li>
            <div class="message-data">
              <span class="message-data-name"><i class="fa fa-circle online"></i> Vincent</span>
              <span class="message-data-time">10:20 AM, Today</span>
            </div>
            <div class="message my-message">
              Actually everything was fine. I'm very excited to show this to our team.
            </div>
          </li>
          
        </ul>
        
      </div> 
      <div class="chat-message clearfix">
        <input name="" class="message-to-send legends-input" id="message-to-send" placeholder ="Digite aqui sua mensagem">        
        <button>Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
import LHeader from '@/components/LHeader'

export default {
  name: 'Profile',
  components: {
    LHeader
  }
}
</script>

<style lang="sass" scoped>
$green: #be1965
$blue: #633280
$orange: #E38968
$gray: #92959E

.chat
  width: 100vw
  float:left
  background: #F2F5F8
  border-top-right-radius: 5px
  border-bottom-right-radius: 5px
  
  color: #434651

  ul
    list-style: none
  
  .chat-header
    padding: 20px
    border-bottom: 2px solid white
    
    img
      float: left
  
    
    .chat-about
      float: left
      padding-left: 10px
      margin-top: 6px
  
    
    .chat-with
      font-weight: bold
      font-size: 16px
  
    
    .chat-num-messages
      color: $gray
  
    
    .fa-star
      float: right
      color: #D8DADF
      font-size: 20px
      margin-top: 12px
  

  
  .chat-history
    padding: 30px 30px 20px
    border-bottom: 2px solid white
    overflow-y: scroll
    height: 84vh
    
    .message-data
      margin-bottom: 15px
  
    
    .message-data-time
      color: lighten($gray, 8%)
      padding-left: 6px
  
    
    .message      
      color: white
      padding: 18px 20px
      line-height: 26px
      font-size: 16px
      border-radius: 7px
      margin-bottom: 30px
      width: 90%
      position: relative
      
      &:after
        bottom: 100%
        left: 7%
        border: solid transparent
        content: " "
        height: 0
        width: 0
        position: absolute
        pointer-events: none
        border-bottom-color: $green
        border-width: 10px
        margin-left: -10px
    
  
    
    .my-message
      background: $green
  
    
    .other-message
      background: $blue
      
      &:after
        border-bottom-color: $blue
        left: 93%
  
  .chat-message
    width: 100vw 
    position: fixed
    height: 60px
    border-radius: 5px
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16)
    background-color: #633280
    bottom: 0
    
    .message-to-send
      margin: 9px
      height: 42px
      width: 95vw
      padding: 5px
      border-radius: 5px
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16)
      background-color: #ffffff 
    
    button
      position: absolute
      right: 14px
      top: 14px
      font-size: 13px
      font-weight: 600
      font-stretch: normal
      font-style: normal
      line-height: 1.54
      letter-spacing: 0.26px
      color: #ffffff
      text-transform: uppercase
      border: none
      cursor: pointer
      
      width: 78px
      height: 33px
      border-radius: 5px
      background-color: #be1965
      
      &:hover
        color: darken($blue, 7%)
    
  


.online, .offline, .me
  margin-right: 3px
  font-size: 10px

  
.online
  color: $green
  
.offline
  color: $orange

.me
  color: $blue

.align-left
  text-align: left

.align-right
  text-align: right

.float-right
  float: right

.clearfix:after
	visibility: hidden
	display: block
	font-size: 0
	content: " "
	clear: both
	height: 0
</style>
<template>
  <div class="register">
    <l-header />
    <div class="-form-input">
      <l-upload-button class="-upload"/>
    </div>
    <div class="-form-input">
      <l-chips class="-chips" :label="'Dados Pessoais'"/>
    </div>
    <div class="-form-input">
      <l-input :placeholder="'Digite o Nome'" :isRegister="true" />
    </div>
    <div class="-form-input">
      <l-input :placeholder="'Digite o Nick'" :isRegister="true" />
    </div>
    <div class="-form-input">
      <l-input :placeholder="'Digite sua idade'" :isRegister="true" />
    </div>
    <div class="-form-input">
      <l-select
        :customClass="'-select'"
        v-model="currentItem"
        :isRegister="true"
        :default-selected-value="selectedValue"
        :option-items="optionsArray"
        :default-label-text="defaultText"
        :disable-label-text="1"
      >
      </l-select>
    </div>
    <div class="-form-input">
      <l-select
        :customClass="'-select'"
        v-model="currentItem"
        :isRegister="true"
        :default-selected-value="selectedValue"
        :option-items="optionsArray"
        :default-label-text="'Estado'"
        :disable-label-text="1"
      >
      </l-select>
    </div>
    <div class="-form-input">
      <l-input :placeholder="'Digite sua idade'" :isRegister="true" />
    </div>
    <div class="-form-input">
      <div class="-form-2">
        <l-input class="-input" :placeholder="'Digite sua senha'" :isRegister="true" />
        <l-input class="-input" :placeholder="'Repita sua senha'" :isRegister="true" />
      </div>
    </div>
    <div class="-form-input">
      <l-text-area class="-input" :placeholder="'Digite sua senha'" :isRegister="true" />
    </div>
    <div class="-form-input">
      <l-chips class="-chips" :label="'Dados de Jogador'"/>
    </div>
    <div class="-form-input">
      <l-select
        :customClass="'-select'"
        v-model="currentItem"
        :isRegister="true"
        :default-selected-value="selectedValue"
        :option-items="optionsArray"
        :default-label-text="defaultText"
        :disable-label-text="1"
      >
      </l-select>
      <div class="-form-input">
        <l-chips class="-games" :label="'CS:GO'"/>
        <l-chips class="-games" :label="'LOL'"/>
        <l-chips class="-games" :label="'pubg'"/>
        <l-chips class="-games" :label="'fortnite'"/>
      </div>
    </div>
    <div class="-form-input">
      <l-select
        :customClass="'-select'"
        v-model="currentItem"
        :isRegister="true"
        :default-selected-value="selectedValue"
        :option-items="optionsArray"
        :default-label-text="defaultText"
        :disable-label-text="1"
      >
      </l-select>
      <div class="-form-input">
        <l-chips class="-games" :label="'CS:GO'"/>
        <l-chips class="-games" :label="'LOL'"/>
        <l-chips class="-games" :label="'pubg'"/>
        <l-chips class="-games" :label="'fortnite'"/>
      </div>
    </div>
    <div class="-form-input">
      <l-select
        :customClass="'-select'"
        v-model="currentItem"
        :isRegister="true"
        :default-selected-value="selectedValue"
        :option-items="optionsArray"
        :default-label-text="defaultText"
        :disable-label-text="1"
      >
      </l-select>
      <div class="-form-input">
        <l-chips class="-games" :label="'CS:GO'"/>
        <l-chips class="-games" :label="'LOL'"/>
        <l-chips class="-games" :label="'pubg'"/>
        <l-chips class="-games" :label="'fortnite'"/>
      </div>
    </div>
    <div class="-form-input">
      <l-chips class="-chips" :label="'vincular contas'"/>
    </div>
    <div class="-form-input">
      <l-list-view/>
    </div>
  </div>
</template>

<script>
import LChips from '@/components/LChips'
import LHeader from '@/components/LHeader'
import LInput from '@/components/LInput'
import LListView from '@/components/LListView'
import LSelect from '@/components/LSelect'
import LTextArea from '@/components/LTextArea'
import LUploadButton from '@/components/LUploadButton'

export default {
  name: 'register',
  components: {
    LChips,
    LHeader,
    LInput,
    LListView,
    LSelect,
    LTextArea,
    LUploadButton
  },
	data: () => ({
    defaultText: 'País',
		currentItem: '',
		selectedValue: '',
    optionsArray: [
      {
        id: '1', 
        text: 'Apple'
      },
      {
        id: '2', 
        text: 'Banana'
      },
      {
        id: '3', 
        text: 'Mango'
      },
      {
        id: '4', 
        text: 'Watermelon'
      }],
  }),
}
</script>

<style lang="sass" scoped>
.register
  text-align: center

  .-upload
    margin-top: 54.66px
    margin-bottom: 40px

  .-select
    width: 100%

  .-chips
    margin: 16px 0
  
  .-games
    margin: 2.5px 5px

  .-form-input
    margin-top: 10px
    padding-left:  10px
    padding-right:  10px
  
    .-form-2
      display: grid
      grid-template-columns: auto auto
      grid-gap: 10px
    
    .-form-2:nth-child(2n)
      margin-left: 10px
        
</style>

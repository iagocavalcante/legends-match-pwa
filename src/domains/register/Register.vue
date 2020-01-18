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
      <l-input
        placeholder="Digite seu nome completo"
        :isRegister="true"
        v-model="user.full_name"
        :verifiyError="$v.user.full_name.$error"
        @blur="$v.user.$touch()"
      />
      <div class="errors-form-messages" v-if="$v.user.full_name.$error">
        <ul class="contactForm__messages" v-if="$v.user.full_name.$error">
          <li v-if="!$v.user.full_name.required">Nome completo é obrigatório.</li>
        </ul>
      </div>
    </div>
    <div class="-form-input">
      <l-input
        placeholder="Digite o Nick"
        :isRegister="true"
        v-model="user.nickname"
        :verifiyError="$v.user.nickname.$error"
        @blur="$v.user.$touch()"
      />
      <div class="errors-form-messages" v-if="$v.user.nickname.$error">
        <ul class="contactForm__messages" v-if="$v.user.nickname.$error">
          <li v-if="!$v.user.nickname.required">Nickname é obrigatório.</li>
        </ul>
      </div>
    </div>
    <div class="-form-input">
      <l-input
        placeholder="Digite seu email"
        :isRegister="true"
        v-model="user.email"
        :verifiyError="$v.user.email.$error"
        @blur="$v.user.$touch()"
      />
      <div class="errors-form-messages" v-if="$v.user.email.$error">
        <ul class="contactForm__messages" v-if="$v.user.email.$error">
          <li v-if="!$v.user.email.required">Email é obrigatório.</li>
        </ul>
      </div>
    </div>
    <div class="-form-input">
      <l-input
        placeholder="Digite sua data de nascimento"
        :isRegister="true"
        v-model="user.birthday"
        :verifiyError="$v.user.birthday.$error"
        @blur="$v.user.$touch()"
      />
      <div class="errors-form-messages" v-if="$v.user.birthday.$error">
        <ul class="contactForm__messages" v-if="$v.user.birthday.$error">
          <li v-if="!$v.user.birthday.required">Data de nascimento é obrigatório.</li>
        </ul>
      </div>
    </div>
    <div class="-form-input">
      <div class="-form-2">
        <l-input class="-input"
          placeholder="Digite sua senha"
          type="password"
          :isRegister="true"
          v-model="user.password"
          :verifiyError="$v.user.password.$error"
          @blur="$v.user.$touch()"
        />
        <l-input class="-input"
          placeholder="Repita sua senha"
          type="password"
          :isRegister="true"
          v-model="user.confirmPassword"
          :verifiyError="$v.user.confirmPassword.$error"
          @blur="$v.user.$touch()"
        />
        <div class="errors-form-messages" v-if="$v.user.password.$error">
          <ul class="contactForm__messages" v-if="$v.user.password.$error">
            <li v-if="!$v.user.password.required">Senha é obrigatório.</li>
            <li v-if="!$v.user.password.minLength">Senha deve ter no mínimo 8 dígitos.</li>
          </ul>
        </div>
        <div class="errors-form-messages" v-if="$v.user.confirmPassword.$error">
          <ul class="contactForm__messages" v-if="$v.user.confirmPassword.$error">
            <li v-if="!$v.user.confirmPassword.required">Confirmar a senha é obrigatório.</li>
            <li v-if="!$v.user.confirmPassword.sameAs">Os campos de senha devem ser iguais.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="-form-input">
      <l-text-area class="-input"
        placeholder="Fale um pouco sobre você!!"
        :isRegister="true"
        v-model="user.bio"
        :verifiyError="$v.user.bio.$error"
        @blur="$v.user.$touch()"
      />
      <div class="errors-form-messages" v-if="$v.user.bio.$error">
        <ul class="contactForm__messages" v-if="$v.user.bio.$error">
          <li v-if="!$v.user.bio.required">Bio é obrigatório.</li>
        </ul>
      </div>
    </div>
    <div class="-form-input">
      <l-chips class="-chips" :label="'Dados de Jogador'"/>
    </div>
    <div class="-form-input">
      <l-select
        :customClass="'-select'"
        v-model="game"
        :isRegister="true"
        :default-selected-value="gameSelected"
        :option-items="user.games"
        :default-label-text="defaultTextGames"
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
        v-model="skillSelected"
        :isRegister="true"
        :default-selected-value="skillSelected"
        :option-items="user.skills"
        :default-label-text="defaultTextSkills"
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
        v-model="preference"
        :isRegister="true"
        :default-selected-value="preferenceSelected"
        :option-items="user.preferences"
        :default-label-text="defaultTextPreferences"
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
    <div class="-form-input" v-if="editProfile">
      <l-chips class="-chips" :label="'vincular contas'"/>
    </div>
    <div class="-form-input">
      <div v-if="editProfile">
        <l-list-view 
          v-for="(item, index) in listItem"
          :key="index"
          :imgUrl="item.avatar"
          :title="item.statusText"
          :date="item.dateConnect"
          :status="item.status"
        >
          <template #connect>
            <l-button :buttonClass="'btn-outlined btn-purple'" :buttonText="'conectar'"/>
          </template>
        </l-list-view>

      </div>
      <div class="-form-input-buttons">
        <l-button class="-buttons" :buttonClass="'btn-outlined btn-success'" :buttonText="'salvar'" @click="signUp()"/>
        <l-button :buttonClass="'btn-outlined btn-danger'" :buttonText="'cancelar'"/>
      </div>
    </div>
  </div>
</template>

<script>
import LButton from '@/components/LButton'
import LChips from '@/components/LChips'
import LHeader from '@/components/LHeader'
import LInput from '@/components/LInput'
import LListView from '@/components/LListView'
import LSelect from '@/components/LSelect'
import LTextArea from '@/components/LTextArea'
import LUploadButton from '@/components/LUploadButton'
import formErrors from '@/mixins/formErrors.mixin'
import notification from '@/mixins/notifications.mixin'
import validations from './mixins/validations.mixin'

export default {
  name: 'register',
  mixins: [notification, formErrors, validations],
  components: {
    LButton,
    LChips,
    LHeader,
    LInput,
    LListView,
    LSelect,
    LTextArea,
    LUploadButton
  },
	data: () => ({
    editProfile: false,
    defaultTextGames: 'Jogos',
    defaultTextSkills: 'Posições',
    defaultTextPreferences: 'Tipo de Jogo',
		game: '',
		gameSelected: '',
		skillSelected: '',
		skill: '',
    preferenceSelected: '',
    preference: '',
    user: {
      email: '',
      password: '',
      full_name: '',
      nickname: '',
      birthday: '',
      bio: '',
      games: ['LOL', 'CS:GO', 'RPG DE MESA'],
      skills: ['AD CARRY', 'SUPORTE', 'TOP', 'MID', 'JUNGLER', 'SNIPER', 'CAPITÃO', 'LUKER', 'ENTRY FRAGGER', 'MESTRE DE MESA', 'JOGADORES'],
      preferences: ['RANKED', 'NORMAL', 'TIME']
    },
    listItem: [
      {
        avatar: 'iconmonstr-steam-4.png',
        statusText: 'Conta Vinculada',
        status: true,
        dateConnect: '21.02.2019'
      },
      {
        avatar: 'riot-games.png',
        statusText: 'Conta Vinculada',
        status: true,
        dateConnect: '21.02.2019'
      },
      {
        avatar: 'iconmonstr-twitch-1.png',
        statusText: 'Não Vinculada',
        status: false,
        dateConnect: '--'
      }
    ]
  }),
  methods: {
    async signUp () {
      const fields = [this.$v.user]
      try {
        await this.verifyErrorsForm(fields)
      } catch (error) {
        this.errorMsg(
          'Usuário',
          'Não foi possivel realizar o cadastro, verifique os erros no formulário',
          'topCenter'
        )
        return
      }
      
      const user = {
        email: this.email,
        full_name: this.full_name,
        nickname: this.nickname,
        password: this.password,
        birthday: this.birthday,
        bio: this.bio,
        games: this.games,
        skills: this.skills,
        preferences: this.preferences,
        latitude: -1.44265068,
        longitude: -48.47982824,
      }

      try {
        const response = await this.$services.auth().signUp(user)
        this.resetData()
        this.$v.$reset()
        this.successMsg(
          `${response.data.data.nickname}`,
          `seu cadastro foi realizado, em poucos instantes, enviaremos um email para validar sua conta!`,
          'topCenter'
        )
      } catch (e) {
        this.errorMsg(
          'Usuário',
          `Não foi possivel realizar o cadastro, ${e}`,
          'topCenter'
        )
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.register
  text-align: center
  background-color: #f5f5f5

  .-upload
    padding-top: 109.32px
    margin-bottom: 40px

  .-select
    width: 100%

  .-chips
    margin: 16px 0
  
  .-games
    margin: 2.5px 5px

  .-buttons
    margin-right: 10px
  
  .-form-input-buttons
    margin-top: 10px
    margin-bottom: 10px

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

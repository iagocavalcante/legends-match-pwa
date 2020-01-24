import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

const defaultUser = () => ({
  email: '',
  full_name: '',
  nickname: '',
  password: '',
  confirmPassword: '',
  bio: '',
  age: '',
  games: [],
  skills: [],
  preferences: []
})

export default {
  methods: {
    resetUserData () {
      this.user = defaultUser()
    }
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('password')
      },
      full_name: {
        required
      },
      nickname: {
        required
      },
      bio: {
        required
      },
      age: {
        required
      },
    }
  }
}
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  methods: {
    resetData () {
      this.user.email = ''
      this.user.full_name = ''
      this.user.nickname = ''
      this.user.password = ''
      this.user.confirmPassword = ''
      this.user.bio = ''
      this.user.birthday = ''
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
      birthday: {
        required
      },
    }
  }
}
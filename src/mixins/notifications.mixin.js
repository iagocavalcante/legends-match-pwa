import VueNotifications from 'vue-notifications'

export default {
  methods: {
    errorMsg (title, message, positionValue) {
      let position = this.verifiyValuePosition(positionValue)
      this.showErrorMsg({ title, message, position })
    },
    infoMsg (title, message, positionValue) {
      let position = this.verifiyValuePosition(positionValue)
      this.showInfoMsg({ title, message, position })
    },
    successMsg (title, message, positionValue) {
      let position = this.verifiyValuePosition(positionValue)
      this.showSuccessMsg({ title, message, position })
    },
    warnMsg (title, message, positionValue) {
      let position = this.verifiyValuePosition(positionValue)
      this.showWarnMsg({ title, message, position })
    },
    verifiyValuePosition (positionValue) {
      return positionValue === '' ? 'topCenter' : positionValue
    }
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: 'Hello there',
      message: 'That\'s the success!'
    },
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: 'Hey you',
      message: 'Here is some info for you'
    },
    showWarnMsg: {
      type: VueNotifications.types.warn,
      title: 'Wow, man',
      message: 'That\'s the kind of warning'
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: 'Wow-wow',
      message: 'That\'s the error'
    }
  }
}
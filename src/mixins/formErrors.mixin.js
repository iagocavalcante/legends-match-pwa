

export default {
  methods: {
    async verifyErrorsForm (fields) {
      return new Promise((resolve, reject) => {
        for (let field of fields) {
          field.$touch()
        }
        fields.filter(field => field.$error === true).length === 0 ? resolve() : reject(new Error())
      })
    }

  }
}
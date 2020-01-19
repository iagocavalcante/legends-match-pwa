import Api from '@/services/Api'
import { ResponseService } from '@/services/ResponseService'

export default class AuthService extends Api {
  constructor (http) {
    super('/auth', http)
  }

  signIn = async ($data) => {
    try {
      const response = await this.http.post(`${this.api}/sign_in`, $data)
      return  response
    } catch (error) {
      throw ResponseService(error, 'create')
    }
  }
  
  signUp = async ($data) => {
    try {
      const response = await this.http.post(`${this.api}`, $data)
      return  response
    } catch (error) {
      throw ResponseService(error, 'create')
    }
  }
}

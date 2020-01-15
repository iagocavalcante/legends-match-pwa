import AuthService from './auth/AuthService'
import { Http } from '@/services/Http'

export default {
  auth: () => new AuthService(Http)
}
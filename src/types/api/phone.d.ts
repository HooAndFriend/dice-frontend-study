import exp from 'constants'
import type { Response } from '.'

export interface PhoneResponse extends Response {

  responseData: {
    username: string
    accessToken: string
    password: string
    refreshToken: string
    name: string
    id: number
    number: string
  }
}

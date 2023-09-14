import type { Response } from '.'

export interface UserLoginResponse extends Response {
  responseData: any
  data: {
    username: string
    accessToken: string
    password: string
    refreshToken: string
    name: string
  }
}

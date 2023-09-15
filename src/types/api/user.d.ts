import type { Response } from '.'

export interface UserLoginResponse extends Response {
  responseData: {
    accessToken: string
    name: string
    refreshToken: string
  }
}

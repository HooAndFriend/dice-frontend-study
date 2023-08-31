import type { Response } from '.'

export interface UserLoginResponse extends Response {
  data: {
    id: string
    accessToken: string
    password: string
    refreshToken: string
  }
}

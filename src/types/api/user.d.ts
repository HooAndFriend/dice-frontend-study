import type { Response } from '.'

export interface UserLoginResponse extends Response {
  data: {
    id: number
    accessToken: string
    email: string
    refreshToken: string
  }
}

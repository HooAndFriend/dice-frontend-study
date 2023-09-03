import type { Response } from '.'

export interface UserLoginResponse extends Response {
  data: {
    accessToken: string
    name: string
    refreshToken: string
  }
}

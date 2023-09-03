import type { Response } from '.'

export interface NumberResponse extends Response {
  data: {
    id: number
    accessToken: string
    email: string
    refreshToken: string
  }
}

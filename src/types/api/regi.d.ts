import type { Response } from '.'

export interface UserRegisterResponse extends Response {
  data: {
    username: string
    password:string
    name: string
  }
}

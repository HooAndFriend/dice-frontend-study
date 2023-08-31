import type { Response } from '.'

export interface UserRegisterResponse extends Response {
  data: {
    id: number
    password:string
    name: string
  }
}

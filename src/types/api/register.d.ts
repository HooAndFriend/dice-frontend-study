import type { Response } from '.'

export interface UserRegisterResponse extends Response {
  data: {
    authority: string
    createdDate: string
    id: string
    idx: integer
    modifiedDate: string
    name: string
    password: string
  }
}

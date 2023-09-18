import type { Response } from '.'

export interface NumberResponse extends Response {
  responseData: {
    createdDate: string
    id: number
    modifiedDate: string
    name: string
    number: string
  }[]
}

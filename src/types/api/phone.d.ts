import type { Response } from '.'

export interface PhoneResponse extends Response {
  data: {
    name: string
    number: string
  }
}

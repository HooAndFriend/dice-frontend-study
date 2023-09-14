import type { Response } from '.'

export interface PhoneResponse extends Response {
  name: string
  number: string
}

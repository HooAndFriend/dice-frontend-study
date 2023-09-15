import type { Response } from '.'

export interface NumberResponse extends Response {
  name: string
  number: string
}

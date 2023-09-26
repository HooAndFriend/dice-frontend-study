import type { Response } from '.'

export interface UserLoginResponse extends Response {
  responseData: {
    username: string
    accessToken: string
    password: string
    refreshToken: string
    name: string
  }

}

export interface UserRegisterResponse extends Response {
  responseData: {
    createdDate: string
    modifiedDate: string
    id: number
    username: string
    password: string
    name: string
    authority: string
  }
}


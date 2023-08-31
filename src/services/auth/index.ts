import type { UserLoginResponse } from '@/types/api/user'
import type { UserRegisterResponse } from '@/types/api/regi'
import { api } from '..'
import type { UserLoginParams } from '@/types/user'
import type { UserRegisterParams } from '@/types/regi'
// Auth Api CreateApi
export const authApi = api
  .enhanceEndpoints({
    addTagTypes: ['Auth'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      // Mutation
      login: builder.mutation<UserLoginResponse, UserLoginParams>({
        query: (args) => ({
          url: '/uesr/login',
          method: 'POST',
          body: args,
        }),
      }),
    }),
  })

  export const regiApi = api
  .enhanceEndpoints({
    addTagTypes: ['regi'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      register: builder.mutation<UserRegisterResponse, UserRegisterParams>({
        query: (args) => ({
          url: '/user',
          method: 'POST',
          body: args,
        }),
      }),
    }),
  })
export const {useRegisterMutation}= regiApi
export const { useLoginMutation } = authApi

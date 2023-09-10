import type { UserLoginResponse } from '@/types/api/user'
import type { UserRegisterResponse } from '@/types/api/regi'
import { api } from '..'
import type { UserLoginParams } from '@/types/user'
import type { UserRegisterParams } from '@/types/regi'
import type { UserPhoneParams } from '@/types/phone'
import type { PhoneResponse } from '@/types/api/phone'
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
          url: '/user/login',
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
  export const phoneApi = api
  .enhanceEndpoints({
    addTagTypes: ['phone'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      phone: builder.mutation<PhoneResponse, UserPhoneParams>({
        query: (args) => ({
          url: '/phone',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: args,
        }),
      }),
    }),
  })
  
export const {usePhoneMutation} = phoneApi
export const {useRegisterMutation}= regiApi
export const { useLoginMutation } = authApi

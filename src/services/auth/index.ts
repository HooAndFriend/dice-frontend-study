import type { UserLoginResponse } from '@/types/api/user'
import { api } from '..'
import type { UserLoginParams } from '@/types/user'

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
          url: '/auth/login',
          method: 'POST',
          body: args,
        }),
      }),
    }),
  })

export const { useLoginMutation } = authApi

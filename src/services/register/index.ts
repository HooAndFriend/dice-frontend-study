import { api } from '..'

import type { UserRegisterParams } from '@/types/register'
import { UserRegisterResponse } from '@/types/api/register'

// Auth Api CreateApi
export const registerApi = api
  .enhanceEndpoints({
    addTagTypes: ['Register'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      // Mutation
      register: builder.mutation<UserRegisterResponse, UserRegisterParams>({
        query: (args) => ({
          url: '/user',
          method: 'POST',
          body: args,
        }),
      }),
    }),
  })

export const { useRegisterMutation } = registerApi

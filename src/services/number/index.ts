import { api } from '..'

import { PhoneNumberParams } from '@/types/number'
import { NumberResponse } from '@/types/api/number'

// Auth Api CreateApi
export const numberApi = api
  .enhanceEndpoints({
    addTagTypes: ['Number'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      // Query
      // Mutation
      number: builder.mutation<NumberResponse, PhoneNumberParams>({
        query: (args) => ({
          url: '/phone',
          method: 'POST',
          body: args,
        }),
      }),
    }),
  })

export const { useNumberMutation } = numberApi

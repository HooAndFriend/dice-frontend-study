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
      getNumberList: builder.mutation<NumberResponse[], PhoneNumberParams>({
        query: (args) => ({
          url: '/phone',
          method: 'GET',
        }),
      }),
    }),
  })

export const { useNumberMutation } = numberApi
export const { useGetNumberListMutation } = numberApi

import { api } from '..'

import { PhoneNumberParams } from '@/types/number'
import { NumberResponse } from '@/types/api/number'
import { Build } from '@mui/icons-material'
import { SetStateAction } from 'react'

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
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: args,
        }),
      }),
    }),
  })

export const getNumberApi = api
  .enhanceEndpoints({
    addTagTypes: ['getNumber'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      getNumberList: builder.mutation<
        {
          responseData: SetStateAction<NumberResponse[]>
          status: number
          data: NumberResponse[]
        },
        PhoneNumberParams
      >({
        query: (args) => ({
          url: '/phone',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }),
      }),
    }),
  })

export const { useNumberMutation } = numberApi
export const { useGetNumberListMutation } = getNumberApi
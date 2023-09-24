import { PhoneResponse } from '@/types/api/phone';
import { api } from '..';
import { UserPhoneParams } from '@/types/phone';
import { SetStateAction } from 'react';


export const phoneApi = api
  .enhanceEndpoints({
    addTagTypes: ['phone'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      phoneadd: builder.mutation<PhoneResponse, UserPhoneParams>({
        query: (args) => ({
          url: '/phone',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: args,
        }),
      }),
      phoneList: builder.mutation<{
        responseData: SetStateAction<PhoneResponse[]>; status: number; data: PhoneResponse[]
      }, UserPhoneParams>({
        query: (args) => ({
          url: '/phone',
          method: 'GET',
        }),
      }),
    }),
  })

export const { usePhoneListMutation, usePhoneaddMutation } = phoneApi
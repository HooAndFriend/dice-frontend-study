import { api } from '..'

// Auth Api CreateApi

export const authApi = api
  .enhanceEndpoints({
    addTagTypes: ['Auth']
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: builder => ({
      login: builder.mutation({
        query: args => ({
          url: '/user/login',
          method: 'POST',
          body: args
        })
      }),
      saveAdmin: builder.mutation({
        query: args => ({
          url: '/user',
          method: 'POST',
          body: args
        })
      })
    })
  })

export const { useLoginMutation, useSaveAdminMutation } = authApi

/**
 * export const authApi = api
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

export const phoneListApi = api
  .enhanceEndpoints({
    addTagTypes: ['phoneList'],
  })
  .injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
      phoneList: builder.mutation<{
        responseData: SetStateAction<PhoneResponse[]>; status: number; data: PhoneResponse[]
      }, UserPhoneParams>({
        query: (args) => ({
          url: '/phone',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
        }),
      }),
    }),
  })
 * 
 * 
 * 
 * 
 * 
 * 
 *
 *  export const { usePhoneMutation } = phoneApi
export const { usePhoneListMutation } = phoneListApi
export const { useRegisterMutation } = regiApi
export const { useLoginMutation } = authApi
 */


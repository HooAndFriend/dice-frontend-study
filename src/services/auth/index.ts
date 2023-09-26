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

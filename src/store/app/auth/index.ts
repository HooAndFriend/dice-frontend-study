// ** Redux Imports
import { authApi } from '@/services'
import { RootState } from '@/store'
import { createSlice } from '@reduxjs/toolkit'

interface UserType {
  user: { accessToken: string; name: string; refreshToken: string }
}

const initialState: UserType = {
  user: {
    name: '',
    accessToken: '',
    refreshToken: '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = { ...payload.responseData }
      },
    )
  },
})

export default authSlice.reducer

export const getAccessToken = (state: RootState) => state.auth.user.accessToken

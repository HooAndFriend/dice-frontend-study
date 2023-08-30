// ** Redux Imports
import { RootState } from '@/store'
import { createSlice } from '@reduxjs/toolkit'

interface CountType {
  count: number
}

const initialState: CountType = {
  count: 0,
}

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    plus: (state) => {
      state.count = state.count + 1
    },
    minus: (state) => {
      state.count = state.count - 1
    },
  },
  extraReducers: {},
})

export default countSlice.reducer

export const { plus, minus } = countSlice.actions
export const getCount = (state: RootState) => state.count.count

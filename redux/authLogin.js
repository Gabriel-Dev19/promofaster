import { createSlice } from "@reduxjs/toolkit";

export const slice =  createSlice({
  name: 'setAuth',
  initialState: {
    isAuth: false
  },
  reducers: {
    isAuthTrue (state) {
      return {...state, isAuth: true}
    },
    isAuthFalse (state) {
      return {...state, isAuth: false}
    }
  }
})

export const { isAuthTrue, isAuthFalse } = slice.actions

export default slice.reducer
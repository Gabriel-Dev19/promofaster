import { createSlice } from "@reduxjs/toolkit";

export const slice =  createSlice({
  name: 'setBackdrop',
  initialState: {
    setBackdrop: false
  },
  reducers: {
    backdropTrue (state) {
      return {...state, setBackdrop: true}
    },
    backdropFalse (state) {
      return {...state, setBackdrop: false}
    }
  }
})

export const { backdropTrue, backdropFalse } = slice.actions

export default slice.reducer
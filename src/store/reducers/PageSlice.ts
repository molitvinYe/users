import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: 'page',
  initialState: {page: 1},
  reducers: {
     nextPage(state) {
      state.page += 1
     },
     startPage(state) {
      state.page = 1
     }
  }
})

export default pageSlice.reducer
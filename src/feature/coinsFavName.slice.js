import { createSlice } from "@reduxjs/toolkit";

export const coinsFavNameSlice = createSlice({
  name: "coinsFavName",
  initialState: {
    coinsFavName: [],
  },
  reducers: {
    setCoinsFavName: (state, { payload }) => {
      state.coinsFavName = payload;
    },
  },
});

export const { setCoinsFavName } = coinsFavNameSlice.actions;
export default coinsFavNameSlice.reducer;

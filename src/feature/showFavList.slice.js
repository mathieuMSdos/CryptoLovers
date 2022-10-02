import { createSlice } from "@reduxjs/toolkit";

export const showFavListSlice = createSlice({
  name: "showFavList",
  initialState: {
    showFavList: false,
  },
  reducers: {
    setShowFavList: (state, { payload }) => {
      state.showFavList = payload;
    },
  },
});

export const { setShowFavList } = showFavListSlice.actions;
export default showFavListSlice.reducer;

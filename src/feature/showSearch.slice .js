import { createSlice } from "@reduxjs/toolkit";

export const showSearchSlice = createSlice({
  name: "showSearch",
  initialState: {
    showSearch: false,
  },
  reducers: {
    setShowSearchRedux: (state, { payload }) => {
      state.showSearch = payload;
    },
  },
});

export const { setShowSearchRedux } = showSearchSlice.actions;
export default showSearchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const noSearchResultReduxSlice = createSlice({
  name: "noSearchResultRedux",
  initialState: {
    noSearchResultRedux: false,
  },
  reducers: {
    setNoSearchResultRedux: (state, { payload }) => {
      state.noSearchResultRedux = payload;
    },
  },
});

export const { setNoSearchResultRedux } = noSearchResultReduxSlice.actions;
export default noSearchResultReduxSlice.reducer;

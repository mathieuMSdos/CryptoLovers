import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    list: false,
  },
  reducers: {
    setList: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export const { setList } = listSlice.actions;
export default listSlice.reducer;

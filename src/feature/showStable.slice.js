import { createSlice } from "@reduxjs/toolkit";

export const showStableSlice = createSlice({
  name: "showStable",
  initialState: {
    showStable: "",
  },
  reducers: {
    setShowStable: (state, { payload }) => {
      state.showStable = payload;
    },
  },
});

export const { setShowStable } = showStableSlice.actions;
export default showStableSlice.reducer;

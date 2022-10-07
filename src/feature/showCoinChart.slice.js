import { createSlice } from "@reduxjs/toolkit";

export const showCoinChartSlice = createSlice({
  name: "showCoinChart",
  initialState: {
    showCoinChart: false,
  },
  reducers: {
    setShowCoinChart: (state, { payload }) => {
      state.showCoinChart = payload;
    },
  },
});

export const { setShowCoinChart } = showCoinChartSlice.actions;
export default showCoinChartSlice.reducer;

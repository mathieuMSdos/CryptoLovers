import { configureStore } from "@reduxjs/toolkit";
import showStableReducer from "../feature/showStable.slice";
import showFavListReducer from "../feature/showFavList.slice";
import searchReducer from "../feature/search.slice";
import showsearchReducer from "../feature/showSearch.slice ";
import coinsFavNameReducer from "../feature/coinsFavName.slice";
import showCoinChartReducer from "../feature/showCoinChart.slice";

export default configureStore({
  reducer: {
    showStable: showStableReducer,
    showFavList: showFavListReducer,
    search: searchReducer,
    showSearch: showsearchReducer,
    coinsFavName: coinsFavNameReducer,
    showCoinChart: showCoinChartReducer,
  },
});

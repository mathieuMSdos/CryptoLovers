import { configureStore } from "@reduxjs/toolkit";
import showStableReducer from "../feature/showStable.slice";
import listReducer from "../feature/list.slice";
import searchReducer from "../feature/search.slice"
import showsearchReducer from "../feature/showSearch.slice "

export default configureStore({
  reducer: {
    showStable: showStableReducer,
    list: listReducer,
    search: searchReducer,
    showSearch: showsearchReducer,
  },
});

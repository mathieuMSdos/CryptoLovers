import { configureStore } from "@reduxjs/toolkit";
import showStableReducer from "../feature/showStable.slice"
import listReducer from "../feature/list.slice"

export default configureStore({
    reducer: {
        showStable: showStableReducer,
        list : listReducer
    },
})
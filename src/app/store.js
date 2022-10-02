import { configureStore } from "@reduxjs/toolkit";
import showStableReducer from "../feature/showStable.slice"

export default configureStore({
    reducer: {
        showStable: showStableReducer,
    },
})
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { yizuzSlice } from "./slices/yizuz";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        yizuz: yizuzSlice.reducer,
    },
})
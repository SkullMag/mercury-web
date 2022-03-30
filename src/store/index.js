import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { mercuryApi } from "./api";
import authReducer from "./slices/auth";

export const store =  configureStore({
    reducer: {
        auth: authReducer,
        [mercuryApi.reducerPath]: mercuryApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mercuryApi.middleware)
})

setupListeners(store.dispatch)
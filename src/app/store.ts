import { configureStore } from '@reduxjs/toolkit'
import { weatherApiSlice } from "../features/api/weatherApiSlice"
import { geoApiSlice } from "../features/api/geoApiSlice"


export const store = configureStore({
    reducer: {
        [weatherApiSlice.reducerPath]: weatherApiSlice.reducer,
        [geoApiSlice.reducerPath]: geoApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApiSlice.middleware, geoApiSlice.middleware)
})
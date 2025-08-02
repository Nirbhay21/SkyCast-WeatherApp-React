import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_CONFIG } from "../../app/config";
import { type ForecastData, type Coordinates, type WeatherData } from "../../types";

export const weatherApiSlice = createApi({
    reducerPath: "weatherApi",
    keepUnusedDataFor: 10 * 60,
    refetchOnMountOrArgChange: 5 * 60,
    refetchOnReconnect: true,
    baseQuery: fetchBaseQuery({
        baseUrl: API_CONFIG.WEATHER_API_BASE_URL
    }),
    endpoints: (builder) => ({
        getWeather: builder.query<WeatherData, Coordinates>({
            query: ({ lat, lon }) => {
                const params = new URLSearchParams({
                    lat: lat.toString(),
                    lon: lon.toString(),
                    appid: API_CONFIG.DEFAULT_PARAMS.appid,
                    units: API_CONFIG.DEFAULT_PARAMS.units
                });
                return `/weather?${params.toString()}`;
            }
        }),
        getForecast: builder.query<ForecastData, Coordinates>({
            query: ({ lat, lon }) => {
                const params = new URLSearchParams({
                    lat: lat.toString(),
                    lon: lon.toString(),
                    appid: API_CONFIG.DEFAULT_PARAMS.appid,
                    units: API_CONFIG.DEFAULT_PARAMS.units
                });
                return `/forecast?${params.toString()}`;
            }
        }),
    })
})

export const {
    useGetWeatherQuery,
    useGetForecastQuery
} = weatherApiSlice;
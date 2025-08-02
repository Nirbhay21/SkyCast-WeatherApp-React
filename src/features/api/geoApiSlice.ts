import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_CONFIG } from "../../app/config";
import { type SearchLocationsResults, type Coordinates, type GeocodingApiResponse } from "../../types";

export const geoApiSlice = createApi({
    reducerPath: "geoApi",
    keepUnusedDataFor: 10 * 60,
    refetchOnMountOrArgChange: 5 * 60,
    refetchOnReconnect: true,
    baseQuery: fetchBaseQuery({
        baseUrl: API_CONFIG.GEO_API_BASE_URL
    }),
    endpoints: (builder) => ({
        getLocationByCoordinates: builder.query<GeocodingApiResponse, Coordinates>({
            query: ({ lat, lon }) => {
                const params = new URLSearchParams({
                    lat: lat.toString(),
                    lon: lon.toString(),
                    appid: API_CONFIG.DEFAULT_PARAMS.appid,
                    limit: "1"
                });
                return `reverse?${params.toString()}`;
            }
        }),
        getLocations: builder.query<SearchLocationsResults[], string>({
            query: (cityName) => {
                const params = new URLSearchParams({
                    q: cityName,
                    limit: "6",
                    appid: API_CONFIG.DEFAULT_PARAMS.appid,
                    units: API_CONFIG.DEFAULT_PARAMS.units
                });
                return `/direct?${params}`;
            }
        })
    })
})

export const { useGetLocationByCoordinatesQuery, useGetLocationsQuery } = geoApiSlice;
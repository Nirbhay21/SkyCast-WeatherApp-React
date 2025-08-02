import { useCallback, useEffect } from "react";
import type { GeolocationState } from "../types";
import { useLocaleStorage } from "./use-locale-storage";

export function useGeolocation() {
    const [locationData, setLocationData] = useLocaleStorage<GeolocationState>("current-location", {
        coordinates: null,
        error: null,
        isLoading: true,
    });

    const getLocation = useCallback(() => {
        if (!navigator.geolocation) {
            setLocationData({
                coordinates: null,
                error: "Geolocation is not supported by your browser.",
                isLoading: false,
            })
            return;
        }

        navigator.geolocation.getCurrentPosition((position) => {
            setLocationData({
                coordinates: {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                },
                error: null,
                isLoading: false,
            })
        }, (error) => {
            let errorMessage: string;
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = "Location permission denied, Please enable location access.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    errorMessage = "Location request timed out.";
                    break;
                default:
                    errorMessage = "An unknown error occurred, " + error.message;
            }
            setLocationData({
                coordinates: null,
                error: errorMessage,
                isLoading: false,
            })
        }, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        })
    }, [setLocationData]);

    useEffect(() => {
        if (!locationData.coordinates) {
            getLocation();
        }
    }, [getLocation, locationData.coordinates]);

    return { ...locationData, getLocation };
}


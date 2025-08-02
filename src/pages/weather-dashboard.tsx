import { Button } from "../components/ui/button";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGeolocation } from "../hooks/use-geolocation";
import CurrentWeather from "../components/CurrentWeather";
import FavoriteCities from "../components/favorite-cities";
import WeatherDetails from "../components/weather-details";
import WeatherForecast from "../components/weather-forecast";
import { AlertTriangle, MapPin, RefreshCw } from "lucide-react";
import HourlyTemperature from "../components/hourly-temperature";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { useGetLocationByCoordinatesQuery } from "../features/api/geoApiSlice";
import CurrentWeatherSkeleton from "../components/skeletons/CurrentWeatherSkeleton";
import WeatherDetailsSkeleton from "../components/skeletons/WeatherDetailsSkeleton";
import WeatherForecastSkeleton from "../components/skeletons/WeatherForecastSkeleton";
import { useGetWeatherQuery, useGetForecastQuery } from "../features/api/weatherApiSlice";
import HourlyTemperatureSkeleton from "../components/skeletons/HourlyTemperatureSkeleton";

const WeatherDashboard = () => {
    const {
        coordinates,
        error: locationError,
        isLoading: isLocationLoading,
        getLocation
    } = useGeolocation();

    const weather = useGetWeatherQuery(coordinates ?? skipToken);
    const forecast = useGetForecastQuery(coordinates ?? skipToken);
    const geoLocation = useGetLocationByCoordinatesQuery(coordinates ?? skipToken);

    const isAnyFetching = weather.isFetching || forecast.isFetching || geoLocation.isFetching;

    const locationName = geoLocation.data?.[0];

    const handleRefreshLocation = () => {
        getLocation();
        if (coordinates) {
            weather.refetch();
            forecast.refetch();
            geoLocation.refetch();
        }
    }

    if (locationError) {
        return (
            <Alert variant="destructive">
                <AlertTriangle className="w-4 h-4" />
                <AlertTitle>Location Error</AlertTitle>
                <AlertDescription className="flex flex-col space-y-2">
                    <p>{locationError}</p>
                    <span>Your session has expired. Please log in again.</span>
                    <Button variant={"outline"} onClick={getLocation} className="self-start"
                        disabled={isAnyFetching}>
                        <MapPin className="w-4 h-4" />
                        Enable Location
                    </Button>
                </AlertDescription>
            </Alert>
        )
    }

    if (!coordinates) {
        return (
            <Alert variant="destructive">
                <AlertTriangle className="w-4 h-4" />
                <AlertTitle>Location Required</AlertTitle>
                <AlertDescription className="flex flex-col space-y-2">
                    <p>Please enable location access to see your local weather.</p>
                    <Button variant={"outline"} onClick={getLocation} className="self-start">
                        <MapPin className="w-4 h-4" />
                        <span>Enable Location</span>
                    </Button>
                </AlertDescription>
            </Alert>
        )
    }

    if (weather.isError || forecast.isError) {
        return (
            <Alert variant="destructive">
                <AlertTriangle className="w-4 h-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription className="flex flex-col space-y-2">
                    <p>Failed to fetch weather data. Please try again.</p>
                    <Button variant={"outline"} onClick={handleRefreshLocation} className="self-start">
                        <MapPin className="w-4 h-4" />
                        <span>Retry</span>
                    </Button>
                </AlertDescription>
            </Alert>
        )
    }

    return (
        <div className="space-y-4">
            <FavoriteCities />

            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl tracking-tight">My Location</h1>
                <Button variant={"outline"} size={"icon"} onClick={handleRefreshLocation}>
                    <RefreshCw className={`w-4 h-4 ${isAnyFetching || isLocationLoading ? "animate-spin" : ""}`} />
                </Button>
            </div>

            <div className="gap-6 grid">
                <div className="flex lg:flex-row flex-col gap-4">
                    {(weather.isFetching) ? (
                        <CurrentWeatherSkeleton skeletonFor="WeatherDashboard" />
                    ) : (weather.isSuccess) && (
                        <CurrentWeather data={weather.data} locationName={locationName} />
                    )}
                    {(forecast.isFetching) ? (
                        <HourlyTemperatureSkeleton />
                    ) : (forecast.isSuccess) && (
                        <HourlyTemperature data={forecast.data} />
                    )}
                </div>

                <div className="items-start gap-6 grid md:grid-cols-2">
                    {(weather.isFetching) ? (
                        <WeatherDetailsSkeleton />
                    ) : (weather.isSuccess) && (
                        <WeatherDetails data={weather.data} />
                    )}
                    {(forecast.isFetching) ? (
                        <WeatherForecastSkeleton />
                    ) : (forecast.isSuccess) && (
                        <WeatherForecast data={forecast.data} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default WeatherDashboard
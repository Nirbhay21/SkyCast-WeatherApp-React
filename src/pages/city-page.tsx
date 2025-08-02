import { AlertTriangle } from "lucide-react";
import { skipToken } from "@reduxjs/toolkit/query";
import CurrentWeather from "../components/CurrentWeather";
import FavoriteButton from "../components/favorite-button";
import WeatherDetails from "../components/weather-details";
import WeatherForecast from "../components/weather-forecast";
import { useParams, useSearchParams } from "react-router-dom";
import HourlyTemperature from "../components/hourly-temperature";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import CurrentWeatherSkeleton from "../components/skeletons/CurrentWeatherSkeleton";
import WeatherDetailsSkeleton from "../components/skeletons/WeatherDetailsSkeleton";
import WeatherForecastSkeleton from "../components/skeletons/WeatherForecastSkeleton";
import CityPageCityNameSkeleton from "../components/skeletons/CityPageCityNameSkeleton";
import { useGetForecastQuery, useGetWeatherQuery } from "../features/api/weatherApiSlice";
import HourlyTemperatureSkeleton from "../components/skeletons/HourlyTemperatureSkeleton";

const CityPage = () => {
  const [searchParam] = useSearchParams();
  const params = useParams();

  const lat = parseFloat(searchParam.get("lat") || "0");
  const lon = parseFloat(searchParam.get("lon") || "0");
  const coordinates = { lat, lon };

  const weather = useGetWeatherQuery(coordinates ?? skipToken);
  const forecast = useGetForecastQuery(coordinates ?? skipToken);

  if (weather.isError || forecast.isError) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="w-4 h-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col space-y-2">
          <p>Failed to fetch weather data. Please try again.</p>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-4">
      {(weather.isFetching) ? (
        <CityPageCityNameSkeleton />
      ) : (weather.isSuccess && params.cityName) && (
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl tracking-tight">
            {params?.cityName}, {weather.data.sys.country}
          </h1>
          <div>
            <FavoriteButton data={{ ...weather.data, name: params.cityName }} />
          </div>
        </div>
      )}

      <div className="gap-6 grid">
        <div className="flex flex-col gap-4">
          {(weather.isFetching) ? (
            <CurrentWeatherSkeleton skeletonFor="CityPage" />
          ) : (weather.isSuccess) && (
            <CurrentWeather data={weather.data} />
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

export default CityPage
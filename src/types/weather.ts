import type { GeocodingResult } from "./geocoding";

export interface WeatherCoordinates {
  lon: number;
  lat: number;
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherMainMetrics {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface WeatherWind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface WeatherRain {
  '1h'?: number;
  '3h'?: number;
}

export interface WeatherClouds {
  all: number;
}

export interface WeatherSystemInfo {
  type?: number;
  id?: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  coord: WeatherCoordinates;
  weather: WeatherCondition[];
  base: string;
  main: WeatherMainMetrics;
  visibility: number;
  wind: WeatherWind;
  rain?: WeatherRain;
  clouds: WeatherClouds;
  dt: number;
  sys: WeatherSystemInfo;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface CurrentWeatherProps {
  data: WeatherData;
  locationName?: GeocodingResult;
}

export interface WeatherDetailsProps {
  data: WeatherData;
}
export type WeatherDetail = {
  title: string;
  value: string;
  icon: React.ElementType;
  color: string;
};
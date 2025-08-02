import type { Coordinates } from "./location";

export interface WeatherForecastMainMetrics {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface WeatherForecastCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherForecastClouds {
  all: number;
}

export interface WeatherForecastWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface WeatherForecastRain {
  '3h'?: number;
}

export interface WeatherForecastSys {
  pod: string;
}

export interface WeatherForecastListItem {
  dt: number;
  main: WeatherForecastMainMetrics;
  weather: WeatherForecastCondition[];
  clouds: WeatherForecastClouds;
  wind: WeatherForecastWind;
  visibility: number;
  pop: number;
  rain?: WeatherForecastRain;
  sys: WeatherForecastSys;
  dt_txt: string;
}

export interface WeatherForecastCity {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface ForecastData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherForecastListItem[];
  city: WeatherForecastCity;
}

export interface HourlyTemperatureProps {
  data: ForecastData;
}

export interface WeatherForecastProps {
  data: ForecastData;
};

export interface DailyForecast {
  date: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  wind: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
}
import { format } from "date-fns";
import type { WeatherForecastProps, DailyForecast } from "../types/forecast"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react";

const WeatherForecast = ({ data }: WeatherForecastProps) => {
    const dailyForecast = data?.list?.reduce((acc, forecast) => {
        const date = format(new Date(forecast.dt * 1000), "yyyy-MM-dd");
        if (!acc[date]) {
            acc[date] = {
                temp_min: forecast.main.temp_min,
                temp_max: forecast.main.temp_max,
                humidity: forecast.main.humidity,
                wind: forecast.wind.speed,
                weather: forecast.weather[0],
                date: forecast.dt,
            };
        } else {
            acc[date].temp_min = Math.min(acc[date].temp_min, forecast.main.temp_min);
            acc[date].temp_max = Math.max(acc[date].temp_max, forecast.main.temp_max);
        }
        return acc;
    }, {} as Record<string, DailyForecast>);

    const nextDays = Object.values(dailyForecast).slice(0, 6);
    const formatTemp = (temp: number) => `${Math.round(temp)}°`;

    return (
        <Card>
            <CardHeader>
                <CardTitle>6-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="gap-4 grid">
                    {nextDays.map((day) => (
                        <div key={day.date} className="flex flex-wrap justify-between items-center gap-6 p-4 border rounded-lg">
                            <div>
                                <p className="font-medium">
                                    {format(new Date(day.date * 1000), "EEE, MMM, d")}
                                </p>
                                <p className="text-muted-foreground text-sm capitalize">
                                    {day.weather.description}
                                </p>
                            </div>
                            <div className="flex sm:flex-row lg:flex-row flex-col md:flex-col sm:gap-4 md:gap-0 lg:gap-3 xl:gap-4">
                                <span className="flex items-center text-blue-500">
                                    <ArrowDown className="mr-1 w-4 h-4" />
                                    {formatTemp(day.temp_min)}
                                </span>
                                <span className="flex items-center text-red-500">
                                    <ArrowUp className="mr-1 w-4 h-4" />
                                    {formatTemp(day.temp_max)}
                                </span>
                            </div>
                            <div className="flex flex-row sm:flex-row lg:flex-row md:flex-col xs:flex-col justify-center gap-4 sm:gap-4 md:gap-0 lg:gap-3 xl:gap-4 xs:gap-0 w-full xs:w-auto">
                                <span className="flex items-center gap-1">
                                    <Droplets className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm">{day.humidity}%</span>
                                </span>
                                <span className="flex items-center gap-1">
                                    <Wind className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm">{day.wind}m/s</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default WeatherForecast
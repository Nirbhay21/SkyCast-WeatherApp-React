import { Compass, Gauge, Sunrise, Sunset } from "lucide-react";
import type { WeatherDetail, WeatherDetailsProps } from "../types"
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


const WeatherDetails = ({ data }: WeatherDetailsProps) => {
    const formatTime = (timestamp?: number) => {
        if (!timestamp || isNaN(timestamp)) return "--";
        const date = new Date(timestamp * 1000);
        if (isNaN(date.getTime())) return "--";
        return format(date, "h:mm a");
    }

    const getWindDirection = (degree: number) => {
        const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        const index = Math.round(((degree %= 360) < 0 ? degree + 360 : degree) / 45) % 8;
        return directions[index];
    }

    const details: WeatherDetail[] = [
        {
            title: "Sunrise",
            value: formatTime(data?.sys?.sunrise),
            icon: Sunrise,
            color: "text-orange-500"
        },
        {
            title: "Sunset",
            value: formatTime(data?.sys?.sunset),
            icon: Sunset,
            color: "text-blue-500"
        },
        {
            title: "wind Direction",
            value: `${getWindDirection(data?.wind?.deg)} (${data?.wind?.deg}°)`,
            icon: Compass,
            color: "text-green-500"
        },
        {
            title: "Pressure",
            value: `${data?.main?.pressure} hPa`,
            icon: Gauge,
            color: "text-purple-500",
        }
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Weather Details</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="gap-6 grid sm:grid-cols-2">
                    {details.map((detail) => (
                        <div key={detail.title} className="flex items-center gap-3 p-4 border rounded-lg">
                            <detail.icon className={`w-5 h-5 ${detail.color}`}></detail.icon>
                            <div>
                                <p className="font-medium text-sm leading-none">
                                    {detail.title}
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    {detail.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default WeatherDetails
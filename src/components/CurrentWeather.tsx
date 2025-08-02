import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react";
import type { CurrentWeatherProps } from "../types"
import { Card, CardContent } from "./ui/card";

const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
    const formatTemp = (temp: number) => `${Math.round(temp)}°`;

    return (
        <Card className="">
            <CardContent className="p-6">
                <div className="gap-6 grid md:grid-cols-2">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex items-end gap-1">
                                <h2 className="font-bold text-2xl tracking-tight">{locationName?.name}</h2>
                                {locationName?.state && (
                                    <span className="text-muted-foreground">
                                        , {locationName.state}
                                    </span>
                                )}
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {locationName?.country}
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="font-bold text-7xl tracking-tighter">
                                    {formatTemp(data?.main?.temp)}
                                </p>

                                <div className="space-y-1">
                                    <p className="font-medium text-muted-foreground text-sm">
                                        Feels like {formatTemp(data?.main?.feels_like)}
                                    </p>
                                    <div className="flex gap-2 font-medium text-sm">
                                        <span className="flex items-center gap-1 text-blue-500">
                                            <ArrowDown className="w-3 h-3" />
                                            {formatTemp(data?.main?.temp_min)}
                                        </span>
                                        <span className="flex items-center gap-1 text-red-500">
                                            <ArrowUp className="w-3 h-3" />
                                            {formatTemp(data?.main?.temp_max)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gap-4 grid grid-cols-2">
                            <div className="flex items-center gap-2">
                                <Droplets className="w-4 h-4 text-blue-500" />
                                <div className="space-y-0.5">
                                    <p className="font-medium text-sm">Humidity</p>
                                    <p className="font-medium text-muted-foreground">{data?.main?.humidity}%</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Wind className="w-4 h-4 text-blue-500" />
                                <div className="space-y-0.5">
                                    <p className="font-medium text-sm">Wind Speed</p>
                                    <p className="font-medium text-muted-foreground">{data?.wind?.speed}m/s</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="relative flex justify-center items-center w-full max-w-[200px] aspect-square">
                            <img
                                src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@4x.png`}
                                alt={data?.weather?.[0]?.description}
                                className="w-full h-full object-contain" />
                            <div className="bottom-0 absolute text-center">
                                <p className="font-medium text-sm capitalize">
                                    {data?.weather?.[0]?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CurrentWeather
import { toast } from "sonner";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { FavoriteCityTabletProps } from "../types";
import { useGetWeatherQuery } from "../features/api/weatherApiSlice";
import FavoriteCityTabletSkeleton from "./skeletons/FavoriteCityTabletSkeleton";

const FavoriteCityTablet = ({ id, name, lat, lon, onRemove }: FavoriteCityTabletProps) => {
    const navigate = useNavigate();
    const weather = useGetWeatherQuery({ lat, lon });

    if (weather.isFetching) {
        return (
            <FavoriteCityTabletSkeleton />
        )
    } else if (weather.isSuccess) {
        return (
            <div
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/city/${name}?lat=${lat}&lon=${lon}`)}
                className="relative flex items-center gap-3 bg-card shadow-sm hover:shadow-md p-4 pr-8 border rounded-lg min-w-[260px] h-20 transition-all cursor-pointer">
                <Button
                    variant="ghost"
                    size="icon"
                    className="top-1.5 right-1.5 absolute group-hover:opacity-100 p-0 rounded-full w-6 h-6 hover:text-destructive"
                    onClick={(event) => {
                        event?.stopPropagation();
                        onRemove(id);
                        toast.error(`Removed ${name} from Favorites`);
                    }}>
                    <X className="w-4 h-4" />
                </Button>

                <div className="flex items-center gap-2">
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}.png`}
                        alt={weather?.data?.weather[0]?.description}
                        className="min-w-8 min-h-8"
                    />
                    <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-muted-foreground text-xs">{weather.data.sys.country}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="font-bold text-xl">{Math.round(weather.data.main.temp)}°</p>
                    <p className="text-muted-foreground text-xs capitalize">{weather.data.weather[0].description}</p>
                </div>
            </div>
        )
    }

}

export default FavoriteCityTablet;
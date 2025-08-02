import { Star } from "lucide-react";
import { useFavorite } from "../hooks/use-favorite";
import type { WeatherData } from "../types"
import { Button } from "./ui/button";
import { toast } from "sonner";

interface FavoriteButtonProps {
    data: WeatherData;
}

const FavoriteButton = ({ data }: FavoriteButtonProps) => {
    const { isFavorite, addToFavorite, removeFromFavorite } = useFavorite();
    const isCurrentlyFavorite = isFavorite(String(data.id));

    const handleToggleFavorite = () => {
        if (isCurrentlyFavorite) {
            removeFromFavorite(`${data.coord.lat}-${data.coord.lon}`);
            toast.error(`Removed ${data.name} from Favorites`);
        } else {
            addToFavorite({
                id: String(data.id),
                name: data.name,
                lat: data.coord.lat,
                lon: data.coord.lon,
                country: data.sys.country
            });
            toast.success(`Added ${data.name} to Favorites`);
        }
    }

    return (
        <Button variant={isCurrentlyFavorite ? "default" : "outline"} size={"icon"} onClick={handleToggleFavorite}>
            <Star className={`w-4 h-4 ${isCurrentlyFavorite ? "fill-current" : ""}`} />
        </Button>
    )
}

export default FavoriteButton
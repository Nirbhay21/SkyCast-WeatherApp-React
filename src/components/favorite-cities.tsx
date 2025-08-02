import { useFavorite } from "../hooks/use-favorite"
import FavoriteCityTablet from "./FavoriteCityTablet";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";


const FavoriteCities = () => {
    const { favorites, removeFromFavorite } = useFavorite();

    if (!favorites.length) {
        return null;
    }

    return (
        <>
            <h1 className="font-bold text-xl tracking-tight">Favorites</h1>
            <ScrollArea className="mb-6 pb-5 w-full">
                <div className="flex gap-4 w-max">
                    {favorites.map((city) => (
                        <FavoriteCityTablet
                            id={city.id}
                            lat={city.lat}
                            lon={city.lon}
                            name={city.name}
                            key={city.id}
                            onRemove={removeFromFavorite}
                        />
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </>
    )
}

export default FavoriteCities
import type { FavoriteCity } from "../types";
import { useLocaleStorage } from "./use-locale-storage";

export function useFavorite() {
    const [favorites, setFavorites] = useLocaleStorage<FavoriteCity[]>("favorite-cities", []);

    const addToFavorite = (city: Omit<FavoriteCity, "addedAt">) => {
        const newFavoriteCity: FavoriteCity = {
            ...city,
            addedAt: Date.now()
        };

        const exists = favorites.some((city) => city.id === newFavoriteCity.id);
        if (!exists) {
            const newFavoriteCities = [...favorites, newFavoriteCity].slice(0, 10);
            setFavorites(newFavoriteCities);
        }
    }

    const removeFromFavorite = (cityId: string) => {
        setFavorites((prevFavorites) => (
            prevFavorites.filter((city) => city.id !== cityId)
        ))
    }

    const isFavorite = (cityId: string) => {
        return favorites.some((city) => city.id === cityId);
    }

    return { favorites, addToFavorite, removeFromFavorite, isFavorite };
}
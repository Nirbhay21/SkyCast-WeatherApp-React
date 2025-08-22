import type { FavoriteCity } from "../types";
import { useLocaleStorage } from "./use-locale-storage";

/**
 * Custom hook for managing favorite cities.
 * Stores up to 10 favorite cities in localStorage.
 * Provides methods to add, remove, and check favorites.
 * @returns { favorites, addToFavorite, removeFromFavorite, isFavorite }
 */
export function useFavorite() {
    const [favorites, setFavorites] = useLocaleStorage<FavoriteCity[]>("favorite-cities", []);

    /**
     * Adds a city to favorites if not already present, up to 10 cities.
     * @param city - City data excluding addedAt.
     */
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

    /**
     * Removes a city from favorites by its id.
     * @param cityId - The id of the city to remove.
     */
    const removeFromFavorite = (cityId: string) => {
        setFavorites((prevFavorites) => (
            prevFavorites.filter((city) => city.id !== cityId)
        ))
    }

    /**
     * Checks if a city is in favorites.
     * @param cityId - The id of the city to check.
     * @returns boolean
     */
    const isFavorite = (cityId: string) => {
        return favorites.some((city) => city.id === cityId);
    }

    return { favorites, addToFavorite, removeFromFavorite, isFavorite };
}
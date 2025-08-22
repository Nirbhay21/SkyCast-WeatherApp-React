import type { SearchHistoryItem } from "../types";
import { useLocaleStorage } from "./use-locale-storage";

/**
 * Custom hook for managing city search history.
 * Stores up to 10 recent searches in localStorage.
 * Provides methods to add a search, clear history, and access the history array.
 * @returns { history, addToHistory, clearHistory }
 */
export function useSearchHistory() {
    const [history, setHistory] = useLocaleStorage<SearchHistoryItem[]>("search-history", []);

    /**
     * Adds a new search to the history, removing duplicates and keeping the latest 10.
     * @param search - Search data excluding id and searchedAt.
     */
    const addToHistory = (search: Omit<SearchHistoryItem, "id" | "searchedAt">) => {
        const newSearch: SearchHistoryItem = {
            ...search,
            id: `${search.lat}-${search.lon}-${Date.now()}`,
            searchedAt: Date.now()
        };

        const filteredHistory = history.filter((item) => (
            !(item.lat === newSearch.lat && item.lon === newSearch.lon)
        ))

        const newHistory = [newSearch, ...filteredHistory].slice(0, 10);
        setHistory(newHistory);
    }

    /**
     * Clears the entire search history.
     */
    const clearHistory = () => {
        setHistory([]);
    }

    return { history, addToHistory, clearHistory };
}
import type { SearchHistoryItem } from "../types";
import { useLocaleStorage } from "./use-locale-storage";

export function useSearchHistory() {
    const [history, setHistory] = useLocaleStorage<SearchHistoryItem[]>("search-history", []);

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

    const clearHistory = () => {
        setHistory([]);
    }

    return { history, addToHistory, clearHistory };
}
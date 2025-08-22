import { useEffect, useState } from "react";

/**
 * Custom hook for persisting state to localStorage.
 * Returns a stateful value and a setter, similar to useState, but synced with localStorage.
 * @param key - The localStorage key to use.
 * @param initialValue - The initial value if nothing is stored.
 * @returns [storedValue, setStoredValue]
 */
export function useLocaleStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    })

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(error);
        }
    }, [key, storedValue])

    return [storedValue, setStoredValue] as const;
}

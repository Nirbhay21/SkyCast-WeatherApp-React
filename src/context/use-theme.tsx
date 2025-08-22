import { useContext } from "react";
import { ThemeProviderContext } from "./theme-context";

/**
 * Custom hook to access the theme context.
 * Throws if used outside of ThemeProvider.
 */
export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");

    return context;
};
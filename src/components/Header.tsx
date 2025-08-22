import { Link } from "react-router-dom"
import { useTheme } from "../context/use-theme"
import LogoDark from "../assets/logo-dark.png"
import LogoLight from "../assets/logo-light.png"
import { Moon, Sun } from "lucide-react"
import CitySearch from "./CitySearch"

const Header = () => {
    const { theme, setTheme } = useTheme();
    const isThemeDark: boolean = theme === "dark";

    return (
        <header className="top-0 right-0 left-0 z-[1] sticky bg-background/60 supports-[backdrop-filter]:backdrop-blur-sm py-2 border-b">
            <div className="flex justify-between items-center mx-auto px-4 h-16 container">
                <Link to={"/"}>
                    <img src={(isThemeDark) ? LogoDark : LogoLight} alt="SkyCast Logo" className="h-14" />
                </Link>
                <div className="flex items-center gap-4">
                    <CitySearch /> 
                    <div onClick={() => setTheme((isThemeDark) ? "light" : "dark")} className={`transition-transform duration-500 cursor-pointer ${isThemeDark ? "rotate-180" : "rotate-0"}`}>
                        {(isThemeDark) ? (
                            <Sun className="w-6 h-6 text-yellow-500" />
                        ) : (
                            <Moon className="w-6 h-6 text-blue-500" />
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
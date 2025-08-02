import { CommandSeparator } from "cmdk";
import { Button } from "./ui/button"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"
import { Clock, Loader2, Search, Star, XCircle } from "lucide-react";
import { useState } from "react";
import { useGetLocationsQuery } from "../features/api/geoApiSlice";
import { useNavigate } from "react-router-dom";
import { useSearchHistory } from "../hooks/use-search-history";
import { format } from "date-fns";
import { useFavorite } from "../hooks/use-favorite";

const CitySearch = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    const navigate = useNavigate();

    const locations = useGetLocationsQuery(query, {
        skip: !query || query.length < 3
    });
    const { history, addToHistory, clearHistory } = useSearchHistory();

    const handleSelect = (cityData: string) => {
        const [lat, lon, name, country] = cityData.split("|");

        setOpen(false);
        addToHistory({
            name,
            query,
            country,
            lat: parseFloat(lat),
            lon: parseFloat(lon),
        });
        navigate(`/city/${name}?lat=${lat}&lon=${lon}`);
    };

    const { favorites } = useFavorite();

    return (
        <>
            <Button variant="outline" onClick={() => setOpen(true)} className="relative justify-start sm:pr-12 sm:w-52 md:w-52 lg:w-64 xs:w-44 text-muted-foreground text-sm">
                <Search className="mr-2 w-4 h-4" />
                <span>Search Cities...</span>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search Cities..." value={query} onValueChange={setQuery} />
                <CommandList>
                    {(query.length > 2 && !locations.isFetching && (
                        <CommandEmpty>No Cities found.</CommandEmpty>
                    ))}
                    {favorites.length > 0 && (
                        <CommandGroup heading="Favorites">
                            {favorites.map((location) => (
                                <CommandItem
                                    key={location.id}
                                    value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                                    onSelect={handleSelect}>
                                    <Star className="mr-1.5 w-4 h-4 text-yellow-500" />
                                    <span>{location.name}</span>
                                    {location.state && (
                                        <span className="text-muted-foreground text-sm line-clamp-1">, {location.state}</span>
                                    )}
                                    {location.country && (
                                        <span className="text-muted-foreground text-sm line-clamp-1">, {location.country}</span>
                                    )}
                                    <span className="ml-auto text-muted-foreground">
                                        {format(location.addedAt, "MMM d, h:mm a")}
                                    </span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    )}

                    {history.length > 0 && (
                        <>
                            <CommandSeparator />
                            <CommandGroup>
                                <div className="flex justify-between items-center my-2 px-2">
                                    <p className="text-muted-foreground text-sm">Recent Searches</p>
                                    <Button variant="ghost" size="sm" onClick={clearHistory}>
                                        <XCircle className="max-w-3.5 max-h-3.5" />
                                        <span className="text-xs">Clear</span>
                                    </Button>
                                </div>
                                {history.map((location, index) => (
                                    <CommandItem
                                        key={`${location.lat}-${location.lon}-${index}`}
                                        value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                                        onSelect={handleSelect}>
                                        <Clock className="mr-1.5 w-4 h-4 text-muted-foreground" />
                                        <span>{location.name}</span>
                                        {location.state && (
                                            <span className="text-muted-foreground text-sm line-clamp-1">, {location.state}</span>
                                        )}
                                        {location.country && (
                                            <span className="text-muted-foreground text-sm line-clamp-1">, {location.country}</span>
                                        )}
                                        <span className="ml-auto text-muted-foreground">
                                            {format(location.searchedAt, "MMM d, h:mm a")}
                                        </span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </>
                    )}

                    {locations && locations?.data && locations?.data?.length > 0 && (
                        <>
                            <CommandSeparator />
                            <CommandGroup heading="Suggestions">
                                {locations.isFetching && (
                                    <div className="flex justify-center items-center p-4">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    </div>
                                )}
                                {locations?.data?.map((location) => (
                                    <CommandItem
                                        key={`${location?.lat}-${location?.lon}`}
                                        value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                                        onSelect={handleSelect}
                                    >
                                        <Search className="mr-1.5 w-4 h-4" />
                                        <span>{location.name}</span>
                                        {location.state && (
                                            <span className="text-muted-foreground text-sm line-clamp-1">, {location.state}</span>
                                        )}
                                        {location.country && (
                                            <span className="text-muted-foreground text-sm line-clamp-1">, {location.country}</span>
                                        )}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </>
                    )}
                </CommandList>
            </CommandDialog>
        </>
    )
}

export default CitySearch
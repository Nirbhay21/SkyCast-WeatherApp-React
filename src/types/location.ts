export interface Coordinates {
    lon: number,
    lat: number
}

export interface GeolocationState {
    coordinates: Coordinates | null;
    error: string | null;
    isLoading: boolean;
}

export interface FavoriteCity {
  id: string;
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
  addedAt: number;
}

export interface FavoriteCityTabletProps {
    id: string,
    name: string,
    lat: number,
    lon: number;
    onRemove: (id: string) => void
}
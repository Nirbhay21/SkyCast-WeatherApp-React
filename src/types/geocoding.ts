export interface GeocodingLocalNames {
  [key: string]: string;
}

export interface GeocodingResult {
  name: string;
  local_names: GeocodingLocalNames;
  lat: number;
  lon: number;
  state: string;
  country: string;
}

export type GeocodingApiResponse = GeocodingResult[];

export interface SearchLocationsResults {
  name: string;
  local_names?: GeocodingLocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}
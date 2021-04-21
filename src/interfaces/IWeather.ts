export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Sys {
  pod: string;
}

export interface Rain {
  "3h": number;
}

export interface List {
  dt: number | null;
  main: Main | null;
  weather: Weather[] | null;
  clouds: Clouds | null;
  wind: Wind | null;
  visibility: number | null;
  pop: number | null;
  sys: Sys | null;
  dt_txt: string | null;
  rain: Rain | null;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface RootWeatherObject {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

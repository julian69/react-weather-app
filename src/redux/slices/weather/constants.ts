import { List } from "utils/interfaces/IWeather";

export enum StatusType {
  PENDING = "pending",
  REJECTED = "rejected",
  FULFILLED = "fulfilled",
}

export enum UnitType {
  CELSIUS = "C",
  FAHRENHEIT = "F",
}

export type WeatherState = {
  city: string;
  status: StatusType;
  activeUnit: UnitType;
  activeCard: List | null;
  weatherByDays: List[][];
};

export const initialState: WeatherState = {
  city: "",
  activeCard: null,
  weatherByDays: [],
  status: StatusType.PENDING,
  activeUnit: UnitType.FAHRENHEIT,
};

import { List } from "utils/interfaces/IWeather";

export enum StatusType {
  PENDING = "pending",
  REJECTED = "rejected",
  FULFILLED = "fulfilled",
}

export interface WeatherState {
  status: StatusType;
  city: string;
  activeCard: List | null;
  weatherByDays: List[][];
}

export const initialState: WeatherState = {
  status: StatusType.PENDING,
  city: "",
  activeCard: null,
  weatherByDays: [],
};

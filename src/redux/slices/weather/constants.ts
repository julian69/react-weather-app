import { List } from "utils/interfaces/IWeather";

export enum StatusType {
  PENDING = "pending",
  REJECTED = "rejected",
  FULFILLED = "fulfilled",
}

export interface WeatherState {
  status: StatusType;
  list: List[];
}

export const initialState: WeatherState = {
  status: StatusType.PENDING,
  list: [],
};

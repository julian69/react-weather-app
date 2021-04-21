import { StatusType, UnitType } from "./constants";
import { fetchWeather, setActiveCard, setActiveUnit, setCity } from "./slice";

export {
  StatusType,
  UnitType,
  fetchWeather,
  setActiveCard,
  setActiveUnit,
  setCity,
};
export { default as weatherSlice } from "./slice";

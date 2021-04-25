import { uniq, chunk } from "lodash";
import dayjs from "dayjs";
import { List } from "./interfaces/IWeather";

export const getWeatherListDays = (list: List[]): string[] =>
  uniq(list?.map((item) => dayjs(item.dt_txt!).format("DD")));

export const groupWeatherByDays = (days: string[], list: List[]): List[][] =>
  days.map((day: string) =>
    list?.filter((item) => dayjs(item.dt_txt!).format("DD") === day)
  );

export const getWeatherItemsPerSlide = (weatherByDays: List[][]): List[][] =>
  chunk(weatherByDays, 3).map((itemsPerSlide) =>
    itemsPerSlide.map((item) => item[0])
  );

export const getWeatherByDays = (list: List[]): List[][] => {
  const days = getWeatherListDays(list);
  return groupWeatherByDays(days, list);
};

export const convertKelvinToCelsius = (kelvin: number): number =>
  Math.round((kelvin - 273.15) * 100) / 100;

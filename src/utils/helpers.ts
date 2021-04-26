import { uniq, chunk } from "lodash";
import dayjs from "dayjs";
import { List, IBarChart } from "./interfaces/IWeather";

export const getDay = (date: string): string => dayjs(date).format("DD");

export const getWeatherListDays = (list: List[]): string[] =>
  uniq(list?.map((item) => getDay(item.dt_txt!)));

export const groupWeatherByDays = (days: string[], list: List[]): List[][] =>
  days.map((day: string) =>
    list?.filter((item) => getDay(item.dt_txt!) === day)
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
  Math.round(kelvin - 273.15);

export const getBarChartData = (
  weatherByDays: List[][],
  activeCard: List
): IBarChart[] =>
  weatherByDays
    .filter((day) => day.includes(activeCard!))[0]
    ?.map((list) => ({
      temp: convertKelvinToCelsius(list.main.temp),
      time: dayjs.unix(list.dt).format("hh:mm a"),
    }));

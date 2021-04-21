import { uniq, chunk } from "lodash";
import dayjs from "dayjs";
import { UnitType } from "redux/slices/weather";
import { WEATHER_API, APP_APPID } from "utils/constants/env";
import { List } from "./interfaces/IWeather";
import { IBarChart } from "./interfaces/IBarChart";

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

export const convertKelvinToFahrenheit = (kelvin: number): number =>
  Math.round(((kelvin - 273.15) * 9) / 5 + 32);

export const convertTemperature = (
  unitType: UnitType,
  kelvin: number
): number =>
  unitType === UnitType.CELSIUS
    ? convertKelvinToCelsius(kelvin)
    : convertKelvinToFahrenheit(kelvin);

export const getBarChartData = (
  unitType: UnitType,
  weatherByDays: List[][],
  activeCard: List
): IBarChart[] =>
  weatherByDays
    .filter((day) => day.includes(activeCard!))[0]
    ?.map((list) => ({
      temp: convertTemperature(unitType, list.main.temp),
      time: dayjs.unix(list.dt).format("h a"),
    }));

export const buildWeatherUrl = (city?: string): string => {
  const tempCity = city || "Munich";
  // This is a workaround to mock a city selection feature.
  // In a real life scenario we should get a list of cities via API and
  // use the Geolocation API

  return `${WEATHER_API}?q=${tempCity},de&APPID=${APP_APPID}&cnt=40`;
};

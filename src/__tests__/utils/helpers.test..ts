import {
  getWeatherByDays,
  getWeatherListDays,
  groupWeatherByDays,
  convertKelvinToCelsius,
  getWeatherItemsPerSlide,
  buildWeatherUrl,
  convertTemperature,
  convertKelvinToFahrenheit,
  getBarChartData,
  getDay,
} from "utils/helpers";
import { listFull, listSingle } from "utils/mocks/weather";
import weatherGroupByDays from "utils/mocks/weatherGroupByDays";
import weatherGroupPerSlide from "utils/mocks/weatherGroupPerSlide";
import { UnitType } from "redux/slices/weather";
import { WEATHER_API, APP_APPID } from "utils/constants/env";

const days = ["23", "24", "25", "26", "27", "28"];

describe("helpers", () => {
  it("should return days (DD)", () => {
    const result = getDay(listSingle.list[0].dt_txt);
    expect(result).toEqual("23");
  });

  it("should return an array of days", () => {
    const result = getWeatherListDays(listFull.list);
    expect(result).toEqual(days);
  });

  it("should group weather list by days", () => {
    const result = groupWeatherByDays(days, listFull.list);
    expect(result).toEqual(weatherGroupByDays);
  });

  it("should group weather list items as shown in slider", () => {
    const result = getWeatherItemsPerSlide(weatherGroupByDays);
    expect(result).toEqual(weatherGroupPerSlide);
  });

  it("should return group weather list by days", () => {
    const result = getWeatherByDays(listFull.list);
    expect(result).toEqual(weatherGroupByDays);
  });

  it("should convert value from kelvin to celsius", () => {
    const result = convertKelvinToCelsius(279.46);
    expect(result).toEqual(6);
  });

  it("should convert value from kelvin to Fahrenheit", () => {
    const result = convertKelvinToFahrenheit(279.46);
    expect(result).toEqual(43);
  });

  it("should convert temperature to the given type", () => {
    const result = convertTemperature(UnitType.CELSIUS, 279.46);
    expect(result).toEqual(6);

    const result2 = convertTemperature(UnitType.FAHRENHEIT, 279.46);
    expect(result2).toEqual(43);
  });

  it("should return bar chart data", () => {
    const result = getBarChartData(
      UnitType.CELSIUS,
      getWeatherByDays(listSingle.list),
      listSingle.list[0]
    );
    expect(result).toEqual([{ temp: 10, time: "11 am" }]);
  });

  it("should build the weather URL", () => {
    const result = buildWeatherUrl("Munich");
    expect(result).toEqual(
      `${WEATHER_API}?q=Munich,de&APPID=${APP_APPID}&cnt=40`
    );
  });
});

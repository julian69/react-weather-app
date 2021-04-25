import {
  getWeatherByDays,
  getWeatherListDays,
  groupWeatherByDays,
  convertKelvinToCelsius,
  getWeatherItemsPerSlide,
} from "utils/helpers";
import { listFull } from "utils/mocks/weather";
import weatherGroupByDays from "utils/mocks/weatherGroupByDays";
import weatherGroupPerSlide from "utils/mocks/weatherGroupPerSlide";

const days = ["23", "24", "25", "26", "27", "28"];

describe("helpers", () => {
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
    expect(result).toEqual(6.31);
  });
});

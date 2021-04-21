import { listSingle } from "utils/mocks/weather";
import { getWeatherItemsPerSlide, getWeatherByDays } from "utils/helpers";
import { initialState } from "redux/slices/weather/constants";
import {
  fetchWeather,
  StatusType,
  UnitType,
  weatherSlice,
  setCity,
  setActiveUnit,
  setActiveCard,
} from "redux/slices/weather";

describe("Weather slice", () => {
  it("should set city", () => {
    const state = weatherSlice(initialState, setCity("Test"));
    expect(state).toEqual({
      ...initialState,
      city: "Test",
    });
  });

  it("should set activeUnit", () => {
    const state = weatherSlice(initialState, setActiveUnit(UnitType.CELSIUS));
    expect(state).toEqual({
      ...initialState,
      activeUnit: UnitType.CELSIUS,
    });
  });

  it("should set activeCard", () => {
    const state = weatherSlice(initialState, setActiveCard(listSingle.list[0]));
    expect(state).toEqual({
      ...initialState,
      activeCard: listSingle.list[0],
    });
  });

  it("should set status as pending", () => {
    const action = { type: fetchWeather.pending.type };
    const state = weatherSlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      status: StatusType.PENDING,
    });
  });

  it("should set status as fulfilled and populate weatherList", () => {
    const action = { type: fetchWeather.fulfilled.type, payload: listSingle };
    const state = weatherSlice(initialState, action);
    const weatherByDays = getWeatherItemsPerSlide(
      getWeatherByDays(listSingle.list)
    );
    expect(state).toEqual({
      weatherByDays,
      status: StatusType.FULFILLED,
      activeCard: listSingle.list[0],
      city: "Munich",
      activeUnit: UnitType.FAHRENHEIT,
    });
  });

  it("should set status as rejected", () => {
    const action = {
      type: fetchWeather.rejected.type,
      payload: { error: "some error" },
    };
    const state = weatherSlice(initialState, action);
    expect(state).toEqual({ ...initialState, status: StatusType.REJECTED });
  });
});

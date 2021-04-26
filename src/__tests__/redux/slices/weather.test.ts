import { listSingle } from "utils/mocks/weather";
import { getWeatherItemsPerSlide, getWeatherByDays } from "utils/helpers";
import { initialState } from "redux/slices/weather/constants";
import { fetchWeather, StatusType, weatherSlice } from "redux/slices/weather";

describe("Weather slice", () => {
  it("should set status as pending", () => {
    const action = { type: fetchWeather.pending.type };
    const state = weatherSlice(initialState, action);
    expect(state).toEqual({
      weatherByDays: [],
      status: StatusType.PENDING,
      activeCard: null,
      city: "",
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

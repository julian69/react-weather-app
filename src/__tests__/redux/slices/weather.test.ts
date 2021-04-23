import weather from "utils/mocks/weather";
import { initialState } from "redux/slices/weather/constants";
import { fetchWeather, StatusType, weatherSlice } from "redux/slices/weather";

describe("exampleSlice", () => {
  describe("reducers", () => {
    it("should set status as pending", () => {
      const action = { type: fetchWeather.pending.type };
      const state = weatherSlice(initialState, action);
      expect(state).toEqual({ list: [], status: StatusType.PENDING });
    });

    it("should set status as fulfilled", () => {
      const action = { type: fetchWeather.fulfilled.type, payload: weather };
      const state = weatherSlice(initialState, action);
      expect(state).toEqual({
        list: weather.list,
        status: StatusType.FULFILLED,
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
});

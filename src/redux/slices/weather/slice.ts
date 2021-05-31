/* eslint-disable no-param-reassign */
import fetchWeatherData from "utils/api/weather";
import { getWeatherByDays } from "utils/helpers";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { List } from "utils/interfaces/IWeather";
import { initialState, StatusType, UnitType } from "./constants";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city?: string) => {
    const response = await fetchWeatherData(city).then((data: any) => data);
    return response;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setActiveCard: (state, action: PayloadAction<List>) => {
      state.activeCard = action.payload;
    },
    setActiveUnit: (state, action: PayloadAction<UnitType>) => {
      state.activeUnit = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = StatusType.PENDING;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      const weatherByDays = getWeatherByDays(action.payload?.list);

      state.activeCard = action.payload?.list[0];
      state.city = action.payload?.city.name;
      state.weatherByDays = weatherByDays;
      state.status = StatusType.FULFILLED;
    });
    builder.addCase(fetchWeather.rejected, (state) => {
      state.city = "";
      state.weatherByDays = [];
      state.status = StatusType.REJECTED;
    });
  },
});

export const { setActiveCard, setActiveUnit, setCity } = weatherSlice.actions;
export default weatherSlice.reducer;

/* eslint-disable no-param-reassign */
import fetchWeatherData from "utils/api/weather";
import { getWeatherByDays } from "utils/helpers";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { List } from "utils/interfaces/IWeather";
import { initialState, StatusType } from "./constants";

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async () =>
  fetchWeatherData()
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setActiveCard: (state, action: PayloadAction<List>) => {
      state.activeCard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = StatusType.PENDING;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      const weatherByDays = getWeatherByDays(action.payload?.list);

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

export const { setActiveCard } = weatherSlice.actions;
export default weatherSlice.reducer;

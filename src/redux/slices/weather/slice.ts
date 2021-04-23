/* eslint-disable no-param-reassign */
import { List } from "utils/interfaces/IWeather";
import type { RootState } from "redux/store";
import fetchWeatherData from "utils/api/weather";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState, StatusType } from "./constants";

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async () =>
  fetchWeatherData()
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    // set: (state, action: PayloadAction<List[]>) => {
    //   state.list = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = StatusType.PENDING;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.list = action.payload?.list;
      state.status = StatusType.FULFILLED;
    });
    builder.addCase(fetchWeather.rejected, (state) => {
      state.list = [];
      state.status = StatusType.REJECTED;
    });
  },
});

export const selectWeather = (state: RootState): List[] => state.weather.list;
export const selectLoadingStatus = (state: RootState): StatusType =>
  state.weather.status;

export default weatherSlice.reducer;

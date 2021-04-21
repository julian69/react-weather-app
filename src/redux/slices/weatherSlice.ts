/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "redux/store";
import { List } from "interfaces/IWeather";

interface WeatherState {
  list: List[];
}

const initialState: WeatherState = {
  list: [
    // {
    //   dt: null,
    //   main: null,
    //   weather: null,
    //   clouds: null,
    //   wind: null,
    //   visibility: null,
    //   pop: null,
    //   sys: null,
    //   dt_txt: null,
    //   rain: null,
    // },
  ],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<List[]>) => {
      state.list = action.payload;
    },
  },
});

export const { set } = weatherSlice.actions;
export const selectWeather = (state: RootState): List[] => state.weather.list;
export default weatherSlice.reducer;

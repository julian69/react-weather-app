import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "redux/slices/weatherSlice";

const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

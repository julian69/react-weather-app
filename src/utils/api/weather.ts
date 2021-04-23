import { RootWeatherObject } from "utils/interfaces/IWeather";

export const WEATHER_API: string = process.env.REACT_APP_WEATHER_API || "";
const fetchWeatherData = async (): Promise<RootWeatherObject> => {
  try {
    const response = await fetch(WEATHER_API);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Something went wrong");
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchWeatherData;

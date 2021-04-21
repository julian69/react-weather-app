import axios from "axios";
import { RootWeatherObject } from "interfaces/IWeather";

export const WEATHER_API: string = process.env.REACT_APP_WEATHER_API || "";
const fetchWeather = async (): Promise<RootWeatherObject> => {
  try {
    const response = await axios.get(WEATHER_API);
    return response?.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return error;
  }
};
export default fetchWeather;

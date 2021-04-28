import { RootWeatherObject } from "utils/interfaces/IWeather";
import { buildWeatherUrl } from "utils/helpers";

const fetchWeatherData = async (city?: string): Promise<RootWeatherObject> => {
  try {
    const url = buildWeatherUrl(city);
    const response = await fetch(url);

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

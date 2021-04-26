import { fetchWeather, setActiveCard } from "redux/slices/weather";
import { getWeatherItemsPerSlide } from "utils/helpers";
import { useAppSelector, useAppDispatch } from "hooks/useReduxHooks";
import { List } from "utils/interfaces/IWeather";
import { getBarChartData } from "../utils/helpers";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useWeather = () => {
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weather);

  return {
    city: weather.city,
    status: weather.status,
    getActiveCard: weather.activeCard,
    getWeather: () => dispatch(fetchWeather()),
    weatherItemsPerSlide: getWeatherItemsPerSlide(weather.weatherByDays),
    setActiveCard: (activeCard: List) => dispatch(setActiveCard(activeCard)),
    barChartData: getBarChartData(weather.weatherByDays, weather.activeCard!),
  };
};

export default useWeather;

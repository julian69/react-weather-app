import { getWeatherItemsPerSlide, getBarChartData } from "utils/helpers";
import { useAppSelector, useAppDispatch } from "hooks/useReduxHooks";
import { List } from "utils/interfaces/IWeather";
import {
  UnitType,
  fetchWeather,
  setActiveCard,
  setActiveUnit,
  setCity,
} from "redux/slices/weather";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useWeather = () => {
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weather);

  return {
    city: weather.city,
    status: weather.status,
    activeUnit: weather.activeUnit,
    activeCard: weather.activeCard,
    getWeather: () => dispatch(fetchWeather()),
    weatherItemsPerSlide: (amount: number) =>
      getWeatherItemsPerSlide(amount, weather.weatherByDays),
    setActiveCard: (activeCard: List) => dispatch(setActiveCard(activeCard)),
    setCity: (city: string) => {
      dispatch(setCity(city));
      dispatch(fetchWeather(city));
    },
    barChartData: getBarChartData(
      weather.activeUnit,
      weather.weatherByDays,
      weather.activeCard!
    ),
    setActiveUnit: (activeUnit: UnitType) =>
      dispatch(setActiveUnit(activeUnit)),
  };
};

export default useWeather;

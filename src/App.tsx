import React, { useEffect } from "react";
import Load from "pages/Load";
import Weather from "pages/Weather";
import fetchWeather from "utils/services/weather";

// import { RootState } from "redux/store/index";
import { set } from "redux/slices/weatherSlice";
import { useAppDispatch } from "hooks/";

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  // const list = useAppSelector((state: RootState) => state.weather.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getWeather = async () => {
      const weather = await fetchWeather();
      dispatch(set(weather?.list));
      setLoading(false);
    };
    getWeather();
  }, [dispatch]);

  return <div className="App">{loading ? <Load /> : <Weather />}</div>;
};

export default App;

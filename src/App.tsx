import Load from "pages/Load";
import Weather from "pages/Weather";
import NotFound from "pages/NotFound";
import React, { useEffect } from "react";
import { RootState } from "redux/store/index";
import { useAppDispatch, useAppSelector } from "hooks/";
import { fetchWeather, StatusType } from "redux/slices/weather";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector(
    (state: RootState) => state.weather.status
  );

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  const renderContent = (): JSX.Element | null => {
    const { PENDING, FULFILLED, REJECTED } = StatusType;

    if (loadingStatus === PENDING) return <Load />;
    if (loadingStatus === FULFILLED) return <Weather />;
    if (loadingStatus === REJECTED) return <NotFound />;

    return null;
  };

  return <div className="App">{renderContent()}</div>;
};

export default App;

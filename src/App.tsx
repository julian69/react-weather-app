import Load from "pages/Load";
import Weather from "pages/Weather";
import NotFound from "pages/NotFound";
import Header from "components/Header";
import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { StatusType } from "redux/slices/weather";
import useWeather from "hooks/useWeather";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const App: React.FC = () => {
  const { status, getWeather } = useWeather();
  const matches = useMediaQuery("(min-width:769px)");

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = (): JSX.Element => {
    const { PENDING, FULFILLED, REJECTED } = StatusType;

    if (status === PENDING) return <Load />;
    if (status === FULFILLED) return <Weather />;
    if (status === REJECTED) return <NotFound />;

    return <></>;
  };

  return (
    <>
      <Header />
      <Container className="App" fixed style={{ paddingTop: matches ? 0 : 50 }}>
        {renderContent()}
      </Container>
    </>
  );
};

export default App;

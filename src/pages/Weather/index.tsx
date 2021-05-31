import React, { useState } from "react";
import Slideshow from "components/Slideshow";
import BarChart from "components/BarChart";
import CityPicker from "components/CityPicker";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import cn from "classnames";
import breakPoint from "utils/constants/breakPoint";
import { Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import useWeather from "hooks/useWeather";
import useStyles from "./styles";

const Weather: React.FC = () => {
  const classes = useStyles();
  const { getWeather } = useWeather();
  const matches = useMediaQuery(breakPoint.medium);
  const [error, setError] = useState<string | null>(null);

  return (
    <section
      className={cn(classes.weatherPage, {
        [classes.mobile]: !matches,
      })}
      data-testid="weather"
    >
      <div className={classes.cityPicker}>
        {error && <Alert severity="error">{error}</Alert>}
        <CityPicker />
        <Button
          variant="contained"
          onClick={() => {
            getWeather().then((response: any) => {
              if (!response.ok) {
                console.log(response);
                setError(response.message);
              }
            });
          }}
        >
          Refresh
        </Button>
      </div>
      <Slideshow className={classes.slideShow} />
      <BarChart />
    </section>
  );
};

export default Weather;

import React from "react";
import Slideshow from "components/Slideshow";
import BarChart from "components/BarChart";
import useWeather from "hooks/useWeather";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const Weather: React.FC = () => {
  const classes = useStyles();
  const { city } = useWeather();

  return (
    <section data-testid="weather">
      <Typography variant="h2">{city}</Typography>
      <Slideshow className={classes.slideShow} />
      <BarChart />
    </section>
  );
};

export default Weather;

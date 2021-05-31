import React from "react";
import Slideshow from "components/Slideshow";
import BarChart from "components/BarChart";
import CityPicker from "components/CityPicker";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import cn from "classnames";
import breakPoint from "utils/constants/breakPoint";
import useStyles from "./styles";

const Weather: React.FC = () => {
  const classes = useStyles();
  const matches = useMediaQuery(breakPoint.medium);

  return (
    <section
      className={cn(classes.weatherPage, {
        [classes.mobile]: !matches,
      })}
      data-testid="weather"
    >
      <div className={classes.cityPicker}>
        <CityPicker />
      </div>
      <Slideshow className={classes.slideShow} />
      <BarChart />
    </section>
  );
};

export default Weather;

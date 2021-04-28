import React from "react";
import { Box } from "@material-ui/core";
import WeatherCard from "components/WeatherCard";
import { List } from "utils/interfaces/IWeather";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import breakPoint from "utils/constants/breakPoint";
import useStyles from "./styles";

interface Props {
  slide: List[];
  shouldCenterContent?: boolean;
}

const Slide: React.FC<Props> = ({ slide, shouldCenterContent }) => {
  const classes = useStyles();
  const matches = useMediaQuery(breakPoint);

  return (
    <Box
      data-testid="slide"
      display="flex"
      height="100%"
      flexDirection={matches ? "row" : "column"}
      alignItems="center"
      justifyContent={shouldCenterContent ? "center" : "space-between"}
    >
      {slide.map((card) => (
        <WeatherCard
          className={shouldCenterContent ? classes.centeredCard : ""}
          data={card}
          key={card.dt}
        />
      ))}
    </Box>
  );
};

export default Slide;

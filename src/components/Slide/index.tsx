import React from "react";
import { Box } from "@material-ui/core";
import WeatherCard from "components/WeatherCard";
import { List } from "utils/interfaces/IWeather";

interface Props {
  slide: List[];
}

const Slide: React.FC<Props> = ({ slide }) => {
  return (
    <Box
      data-testid="slide"
      display="flex"
      height="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      {slide.map((card) => (
        <WeatherCard data={card} key={card.dt} />
      ))}
    </Box>
  );
};

export default Slide;

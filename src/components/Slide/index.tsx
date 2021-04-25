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
      display="flex"
      height="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      {slide.map((card) => (
        <WeatherCard data={card} />
      ))}
    </Box>
  );
};

export default Slide;

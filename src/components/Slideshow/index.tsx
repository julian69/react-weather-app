import React from "react";
import Slide from "components/Slide";
import useWeather from "hooks/useWeather";
import Carousel from "react-material-ui-carousel";
import cn from "classnames";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import breakPoint from "utils/constants/breakPoint";
import useStyles from "./styles";

interface Props {
  className?: string;
}

const Slideshow: React.FC<Props> = ({ className }) => {
  const classes = useStyles();
  const { weatherItemsPerSlide } = useWeather();
  const matches = useMediaQuery(breakPoint.small);
  const amountOfCards = !matches ? 1 : 3;

  return (
    <Carousel
      className={cn(className, classes.carousel)}
      autoPlay={false}
      animation="slide"
      indicators={false}
      cycleNavigation={false}
      navButtonsAlwaysVisible
      navButtonsWrapperProps={{
        className: "buttons-wrapper",
        style: {
          margin: "auto -10px",
        },
      }}
    >
      {weatherItemsPerSlide(amountOfCards).map((slide) => (
        <Slide
          key={slide[0].dt}
          slide={slide}
          shouldCenterContent={slide.length < 3}
        />
      ))}
    </Carousel>
  );
};

export default Slideshow;

import React from "react";
import Slide from "components/Slide";
import useWeather from "hooks/useWeather";
import Carousel from "react-material-ui-carousel";
import cn from "classnames";
import useStyles from "./styles";

interface Props {
  className?: string;
}

const Slideshow: React.FC<Props> = ({ className }) => {
  const classes = useStyles();
  const { weatherItemsPerSlide } = useWeather();

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
      {weatherItemsPerSlide.map((slide) => (
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

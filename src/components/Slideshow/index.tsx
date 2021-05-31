import React, { useState } from "react";
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
  const [activeSlide, setActiveSlide] = useState(0);

  const { weatherItemsPerSlide, setActiveCard } = useWeather();
  const matches = useMediaQuery(breakPoint.small);
  const amountOfCards = !matches ? 1 : 3;
  const slides = weatherItemsPerSlide(amountOfCards);

  const onSlideChange = (isNext: boolean) => {
    const newActiveSlide = isNext ? activeSlide + 1 : activeSlide - 1;
    setActiveSlide(newActiveSlide);
    setActiveCard(slides[newActiveSlide][0]);
  };

  return (
    <Carousel
      className={cn(className, classes.carousel)}
      autoPlay={false}
      animation="slide"
      indicators={false}
      cycleNavigation={false}
      navButtonsAlwaysVisible
      next={() => onSlideChange(true)}
      prev={() => onSlideChange(false)}
      navButtonsWrapperProps={{
        className: "buttons-wrapper",
        style: {
          margin: "auto -10px",
        },
      }}
    >
      {slides.map((slide) => (
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

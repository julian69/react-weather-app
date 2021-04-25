import React from "react";
import Slide from "components/Slide";
import useWeather from "hooks/useWeather";
import Carousel from "react-material-ui-carousel";

interface Props {
  className?: string;
}

const Slideshow: React.FC<Props> = ({ className }) => {
  const { weatherItemsPerSlide } = useWeather();

  return (
    <Carousel
      className={className}
      autoPlay={false}
      animation="slide"
      indicators={false}
      cycleNavigation={false}
      navButtonsAlwaysVisible
      next={(next: string, active: string) =>
        // eslint-disable-next-line no-console
        console.log(`we left ${active}, and are now at ${next}`)
      }
      prev={(prev: string, active: string) =>
        // eslint-disable-next-line no-console
        console.log(`we left ${active}, and are now at ${prev}`)
      }
    >
      {weatherItemsPerSlide.map((slide, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Slide key={index} slide={slide} />
      ))}
    </Carousel>
  );
};

export default Slideshow;

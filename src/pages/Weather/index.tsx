import React from "react";
import Slideshow from "components/Slideshow";
import BarChart from "components/BarChart";
import useWeather from "hooks/useWeather";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useStyles from "./styles";

const Weather: React.FC = () => {
  const classes = useStyles();
  const { city, setCity } = useWeather();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value as string);
  };

  return (
    <section data-testid="weather">
      <FormControl variant="outlined">
        <InputLabel htmlFor="city-select">City</InputLabel>
        <Select
          native
          value={city}
          label="City"
          onChange={handleChange}
          inputProps={{
            name: "city",
            id: "city-select",
          }}
        >
          <option data-testid="select-option" value="Berlin">
            Berlin
          </option>
          <option data-testid="select-option" value="Munich">
            Munich
          </option>
          <option data-testid="select-option" value="Frankfurt">
            Frankfurt
          </option>
          <option data-testid="select-option" value="Hamburg">
            Hamburg
          </option>
        </Select>
      </FormControl>
      <Slideshow className={classes.slideShow} />
      <BarChart />
    </section>
  );
};

export default Weather;

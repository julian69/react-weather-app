import React from "react";
import useWeather from "hooks/useWeather";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import cities from "utils/constants/cities";

interface Props {
  className?: string;
}

const Weather: React.FC<Props> = ({ className }) => {
  const { city, setCity } = useWeather();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value as string);
  };

  return (
    <FormControl variant="outlined" className={className}>
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
        {cities.map((cityName: string) => (
          <option key={cityName} data-testid="select-option" value={cityName}>
            {cityName}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default Weather;

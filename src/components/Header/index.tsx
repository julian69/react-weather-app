import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useWeather from "hooks/useWeather";
import { UnitType } from "redux/slices/weather";
import Degree from "components/Degree";
import useStyles from "./styles";

const Header: React.FC = () => {
  const classes = useStyles();
  const { setActiveUnit, activeUnit } = useWeather();

  const { CELSIUS, FAHRENHEIT } = UnitType;
  const isCelsius = activeUnit === CELSIUS;

  const handleOnChange = () => {
    const newValue = isCelsius ? FAHRENHEIT : CELSIUS;
    setActiveUnit(newValue);
  };

  return (
    <div
      className={classes.root}
      data-testid={isCelsius ? "c-active" : "f-active"}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Weather App
          </Typography>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>
                <Degree value={CELSIUS} />
              </Grid>
              <Grid item>
                <Switch
                  data-testid="switch"
                  color="default"
                  checked={!isCelsius}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item>
                <Degree value={FAHRENHEIT} />
              </Grid>
            </Grid>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

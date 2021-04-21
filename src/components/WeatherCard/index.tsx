import React from "react";
import dayjs from "dayjs";
import { isEqual } from "lodash";
import Degree from "components/Degree";
import Card from "@material-ui/core/Card";
import useWeather from "hooks/useWeather";
import { List } from "utils/interfaces/IWeather";
import { convertTemperature } from "utils/helpers";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import { WEATHER_ICON } from "utils/constants/env";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import cn from "classnames";
import breakPoint from "utils/constants/breakPoint";
import useStyles from "./styles";
import Text from "./Text";

interface Props {
  data: List;
  className?: string;
}

const WeatherCard: React.FC<Props> = ({ data, className }) => {
  const classes = useStyles();
  const matches = useMediaQuery(breakPoint);
  const { setActiveCard, activeCard, activeUnit } = useWeather();

  const { main, weather, dt, wind, rain } = data;
  const isActiveCard = isEqual(activeCard, data);
  const rainText = rain ? `${rain["3h"]}%` : "-";

  return (
    <Card
      className={cn(classes.card, className, {
        [classes.mobile]: !matches,
      })}
      raised={isActiveCard}
    >
      <CardActionArea onClick={() => setActiveCard(data)}>
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant={!matches ? "h2" : "h3"} component="span">
                <Degree value={convertTemperature(activeUnit, main?.temp)} />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                className={classes.media}
                component="img"
                alt="Weather icon"
                image={`${WEATHER_ICON}${weather[0]?.icon}@2x.png`}
                title="Weather icon"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                className={classes.text}
                color="textPrimary"
                component="span"
              >
                {dayjs.unix(dt).format("D	MMM YYYY")}
              </Typography>
              <Typography noWrap className={classes.text} color="textSecondary">
                {`${weather[0]?.main}, ${weather[0]?.description}`}
              </Typography>
            </Grid>
            {matches && (
              <>
                <Text
                  value={`L: ${convertTemperature(
                    activeUnit,
                    main?.temp_min
                  )} H: ${convertTemperature(activeUnit, main?.temp_max)}`}
                />
                <Text value={`Humidity: ${main?.humidity}%`} />
                <Text value={`Wind: ${wind.speed} km/h`} />
                <Text value={`Precipitation: ${rainText}`} />
              </>
            )}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WeatherCard;

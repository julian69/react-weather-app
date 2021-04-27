import React from "react";
import dayjs from "dayjs";
import { isEqual } from "lodash";
import Degree from "components/Degree";
import Card from "@material-ui/core/Card";
import useWeather from "hooks/useWeather";
import Avatar from "@material-ui/core/Avatar";
import { List } from "utils/interfaces/IWeather";
import { convertTemperature } from "utils/helpers";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import useStyles from "./styles";

interface Props {
  data: List;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  const { setActiveCard, getActiveCard, activeUnit } = useWeather();

  const { main, weather, dt } = data;
  const isActiveCard = isEqual(getActiveCard, data);

  return (
    <Card className={classes.root} raised={isActiveCard}>
      <CardActionArea onClick={() => setActiveCard(data)}>
        <CardContent>
          <Typography variant="h3">
            <Degree value={convertTemperature(activeUnit, main?.temp)} />
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            {`L: ${convertTemperature(
              activeUnit,
              main?.temp_min
            )} H: ${convertTemperature(activeUnit, main?.temp_max)}`}
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            {`${weather[0]?.main}, ${weather[0]?.description}`}
          </Typography>

          <Typography variant="body2" component="p">
            {dt && dayjs.unix(dt).format("D	MMM YYYY")}
          </Typography>

          <Avatar
            alt="Weather"
            src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WeatherCard;

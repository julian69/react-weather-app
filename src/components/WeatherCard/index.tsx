import React from "react";
import dayjs from "dayjs";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import { List } from "utils/interfaces/IWeather";
import Typography from "@material-ui/core/Typography";
import { convertKelvinToCelsius } from "utils/helpers";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import useWeather from "hooks/useWeather";
import { isEqual } from "lodash";
import useStyles from "./styles";

interface Props {
  data: List;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  const { setActiveCard, getActiveCard } = useWeather();

  const { main, weather, dt } = data;
  const isActiveCard = isEqual(getActiveCard, data);

  return (
    <Card className={classes.root} raised={isActiveCard}>
      <CardActionArea onClick={() => setActiveCard(data)}>
        <CardContent>
          <Typography variant="h3">
            {convertKelvinToCelsius(main?.temp)}
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            {`L: ${convertKelvinToCelsius(
              main?.temp_min
            )} H: ${convertKelvinToCelsius(main?.temp_max)}`}
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            {`${weather[0]?.main}, ${weather[0]?.description}`}
          </Typography>

          <Typography variant="body2" component="p">
            {dt && dayjs.unix(dt).format("D	MMM YYYY")}
          </Typography>

          <Avatar
            alt="Weather"
            src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WeatherCard;

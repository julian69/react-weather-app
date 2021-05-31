import React from "react";
import Paper from "@material-ui/core/Paper";
import { Animation, EventTracker } from "@devexpress/dx-react-chart";
import useWeather from "hooks/useWeather";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import indigo from "@material-ui/core/colors/indigo";

const BarChart: React.FC = () => {
  const { barChartData } = useWeather();
  const barWidth = barChartData?.length <= 3 ? 0.2 : 1;

  return (
    <Paper>
      <Chart data={barChartData}>
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries
          valueField="temp"
          argumentField="time"
          barWidth={barWidth}
          color={indigo[500]}
        />
        <Title text="Rest of the day" />
        <EventTracker />
        <Tooltip />
        <Animation />
      </Chart>
    </Paper>
  );
};

export default BarChart;

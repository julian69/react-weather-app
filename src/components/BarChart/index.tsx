import React from "react";
import Paper from "@material-ui/core/Paper";
import { Animation } from "@devexpress/dx-react-chart";
import useWeather from "hooks/useWeather";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

const BarChart: React.FC = () => {
  const { barChartData } = useWeather();
  const hasManyBars = barChartData?.length > 1;
  const barWidth = hasManyBars ? 1 : 0.1;

  return (
    <Paper>
      <Chart data={barChartData}>
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries valueField="temp" argumentField="time" barWidth={barWidth} />
        <Title text="Rest of the day" />
        <Animation />
      </Chart>
    </Paper>
  );
};

export default BarChart;

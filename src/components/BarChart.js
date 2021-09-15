import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries
} from "@devexpress/dx-react-chart-material-ui";


const useStyles = makeStyles((theme) => ({
  hor: {
    width: 800
  }
}))

function BarChart(props) {
  const probas = props.probas;
  const classes = useStyles();

  const displayData = () => {
    console.log(data)
  }

  // const data = probas.map((proba, key) => {
  //   return ({ argument: key.toString(), value: proba });
  // })
  const data = [
    { argument: '0', value: probas[0] },
    { argument: '1', value: probas[1] },
    { argument: '2', value: probas[2] }
  ]

  return (
    <Paper className={classes.hor}>
      <Chart
        data={data}
      >
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries valueField="value" argumentField="argument" />
      </Chart>
      <button onClick={displayData}>Display data</button>
    </Paper>
  )
}

export default BarChart;

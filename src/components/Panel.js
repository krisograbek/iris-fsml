import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "../fonts.css";
import { mapIris, mapIrisColor } from '../helpers';
import Bars from './Bars';
import Sliders from './Sliders';

const useStyles = makeStyles(() => ({
  root: {
    padding: '30px',
  }
}));

function Panel() {
  const classes = useStyles();
  const [currentValue, setCurrentValue] = useState({
    "dot": [],
    "probas": []
  })
  // create states with default values
  const [length, setLength] = useState(2.8)
  const [width, setWidth] = useState(2.8)

  useEffect(() => {
    fetch(`/api/predict/${length}/${width}`).then(res => res.json()).then(data => {
      setCurrentValue(data)
    })
  }, [length, width])

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={3}
      className={classes.root}
    >
      <Grid item>
        <Bars probas={currentValue.probas} />
      </Grid>
      <Grid item>
        <h2>
          Prediction: <span style={{
            color: `${mapIrisColor[currentValue.prediction]}`
          }}>
            {mapIris[currentValue.prediction]}
          </span>
        </h2>
      </Grid>
      <Grid item>
        <Sliders
          length={length}
          width={width}
          updateLength={setLength}
          updateWidth={setWidth}
        />
      </Grid>
    </Grid>
  )
}

export default Panel

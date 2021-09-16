import React from 'react'
import { useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Sliders from './Sliders';
import TextPanel from './TextPanel';
import Bars from './Bars';
import { mapIris, mapIrisColor } from '../helpers';
import "../fonts.css"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '30px',
  },
  vertical: {
    height: 100,
  },
  horizontal: {
    width: 300,
    padding: '12px'
  },
}));

function Panel() {
  const classes = useStyles();
  const [currentValue, setCurrentValue] = useState({
    "dot": [],
    "probas": []
  })
  const [length, setLength] = useState(2.1)
  const [width, setWidth] = useState(1.1)

  useEffect(() => {
    fetch(`/api/predict/${length}/${width}`).then(res => res.json()).then(data => {
      setCurrentValue(data)
    })
  }, [])

  const updatePredictions = () => {
    fetch(`/api/predict/${length}/${width}`).then(res => res.json()).then(data => {
      setCurrentValue(data)
    })
  }

  const updateLength = (val) => {
    setLength(val);
    updatePredictions();
  }

  const updateWidth = (val) => {
    setWidth(val);
    updatePredictions();
  }
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
        {/* <div className="smallFont">Petal Width</div> */}
        <Sliders
          length={length}
          width={width}
          updateLength={updateLength}
          updateWidth={updateWidth}
        />
      </Grid>
      {/* <Grid item>
        <TextPanel
          length={length}
          width={width}
        />
      </Grid> */}
    </Grid>
  )
}

export default Panel

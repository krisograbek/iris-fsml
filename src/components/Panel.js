import React from 'react'
import { useEffect, useState } from 'react';
import { Grid, makeStyles, Slider } from '@material-ui/core';
import Sliders from './Sliders';

const mapIris = {
  0: "Iris Setosa",
  1: "Iris Versicolor",
  2: "Iris Virginica"
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
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

  function valuetext(value) {
    return `${value}cm`;
  }

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
      containter
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      className={classes.root}
    >
      <Grid item>
        <Sliders
          length={length}
          width={width}
          updateLength={updateLength}
          updateWidth={updateWidth}
        />
      </Grid>
      <Grid item>
        <h6>Petal length: {length}</h6>
        <h6>Petal width: {width}</h6>
      </Grid>
      <Grid item>
        {
          currentValue.probas.map((val, i) => {
            return (
              <div key={i}>
                {mapIris[i]}: {val.toFixed(3)}%
              </div>
            )
          })
        }
      </Grid>
      <Grid item>
        <h2>Prediction: {mapIris[currentValue.prediction]}</h2>
      </Grid>
    </Grid>
  )
}

export default Panel

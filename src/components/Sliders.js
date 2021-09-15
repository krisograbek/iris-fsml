import { Grid, makeStyles, Slider } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
  vertical: {
    height: 100,
  },
  horizontal: {
    width: 300,
    padding: '12px'
  },
}));
function Sliders(props) {
  const { length, width, updateLength, updateWidth } = props;
  const classes = useStyles();

  function valuetext(value) {
    return `${value}cm`;
  }

  return (
    <Grid>
      <Grid item className={classes.vertical}>
        <Slider
          orientation="vertical"
          valueLabelDisplay="on"
          min={0.1}
          max={4.0}
          step={0.1}
          value={width}
          onChange={(e, val) => updateWidth(val)}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          valueLabelDisplay="auto"
        />
      </Grid>
      <Grid item className={classes.horizontal}>
        <Slider
          valueLabelDisplay="on"
          min={0.1}
          max={10.0}
          step={0.1}
          value={length}
          onChange={(e, val) => updateLength(val)}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          valueLabelDisplay="auto"
        // marks={marks}
        />
      </Grid>
    </Grid>
  )
}

export default Sliders

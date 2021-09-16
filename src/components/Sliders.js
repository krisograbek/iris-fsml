import React, { useEffect, useRef } from 'react'
import { Grid, makeStyles, Slider } from '@material-ui/core'

import iris_chart from "../images/boundaries.png"


const minWid = 0.0;
const maxWid = 3.5;
const minLen = 0.0;
const maxLen = 7.0;
const sliderStep = 0.1;
const imgWidth = 420;
const imgHeight = 210;

const factorWid = imgHeight / maxWid;
const factorLen = imgWidth / maxLen;

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#0000ff',
  },
  markLabel: {
    // background: "black",
    color: "#ccc"
  },
  vertical: {
    height: imgHeight,
  },
  horizontal: {
    width: imgWidth,
    padding: '20px 0 0 0'
  },
  img: {
    height: imgHeight,
    width: imgWidth,
    // padding: ' 0 0 12px'
  },
  divImg: {
    height: imgHeight,
    width: imgWidth,
    backgroundImage: `url(${iris_chart})`,
    backgroundSize: `${imgWidth}px ${imgHeight}px`
  }
}));

function Sliders(props) {
  const { length, width, updateLength, updateWidth } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      // spacing={3}
      direction="column"
    >
      <Grid item
        className={classes.vertical}
      >
        <Grid container>
          <Grid item xs={1}
          >
            <Slider
              orientation="vertical"
              valueLabelDisplay="on"
              min={minWid}
              max={maxWid}
              step={sliderStep}
              value={width}
              // marks={range(minWid, maxWid, 1)}
              onChange={(e, val) => updateWidth(val)}
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
            />
          </Grid>
          <Grid item>
            <div className={classes.divImg}>
              <div style={{
                position: "absolute",
                borderLeft: "2px solid black",
                height: `${imgHeight}px`,
                marginLeft: `${length * factorLen}px`
              }} ></div>
              <div style={{
                position: "absolute",
                borderTop: "2px solid black",
                width: `${imgWidth}px`,
                marginTop: `${imgHeight - width * factorWid}px`
              }} ></div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item xs={1}><div></div></Grid>
          <Grid item className={classes.horizontal}>
            <Slider
              min={minLen}
              max={maxLen}
              step={sliderStep}
              value={length}
              // marks={range(minLen, maxLen, 2)}
              onChange={(e, val) => updateLength(val)}
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="on"
            // marks={marks}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default Sliders

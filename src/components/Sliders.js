import { Grid, makeStyles, Slider } from '@material-ui/core';
import React from 'react';
import "../fonts.css";
import { range } from '../helpers';
import iris_chart from "../images/boundaries.png";

const minWid = 0.0;
const maxWid = 3.5;
const minLen = 0.0;
const maxLen = 7.0;
const sliderStep = 0.1;
const imgWidth = 420;
const imgHeight = 210;

const factorWid = imgHeight / maxWid;
const factorLen = imgWidth / maxLen;

const useStyles = makeStyles(() => ({
  markLabel: {
    color: "#ccc"
  },
  vertical: {
    height: imgHeight,
  },
  horizontal: {
    width: imgWidth,
  },
  img: {
    height: imgHeight,
    width: imgWidth,
  },
  divImg: {
    height: imgHeight,
    width: imgWidth,
    backgroundImage: `url(${iris_chart})`,
    backgroundSize: `${imgWidth}px ${imgHeight}px`
  },
  centerDiv: {
    textAlign: "center",
    verticalAlign: "middle"
  },
  rotate: {
    writingMode: "vertical-rl"
  }
}));

function Sliders(props) {
  const { length, width, updateLength, updateWidth } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
    >
      <Grid item className={classes.vertical}>
        <Grid container>
          <Grid item xs={2}>
            <Grid container
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item>
                <div className={`${classes.rotate} smallFont`}>
                  Petal Width
                </div>
              </Grid>
              <Grid item className={classes.vertical}>
                <Slider
                  classes={{
                    markLabel: classes.markLabel
                  }}
                  orientation="vertical"
                  valueLabelDisplay="on"
                  min={minWid}
                  max={maxWid}
                  step={sliderStep}
                  value={width}
                  marks={range(minWid, maxWid + 0.01, 1)}
                  onChange={(e, val) => updateWidth(val)}
                  // getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <div className={classes.divImg}>
              <div style={{
                position: "absolute",
                borderLeft: "1px solid black",
                height: `${imgHeight}px`,
                marginLeft: `${length * factorLen}px`
              }} ></div>
              <div style={{
                position: "absolute",
                borderTop: "1px solid black",
                width: `${imgWidth}px`,
                marginTop: `${imgHeight - width * factorWid}px`
              }} ></div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item xs={2}><div /></Grid>
          <Grid item style={{
            width: "420px",
            paddingTop: "20px"
          }}>
            <Slider
              classes={{
                markLabel: classes.markLabel
              }}
              min={minLen}
              max={maxLen}
              step={sliderStep}
              value={length}
              marks={range(minLen, maxLen + 0.01, 1)}
              onChange={(e, val) => updateLength(val)}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item xs={2}><div /></Grid>
          <Grid item className={classes.horizontal}>
            <div className={`${classes.centerDiv} smallFont`} >Petal Length [cm]</div>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default Sliders

import React, { useEffect, useRef } from 'react'
import { Grid, makeStyles, Slider } from '@material-ui/core'

import iris_chart from "../images/boundaries.png"


const useStyles = makeStyles((theme) => ({
  root: {
    color: '#0000ff',
  },
  markLabel: {
    // background: "black",
    color: "#ccc"
  },
  vertical: {
    height: 256,
  },
  horizontal: {
    width: 512,
    // padding: '20px 0 0 12px'
  },
  img: {
    height: 256,
    width: 512,
    // padding: ' 0 0 12px'

  },
  canvasImg: {
    height: 256,
    width: 512,
    backgroundImage: `url(${iris_chart})`
  }
}));

const minWid = 0.0;
const maxWid = 4.0;
const minLen = 0.0;
const maxLen = 8.0;
const sliderStep = 0.1;

function Sliders(props) {
  const { length, width, updateLength, updateWidth } = props;
  const classes = useStyles();
  const canvas = useRef();
  let ctx = null;

  // draw a line
  const drawLine = (info, style = {}) => {
    const { x, y, x1, y1 } = info;
    const { color = 'black', width = 1 } = style;

    ctx = canvas.current.getContext("2d")

    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  }
  // initialize the canvas context
  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    const factor = 64;
    const posX = factor * length;
    const posY = 256 - factor * width;
    // const x = 
    drawLine({ x: 0, y: posY, x1: 512, y1: posY }, { color: 'black', width: 1 });

    drawLine({ x: posX, y: 0, x1: posX, y1: 256 }, { color: 'blue', width: 1 });
  }, []);

  const changeWidth = (val) => {
    updateWidth(val);
    const factor = 64;
    const posY = 256 - factor * val;
    drawLine({ x: 0, y: posY, x1: 512, y1: posY }, { color: 'black', width: 1 });
  }
  const changeLength = (val) => {
    updateLength(val);
    const factor = 64;
    const posX = factor * val;
    drawLine({ x: posX, y: 0, x1: posX, y1: 256 }, { color: 'blue', width: 1 });
  }

  return (
    <Grid
      container
      className={classes.root}
      // spacing={3}
      direction="column"
    >
      <Grid item>
        <Grid container>
          <Grid item className={classes.vertical} xs={2}>
            <Slider
              orientation="vertical"
              valueLabelDisplay="on"
              min={minWid}
              max={maxWid}
              step={sliderStep}
              value={width}
              // marks={range(minWid, maxWid, 1)}
              onChange={(e, val) => changeWidth(val)}
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
            />
          </Grid>
          <Grid item>
            <canvas ref={canvas} id="imgCanvas" className={classes.canvasImg}>
              {/* <img
                src={iris_chart}
                className={classes.img}
              /> */}
            </canvas>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item xs={2}><div></div></Grid>
          <Grid item className={classes.horizontal}>
            <Slider
              min={minLen}
              max={maxLen}
              step={sliderStep}
              value={length}
              // marks={range(minLen, maxLen, 2)}
              onChange={(e, val) => changeLength(val)}
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="on"
            // marks={marks}
            />
            {/* <Typography>Petal length</Typography> */}
            {/* <button onClick={() => console.log(marksLength)}>Show</button> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default Sliders

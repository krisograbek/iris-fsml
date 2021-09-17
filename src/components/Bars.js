import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import "../fonts.css";
import { mapIrisColor, mapIrisShort } from '../helpers';

function Bars(props) {
  const { probas } = props;

  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-start"
    >
      {
        probas.map((proba, key) => {
          return (
            <Grid item key={key} xs={2}>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <div className="mediumFont">{proba.toFixed(1)}%</div>
                </Grid>
                <Grid item>
                  <Grid container spacing={0}
                    direction="column"
                    alignItems="center"
                  >
                    <div style={{
                      borderLeft: "20px solid grey",
                      height: `${100 - proba}px`
                    }} ></div>
                    <div style={{
                      borderLeft: "20px solid",
                      borderColor: mapIrisColor[key],
                      height: `${proba}px`
                    }} ></div>
                  </Grid>
                </Grid>
                <Grid item>
                  <div className="mediumFont">{mapIrisShort[key]}</div>
                </Grid>
              </Grid>
            </Grid>
          )
        })
      }
    </Grid >
  )
}

export default Bars

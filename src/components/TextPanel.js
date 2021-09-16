import React from 'react'
import { Grid } from '@material-ui/core';
import "../fonts.css"

function TextPanel(props) {
  const { length, width } = props;

  return (
    <div className="smallFont">
      <div>Petal length: {length}</div>
      <div>Petal width: {width}</div>
    </div>
  )
}

export default TextPanel;

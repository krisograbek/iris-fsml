import { Grid } from '@material-ui/core';
import React from 'react'

function TextPanel(props) {
  const { length, width } = props;

  return (
    <div>
      <div>Petal length: {length}</div>
      <div>Petal width: {width}</div>
    </div>
  )
}

export default TextPanel;

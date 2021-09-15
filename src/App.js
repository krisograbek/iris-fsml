import { useEffect, useState } from 'react';
import { makeStyles, Slider } from '@material-ui/core';
import './App.css';
import BarChart from './components/BarChart';

const mapIrisKeys = {
  0: "Iris Setosa",
  1: "Iris Versicolor",
  2: "Iris Virginica"
}

const useStyles = makeStyles((theme) => ({
  vertical: {
    height: 200,
  },
  horizontal: {
    width: 400,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function App() {
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
    // console.log(typeof length, typeof width)
    fetch(`/api/predict/${length}/${width}`).then(res => res.json()).then(data => {
      setCurrentValue(data)
    })
  }

  const updateLength = (val) => {
    setLength(val);
    updatePredictions();
    // console.log(length, width)
  }

  const updateWidth = (val) => {
    setWidth(val);
    updatePredictions();
    // console.log(length, width)
  }

  return (
    <div className="App">
      <header className="App-header">
        <BarChart probas={currentValue.probas} />
        <div className={classes.margin}></div>
        <div className={classes.vertical}>
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
        </div>
        <div className={classes.margin}></div>
        <div className={classes.horizontal}>
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
        </div>
        <h6>Petal length: {length}</h6>
        <h6>Petal width: {width}</h6>
        {
          currentValue.probas.map((val, i) => {
            return (
              <div key={i}>
                {mapIrisKeys[i]}: {val.toFixed(3)}%
              </div>
            )
          })
        }
        <h2>Prediction: {mapIrisKeys[currentValue.prediction]}</h2>
        {/* <button onClick={updatePredictions}>update</button> */}
      </header>
    </div>
  );
}

export default App;

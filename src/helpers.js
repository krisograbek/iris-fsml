export const mapIris = {
  0: "Iris Setosa",
  1: "Iris Versicolour",
  2: "Iris Virginica"
};

export const mapIrisShort = {
  0: "Setosa",
  1: "Versicolour",
  2: "Virginica"
};

export const mapIrisColor = {
  0: "#fafab0",
  1: "#9898ff",
  2: "#a0faa0"
};

export const range = (start, stop, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start).map((x, y) => {
      const val = x + y * step
      return (
        { value: val, label: `${val}` }
      )
    })

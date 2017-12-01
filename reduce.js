function reduce(arr, fn, initial) {
  return (function reduceFunc(val, index) {
    if (index > arr.length - 1) return val
    else return reduceFunc(fn(val, arr[index], index, arr), index + 1)
  })(initial, 0);
}

module.exports = reduce;
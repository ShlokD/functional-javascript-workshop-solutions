module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function (accumulator, value) {
    accumulator.push(fn(value));
    return accumulator;
  }, [])
}
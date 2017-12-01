function duckCount() {
  return [].slice
  .call(arguments)
  .filter(function(x) { return Object.hasOwnProperty.call(x, "quack")})
  .length;
}

module.exports = duckCount
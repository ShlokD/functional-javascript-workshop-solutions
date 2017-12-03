function getDependencies(tree, result) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  var dependencies = tree && tree.dependencies || [];
  result = result || [];
  Object.keys(dependencies).forEach(function (dep) {
    var key = dep + '@' + tree.dependencies[dep].version;
    if (result.indexOf(key) === -1) {
      result.push(key);
    }
    getDependencies(tree.dependencies[dep], result);
  });
  return result.sort();
}

module.exports = getDependencies
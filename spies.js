function Spy(target, method) {
  var ref = target[method]
  var spyObj = {
    count: 0
  };

  target[method] = function () {
    spyObj.count++;
    return ref.apply(this, arguments);
  }
  return spyObj
}

module.exports = Spy
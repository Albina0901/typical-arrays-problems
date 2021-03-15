
exports.min = function min (array) {
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }
  return res / array.length;
}
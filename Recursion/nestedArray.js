function nestedArray(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce(function (accumulator, currentValue) {
      return accumulator.concat(nestedArray(currentValue));
    }, []);
  } else {
    return arr;
  }
}

console.log(nestedArray([1, 2, 3, [[[4]]], 5]));

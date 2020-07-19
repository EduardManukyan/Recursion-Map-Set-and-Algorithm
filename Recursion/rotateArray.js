const rotateArray = (arr, n) => {
  if (n > 0) {
    arr.push(arr.shift());
    return rotateArray(arr, n - 1);
  }
  if (n < 0) {
    arr.unshift(arr.pop());
    return rotateArray(arr, n + 1);
  }
  return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));

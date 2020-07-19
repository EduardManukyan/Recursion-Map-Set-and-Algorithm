function findindex(arr) {
  const inerfinindex = (arr, ind) => {
    if (arr.length === 0 || arr.length === 1 || ind === arr.length - 1) {
      return -1;
    }
    if (arr[ind] > arr[ind + 1]) {
      return ind + 1;
    }
    return inerfinindex(arr, ind + 1);
  };
  return inerfinindex(arr, 0);
}
console.log(findindex([1, 3, 4, 2, 6, 8]));

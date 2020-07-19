function minPositiveElement(arr) {
    const iter = (arr, min) => {
      if (arr.length === 0) {
        return min;
      }
      if (arr[0] >= 0) {
        if (min < 0 || arr[0] <= min) {
          min = arr[0];
        }
      }
      return iter(arr.splice(1), min);
    };
    return iter(arr, -1);
  }
  console.log(minPositiveElement([-45, -9, -78]));
  
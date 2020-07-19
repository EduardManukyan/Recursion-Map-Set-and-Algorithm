function removesTheFirstElement(arr) {
    let [first, ...rest] = arr;
    return rest;
  }
  console.log(removesTheFirstElement([1, 2, 3, 4]));
  
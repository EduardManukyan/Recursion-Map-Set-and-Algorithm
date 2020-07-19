function oddFunction(num) {
  const findOddNumber = (num, acc) => {
    if (num / 10 < 1) {
      if (num % 2 === 0) {
        return false;
      }
      return acc;
    }
    const last = num % 10;
    if (last % 2 === 0) {
      return false;
    }

    return findOddNumber((num - last) / 10, acc);
  };
  return findOddNumber(num, true);
}

console.log(oddFunction(131597357));

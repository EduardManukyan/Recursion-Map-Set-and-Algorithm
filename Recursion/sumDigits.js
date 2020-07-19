function sumDigits(num) {
    if (num < 10) {
      return num;
    }
    return sumDigits((num % 10) + sumDigits(Math.floor(num / 10)));
  }
  console.log(sumDigits(123));
  
function oddNumbers(l, r) {
  let odds = [];
  let isOdd = function (num) {
    if (num % 2 != 0) {
      return true;
    }
  };
  for (let i = l; i <= r; i++) {
    if (isOdd(i) === true) {
      odds.push(i);
    }
  }
  return odds;
}

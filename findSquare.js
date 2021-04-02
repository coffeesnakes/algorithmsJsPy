function squared(initial, squares) {
  if (initial.length !== squares.length) {
    return false;
  }
  for (let i = 0; i < initial.length; i++) {
    let isSquared = squares.indexOf(initial[i] ** 2);
    console.log(isSquared);
    if (isSquared === -1) {
      return false;
    }
    console.log(squares);
    squares.splice(isSquared, 1);
  }
  return true;
}

let numbers = [2, 7, 3];
let sq = [49, 4, 9];

console.log(squared(numbers, sq)); // true


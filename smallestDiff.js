function smallestDifference(arrayOne, arrayTwo) {
  let smallestDiff = Infinity;
  const smallestPair = [];

  for (const firstNum of arrayOne) {
    for (const secondNum of arrayTwo) {
      const currentDiff = Math.abs(firstNum - secondNum);
      if (currentDiff < smallestDiff) {
        smallestDiff = currentDiff;
        smallestPair[0] = firstNum;
        smallestPair[1] = secondNum;
      }
    }
  }
	console.log(smallestPair)
  return smallestPair;
}

let arrayOne = [-1, 5, 10, 20, 28, 3];
let arrayTwo = [26, 134, 135, 15, 17];

smallestDifference(arrayOne, arrayTwo);
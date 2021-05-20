function sortedSquaredArray(array) {
  const positiveSquares = [];
  const negativeSquares = [];

  for (const value of array) {
    const square = value * value;
    if (value < 0) {
      negativeSquares.push(square);
    } else {
      positiveSquares.push(square);
    }
  }

  const squares = [];
  let positiveIdx = 0;
  let negativeIdx = negativeSquares.length - 1;

  while (positiveIdx < positiveSquares.length || negativeIdx >= 0) {
    const positiveSquare =
      positiveSquares[positiveIdx] !== undefined
        ? positiveSquares[positiveIdx]
        : Infinity;
    const negativeSquare = negativeSquares[negativeIdx] || Infinity;

    if (positiveSquare < negativeSquare) {
      squares.push(positiveSquare);
      positiveIdx++;
    } else {
      squares.push(negativeSquare);
      negativeIdx--;
    }
  }

  return squares;
}

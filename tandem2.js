function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);

  if (fastest) reverseArrayInPlace(blueShirtSpeeds);

  let totalSpeed = 0;
  for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
    const redShirtSpeed = redShirtSpeeds[idx];
    const blueShirtSpeed = blueShirtSpeeds[idx];
    totalSpeed += Math.max(redShirtSpeed, blueShirtSpeed);
  }

  return totalSpeed;
}

function reverseArrayInPlace(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
}

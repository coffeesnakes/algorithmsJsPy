function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);
  if (fastest) {
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    blueShirtSpeeds.sort((a, b) => a - b);
  }

  let totalSpeed = 0;
  for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
    const redShirtSpeed = redShirtSpeeds[idx];
    const blueShirtSpeed = blueShirtSpeeds[idx];
    totalSpeed += Math.max(redShirtSpeed, blueShirtSpeed);
  }

  return totalSpeed;
}

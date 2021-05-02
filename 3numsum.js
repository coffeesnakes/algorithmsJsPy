function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    const firstNum = array[i];
    const currentDifference = targetSum - firstNum;
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[left] + array[right];
      if (currentSum === currentDifference) {
        triplets.push([firstNum, array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum > currentDifference) {
        right--;
      } else {
        left++;
      }
    }
  }

  return triplets;
}

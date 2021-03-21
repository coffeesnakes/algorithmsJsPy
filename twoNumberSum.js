function twoNumberSum(array, targetSum) {
  let i;
  let j;
  for (i = 0; i < array.length - 1; ++i) {
    let first = array[i];
    for (j = i + 1; j < array.length; ++j) {
      let second = array[j];
      if (first + second == targetSum) {
        return [first, second];
      }
    }
  }
  return [];
}

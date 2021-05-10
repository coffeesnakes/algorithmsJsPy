function countPathsRecursive(n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return 0;
  }

  return (
    countPathsRecursive(n - 1) +
    countPathsRecursive(n - 2) +
    countPathsRecursive(n - 3)
  );
}

function countPathsMemo(n) {
  // I: n - number of steps
  // O: number of paths
  // C: none
  // E: n = 0, n < 0

  // If n = 0 return 1
  // If n < 0 return 0
  function recursiveSum(n, memo) {
    if (n === 0) {
      return 1;
    }

    if (n < 0) {
      return 0;
    }

    if (memo[n]) {
      return memo[n];
    }
    memo[n] =
      countPathsMemo(n - 1) + countPathsMemo(n - 2) + countPathsMemo(n - 3);
    return memo[n];
  }

  const memo = {};
  return recursiveSum(n, memo);
}

const countPathsDynammic = (n) => {
  const memo = [];
  memo[-1] = 0;
  memo[0] = 1;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }

  return memo[n];
};

export { countPathsMemo, countPathsRecursive, countPathsDynammic };

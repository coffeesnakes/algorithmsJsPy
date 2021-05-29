class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const sums = [];
  const stack = [{ node: root, runningSum: root.value }];

  while (stack.length > 0) {
    const { node, runningSum } = stack.pop();

    if (!node.left && !node.right) {
      sums.push(runningSum);
      continue;
    }

    let newRunningSum;
    if (node.right) {
      newRunningSum = runningSum + node.right.value;
      stack.push({ node: node.right, runningSum: newRunningSum });
    }
    if (node.left) {
      newRunningSum = runningSum + node.left.value;
      stack.push({ node: node.left, runningSum: newRunningSum });
    }
  }

  return sums;
}

function findClosestValueInBst(tree, target) {
  return seekClosest(tree, target, tree.value);
}
const seekClosest = (tree, target, closest) => {
  let current = tree;
  while (current !== null) {
    if (Math.abs(target - closest) > Math.abs(target - current.value)) {
      closest = current.value;
    }
    if (target < current.value) {
      current = current.left;
    } else if (target > current.value) {
      current = current.right;
    } else {
      break;
    }
  }
  return closest;
};
// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

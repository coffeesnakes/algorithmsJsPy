var binarySearch = function (array, target) {
  let memo = 0;
  function seek(array, target) {
    let min = 0;
    let max = array.length - 1;
    let middle = Math.floor((min + max) / 2);
    memo += middle;
    if (target > array[middle]) {
      if (array[middle] === target) {
        return middle;
      } else {
        return seek(array.slice(array[middle] - 1), target);
      }
    }
    if (target < array[middle]) {
      array = array.reverse();
      if (array[middle] === target) {
        return middle;
      } else {
        return seek(array.slice(array[middle] - 1, middle - max), target);
      }
    }
  }
  seek(array, target);
  return memo;
};

// let idx = binarySearch([1, 2, 3, 4, 5], 4);
// let idx0 = binarySearch([15, 6, 13, 2424, 500], 2424);
// let idx1 = binarySearch([8, 6, 7, 5, 3, 0, 9], 9);

// console.log(idx);
// console.log(idx0);
// console.log(idx1);

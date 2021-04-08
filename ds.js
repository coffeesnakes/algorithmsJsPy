function reverseArray(arr) {
  let min = 0,
    max = arr.length - 1;
  let temp = 0;

  while(min < max) {
    temp = arr[min];
    arr[min] = arr[max];
    arr[max] = temp;
    max--;
    min++;
		console.log(arr);
  }
  return arr;
}


let test0 = [0, 1, 2, 3, 4, 5,6,7,8,9,10,20]
console.log(reverseArray(test0))

// [(20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0)]
// [(20, 10, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0)]
// [(20, 10, 9, 3, 4, 5, 6, 7, 8, 2, 1, 0)][
//   (20, 10, 9, 8, 4, 5, 6, 7, 3, 2, 1, 0)
// ][(20, 10, 9, 8, 7, 5, 6, 4, 3, 2, 1, 0)][
//   (20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0)
// ][(20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0)];
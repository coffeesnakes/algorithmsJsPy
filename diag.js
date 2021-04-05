function diagonal (arr) {
	let diag1 = 0, diag2 = 0;
	// console.log(diag2)
	let Len = arr.length;
	for (let i = 0; i < Len; i++) {
		diag1 += arr[i][i];
		diag2 += arr[Len - 1 -i][i];
	}
	return Math.abs(diag1 - diag2)
}

// diagonal();

let test0 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

let test1 = [
  [55, 2, 777],
  [4, 0, 6],
  [33, 8, 45],
];

console.log(diagonal(test0));
console.log(diagonal(test1));
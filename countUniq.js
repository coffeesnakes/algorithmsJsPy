const countUniq = function (arr) {
	if (arr.length === 0) return 0;
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++
			arr[i] = arr[j];
		}
	}
	console.log(i+1, arr)
	return i+1;
}





let test0 = [1, 1, 1, 1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 7,];
let test1 = [1, 2, 3, 4, 5, 5, 5, 6, 99, 104];
let test2 = [];


// console.log(countUniq(test0));
console.log(countUniq(test1));
// console.log(countUniq(test2));
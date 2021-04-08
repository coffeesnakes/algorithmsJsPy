function reverseArray (arr) {
	console.log(arr);
	if (arr.length === 0) return [];
	let min = 0;
	let max = arr.length - 1;
	while (min <= max) {
		let temp = 0;
		temp = arr[min];
		arr[min] = arr[max];
		arr[max] = temp;
		min++;
		max--;
	}
	console.log(arr);
	return arr;
}







let test = [1, 2, 3, 4, 1, 0, 0, 1, 5, 6, 7, 8]

console.log(reverseArray(test))
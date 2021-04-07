function bsearch (arr, k) {
	let min = 0, max = arr.length - 1;
	while (min <= max) {
		let mid = Math.floor((min+max) / 2);
		if (arr[mid] < k) {
			min = mid + 1;
		} else if (arr[mid] > k) {
			max = mid - 1
		} else {
		return mid;
		}
	}
	return -1;
}

let test0 = [0,1,2,3,4,5,6,7,88,99,100,105,107];
let test1 = [1, 3, 5, 6, 8, 9, 22];
console.log(bsearch(test0, 105));
console.log(bsearch(test1, 1));
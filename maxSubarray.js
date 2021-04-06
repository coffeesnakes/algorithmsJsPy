function maxSubarray (arr, num) {
	let max = 0, temp = 0;
	for (let i = 0; i < num; i++) {
		max += arr[i];
	}
	temp = max;
	for (let i = num; i < arr.length; i++) {
		temp = temp - arr[i - num] + arr[i];
		max = Math.max(temp, max)
	}

	return max;
}

let test = [1,3,4,5,2,1,6,7,7,7,3,4,1,2];

console.log(maxSubarray(test, 3));
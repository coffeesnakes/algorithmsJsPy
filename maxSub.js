
function maxSub(arr, n) {
	if (arr.length < n) return null;
	let m = 0, t = 0;
	for (let i = 0; i < n; i++) {
		m += arr[i];
	}
	t = m;
	for (let i = n; i < arr.length; i++) {
		t = t - arr[i - n] + arr[i];
		m = Math.max(m, t);
		console.log(m);
	}
	console.log('final answer: ', m)
	return m;
}






let test = [1, 3, 4, 5, 2, 1, 6, 7, 7, 7, 3, 4, 1, 2];
let test1 = [15, 6, 13, 2424, 500,3,4,51,63,2,9,0,40];
console.log(maxSub(test, 4))
console.log(maxSub(test1, 3));
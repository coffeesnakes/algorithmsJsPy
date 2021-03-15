function isValidSubsequence(arr, seq) {
	let i = 0;
	let j = 0;
	while (i < arr.length && j < seq.length){
		if (arr[i] === seq[j]) j++;
		i++;
	}
	return j === seq.length;
}
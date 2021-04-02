var singleNumber = function (nums) {
  const hash = {};
	nums.forEach((num) => {
		if (hash[num]) {
			delete hash[num]
		} else {
			hash[num] = 1;
		}
	});
	console.log(Object.keys(hash)[0]);
	return Object.keys(hash)[0];
};

let zzz = [4, 1, 2, 1, 2];
singleNumber(zzz)
// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
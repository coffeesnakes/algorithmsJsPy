const stringSearch = (string, target) => {
	let counter = 0;
	for (let i = 0; i < string.length; i++) {
		for (let j = 0; j < target.length; j++) {
			if (target[j] !== string[i+j]) break;
			if (j === target.length - 1) counter += 1
		}
	}
	console.log(counter)
	return counter;
}

stringSearch("doug the dog", "do")


















  //  pseudocode
// loop over longer string
// loop over the shorter string
// if characters dont match, break out of the inner loop
// if the characters do match, keep iterating
// if you complete the inner loop and find a match increment the count of matches
// return count
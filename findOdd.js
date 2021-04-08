// function findOdd(A) {
//   let frequency = {};
//   for (let i = 0; i < A.length; i++) {
//     let num = A[i];
//     frequency[num] ? (frequency[num] += 1) : (frequency[num] = 1);
//     console.log(frequency);
//   }

// }
function findOdd(A) {
  let frequency = {};
  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    frequency[num] ? (frequency[num] += 1) : (frequency[num] = 1);
		console.log(frequency)
  }
  for (let key in frequency) {
    if (frequency[key] % 2 !== 0) {
			console.log(key)
      return parseInt(key);
    }
  }
}

let test0 = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
console.log(findOdd(test0))
function isValidSubsequence(array, sequence) {
  sequenceCount = 0;
  let len = sequence.length;
  for (let val of array) {
    if (sequenceCount === len) break;
    if (sequence[sequenceCount] === val) {
      sequenceCount++;
    }
  }
  console.log(sequenceCount === len);
  return sequenceCount === len;
}

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

let array2 = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence2 = [5, 1, 22, 25, 6, -1, 8, 10];

isValidSubsequence(array, sequence);
isValidSubsequence(array2, sequence2)
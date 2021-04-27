function sortedSquaredArray(array) {
for (let val in array) {
	array[val] = array[val]*array[val];
}
	array = array.sort(function(x,y){return x-y})
	console.log(array);
  return array
}


let arr1 = [1, 2, 3, 5, 6, 8, 9];

sortedSquaredArray(arr1);

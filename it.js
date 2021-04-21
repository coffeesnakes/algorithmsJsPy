let test = [83, 47, 99, 73, 400, 12, 83];
let test2 = [1, 6, 4];

// let currentidx = 3;
// console.log(test);
// test.splice(currentidx, 1);
// console.log(test);

// function logger (arr) {
// 	let hash = {};
// 	for (let key in arr) {
// 		console.log('this is arr[key] :',arr[key]);
// 		console.log('this is key: ', key);
// 	}
// };

// logger(test);
// const spreadTest = function (x, y ,z) {
// return x*y*z;
// }
// console.log(spreadTest(...test2));
// console.log(test, test.length);
// test.splice(2, 3);
// console.log(test, test.length);

// function findMax (arr) {
// 	return Math.max(null, ...arr);

// };
// console.log(findMax(test));
// console.log(findMax(test2))

    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === 4) {
        arr.splice(i, 1);
      }
    }
		console.log(arr);
const test = [83, 47, 99, 73, 400, 12, 83];
const test2 = [1, 6, 4];
// function logger (arr) {
// 	let hash = {};
// 	for (let key in arr) {
// 		console.log('this is arr[key] :',arr[key]);
// 		console.log('this is key: ', key);
// 	}
// };

// logger(test);
const spreadTest = function (x, y ,z) {
return x*y*z;
}
console.log(spreadTest(...test2));
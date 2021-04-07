var person = {
	firstName : "olga",
	lastName : "Marsh",
	shoot : function () {
		console.log("BANG.")
	},
	nickname : "sparta",
	color : "grey"
}


let assigned = Object.assign(person)

let reformed = Object.entries(person);
// const seek = (arr, target) => {
// let i = 0;
// while (i < arr.length - 1) {
// 	console.log(arr[i])
// }
// }
const seekRebornheh = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === k) {
      return arr[i][1];
    }
  }
	return 'invalid  target'
};
console.log(seekRebornheh(reformed, 'firstName'))
console.log(seekRebornheh(reformed, "shoot"));
// console.log(reformed);
// console.log(assigned);
// console.log(person.nickname)
// console.log(person['nickname'] === person.nickname) // true
// console.log(person.shoot());  											 // BANG.
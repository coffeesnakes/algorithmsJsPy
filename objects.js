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




let reverse = Object.fromEntries(reformed);
// console.log(reverse);
let tupleTest = [
	['hello', 'friend'],
	['welterweight', 'champion'],
	['slimfast', 23],
	['change?', 'never'],
	['winnin?', 'yup'],
	['losing?', 'NOPE']
]
const perfectlyNamedObject = Object.fromEntries(tupleTest);
// console.log(perfectlyNamedObject);
let logKeys = Object.keys(person);
let logValues = Object.values(person);
// console.log(logKeys);
// console.log(logValues);

function DNQ (arr, tar) {

}





// const seek = (arr, target) => {
// let i = 0;
// while (i < arr.length - 1) {
// 	console.log(arr[i])
// }
// }




// const seekRebornheh = (arr, k) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][0] === k) {
//       return arr[i][1];
//     }
//   }
// 	return 'invalid  target'
// };





// console.log(seekRebornheh(reformed, 'firstName'))
// console.log(seekRebornheh(reformed, "shoot"));
// console.log(reformed);
// console.log(assigned);
// console.log(person.nickname)
// console.log(person['nickname'] === person.nickname) // true
// console.log(person.shoot());  											 // BANG.





var Person = function(name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

var Employee = function(name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; //If you don't set Object.prototype.constructor to Employee,
                                           //it will take prototype.constructor of Person (parent).
                                           //To avoid that, we set the prototype.constructor to Employee (child).

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var Customer = function(name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; //If you don't set Object.prototype.constructor to Customer,
                                           //it will take prototype.constructor of Person (parent).
                                           //To avoid that, we set the prototype.constructor to Customer (child).

var Mime = function(name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; //If you don't set Object.prototype.constructor to Mime,
                                   //it will take prototype.constructor of Person (parent).
                                   //To avoid that, we set the prototype.constructor to Mime (child).

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Jake');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

/**
 * nTimes takes an integer and a function, and returns a function that will invoke the
 * original function the first n times the new function is invoked. The nth + 1 invocation
 * (and all subsequent invocation) of the new function will return the result of
 * the last func invocation. The new function should invoke func with any arguments
 * passed to the new function.
 *
 * HINT: n-times is the generalized version of once - for example,
 * passing 1 into n-times is the equivalent of the once function.
 *
 * var add = function(a, b) {
 *   return a + b;
 * }
 *
 * var add3Times = nTimes(3, add);
 * add3Times(1, 5) // returns 6
 * add3Times(4, 9) // returns 13
 * add3Times(6, 5) // returns 11
 * add3Times(2, 3) // returns 11
 * add3Times(9, 8) // returns 11
 *
 */

var nTimes = function (n, func) {
  let res;
  return function () {
    if (n != 0) {
      res = func.apply(this, arguments);
      --n;
    }
    return res;
  };
};
var add = function (a, b) {
  return a + b;
};
var add3Times = nTimes(3, add);
console.log(add3Times(1, 5)); // returns 6
console.log(add3Times(4, 9)); // returns 13
console.log(add3Times(6, 5)); // returns 11
console.log(add3Times(2, 3)); // returns 11
console.log(add3Times(9, 8)); // returns 11

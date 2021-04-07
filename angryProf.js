function angryProfessor(k, a) {
  let late = 0;
  for (let i = 0; i < a.length; i++) {
    let checkin = a[i];
    if (checkin > 0) {
      late++;
    }
  }
  if (a.length - late >= k) {
    return "YES";
  }
  return "NO";
}

let test0 = [-1, 0, 1, 2, 3];

let test1 = [-5, -3, -400, 0, 1, 2];

console.log(angryProfessor(3, test0)) //should return NO
console.log(angryProfessor(4, test1)); //should return YES
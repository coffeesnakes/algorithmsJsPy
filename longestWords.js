function longestWord(sen) {
  sen = sen.replace(/[^\w\s]/gi, "");
  let words = sen.split(" ");
  var longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

let test = "hell!## heaven";
let test2 = "hello world"
let test3 = 'dragonfire spitball push'
console.log(longestWord(test));
console.log(longestWord(test2));
console.log(longestWord(test3))
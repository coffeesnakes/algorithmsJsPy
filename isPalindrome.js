function isPalindrome(string) {
  if (string.length === 0) {
    return false;
  }
  let reversed = string.split("").reverse().join("");
  return string === reversed;
}



function isPalindrome(string) {
  if (string.length === 0) {
    return false;
  }
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    let currentLetter = string[i];
    reversed += currentLetter;
  }
  return string === reversed;
}
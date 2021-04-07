const isPalRec = (string, start, end) => {
  // If there is only one character
  if (start === end) {
    return true;
  }
  // If first and last
  // characters do not match
  if (string[start] !== string[end]) {
    return false;
  }
  // If there are more than two
  // characters, check if middle
  // substring is also palindrome or not.
  if (start < end + 1) {
    return isPalRec(string, start + 1, end - 1);
  }
  return true;
};

const isPalindrome = (string) => {
  const length = string.length;
  // An empty string is
  // considered as palindrome
  if (length === 0) {
    return true;
  }
  return isPalRec(string, 0, length - 1);
};

function log(a) {
  console.log(isPalindrome(a));
}

log('lol'); //true

log('sulphur'); //false
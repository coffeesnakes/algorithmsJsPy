function mostRepeatedLetter(str) {
  const charMap = {};
  let max = 0;
  let mostRepeated = "";
	// lowercasing the string and removing spaces, for the requested output this is the way
	str = str.toLowerCase();
	str = str.split(' ').join('');

  // create character map
  for (let char of str) {
    if (charMap[char]) {
      // increment the character's value if the character existed in the map
      charMap[char]++;
    } else {
      // Otherwise, the value of the character will be increamented by 1
      charMap[char] = 1;
    }
  }
  // find the most commonly used character
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      mostRepeated = char;
    }
  }
  return mostRepeated;
}


mostRepeatedLetter("I want to rock this interview");

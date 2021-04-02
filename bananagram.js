/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/



function isAnagram(string, comparison) {
	let freq1 = {};
if (string.length !== comparison.length) {
	console.log('uneven length, not anagram')
	return false;
}

for (let i = 0; i < string.length; i++) {
let letter = string[i];
if (freq1[letter] ? freq1[letter] += 1 : freq1[letter] = 1);
}

for (let j = 0; j < comparison.length; j++) {
	let letter = comparison[j]
	console.log(freq1);
	if (!freq1[letter]) {
		console.log('false');
		return false;
	}
	console.log('true, it is an anagram')
	return true;
}
}

let str0 = 'cat';
let str1 = 'tac';
let s2 = 'slapper';
let s3 = 'lappers';

// isAnagram(str0, str1);
isAnagram(s2, s3);
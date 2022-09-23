// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
// Write a function that checks if one string is a subsequence of the other string.

function mySolution(str_1, str_2) {
	if (str_1.length === 0) return true;
	let left = 0,
		right = 0;
	while (right < str_2.length) {
		if (str_1[left] === str_2[right]) left++;
		if (left === str_1.length) return true;
		right++;
	}
	return false;
}

console.log(mySolution("hello", "hello Dear"));
console.log(mySolution("book", "brooklyn"));
console.log(mySolution("abc", "bac"));
console.log(mySolution("abc", "abcd"));
console.log(mySolution("", "bac"));
console.log(mySolution(" ", "bac"));

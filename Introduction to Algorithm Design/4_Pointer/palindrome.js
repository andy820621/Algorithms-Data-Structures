// Write a function that checks if the input string is a palindrome. Palindrome is a word that can be read forwards and backwards.

function mySolution(str) {
	let left = 0,
		right = str.length - 1;
	while (left < right) {
		if (str[left] === str[right]) {
			left++;
			right--;
		} else {
			return false;
		}
	}
	return true;
}

console.log(mySolution("awesome"));
console.log(mySolution("foobar"));
console.log(mySolution("tacocat"));
console.log(mySolution("amanaplanacanalpanama"));

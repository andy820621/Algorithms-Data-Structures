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

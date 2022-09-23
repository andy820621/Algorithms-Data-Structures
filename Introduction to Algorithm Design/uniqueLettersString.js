// Write a function called uniqueLetterString, which accepts a string and returns the length of the longest substring with all distinct characters.

function uniqueLettersString(str) {
	let start = 0,
		end = 0,
		counter = {},
		maxLength = -Infinity;

	while (end < str.length) {
		if (!counter[str[end]]) {
			counter[str[end]] = 1;
			end++;

			let currentLength = end - start;
			if (currentLength > maxLength) maxLength = currentLength;
		} else if (counter[str[end]]) {
			delete counter[str[start]];
			start++;
		}
	}

	if (maxLength === -Infinity) {
		console.log("Cannot find unique letters substring.");
		return null;
	}

	return maxLength;
}
// Write a function called uniqueLetterString, which accepts a string and returns the length of the longest substring with all distinct characters.

console.log(uniqueLettersString("thisishowwedoit")); // 6
// Write a function called uniqueLetterString, which accepts a string and returns the length of the longest substring with all distinct characters.

console.log(uniqueLettersString("thisabishowwedoit")); // 7
// Write a function called uniqueLetterString, which accepts a string and returns the length of the longest substring with all distinct characters.

console.log(uniqueLettersString("")); // null
// Write a function called uniqueLetterString, which accepts a string and returns the length of the longest substring with all distinct characters.

console.log(uniqueLettersString("  ")); // 1

// Write a function that takes two strings and check if they have the same letters. Order doesn’t matter.
function sameFrequency(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	const obj1 = {},
		obj2 = {};
	for (let i = 0; i < arr1.length; i++) {
		if (obj1[arr1[i]]) {
			obj1[arr1[i]]++;
		} else {
			obj1[arr1[i]] = 1;
		}

		if (obj2[arr2[i]]) {
			obj2[arr2[i]]++;
		} else {
			obj2[arr2[i]] = 1;
		}
	}
	if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
	for (let property in obj1) {
		if (!obj2[property] || obj1[property] !== obj2[property]) return false;
	}
	return true;
}
console.log(sameFrequency("abbc", "aabc"));
console.log(sameFrequency("abba", "abab"));
console.log(sameFrequency("aasdebasdf", "adfeebed"));

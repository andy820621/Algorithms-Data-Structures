function intersection(arr1, arr2) {
	let result = [];
	let arr3 = arr1.concat(arr2);
	let counter = {};

	for (let i = 0; i < arr3.length; i++) {
		if (counter[arr3[i]]) {
			counter[arr3[i]]++;
		} else {
			counter[arr3[i]] = 1;
		}
	}

	for (let property in counter) {
		if (counter[property] >= 2) result.push(property);
	}
	return result;
}

console.log(intersection([15, 3, 6, 8, 24, 16], [11, 3, 9, 6, 15, 8]));

// Write a function that given a sorted array of integers and a number. Find if there’s any pair in the array that has average of the given number. Find all of them. There might be multiple pairs fit the condition.

function averagePair(array, n) {
	const result = [];
	let step = 0;
	while (array.length > 0) {
		const comparison = array.pop();
		for (let i = 0; i < array.length; i++) {
			step++;
			if (array[i] + comparison === n * 2) {
				result.push([array[i], comparison]);
			}
		}
	}
	console.log(step);
	return result;
}
console.log(averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5));

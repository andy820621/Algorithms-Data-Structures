function averagePair(array, n) {
	const result = [];
	let comparisonStart = 0,
		comparisonEnd = array.length - 1;

	let step = 0;
	while (comparisonStart < comparisonEnd) {
		step++;
		if (array[comparisonStart] + array[comparisonEnd] > 2 * n) {
			comparisonEnd--;
		} else if (array[comparisonStart] + array[comparisonEnd] === 2 * n) {
			result.push([array[comparisonStart], array[comparisonEnd]]);
			comparisonStart++;
			comparisonEnd--;
		} else if (array[comparisonStart] + array[comparisonEnd] < 2 * n) {
			comparisonStart++;
		}
	}
	console.log(step);
	return result;
}
console.log(averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5));

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

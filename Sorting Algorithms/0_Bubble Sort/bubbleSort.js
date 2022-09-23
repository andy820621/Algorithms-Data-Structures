function bubbleSort(arr) {
	// i means sorted elements
	for (let i = 0; i < arr.length - 1; i++) {
		// j means adjacent elements.
		for (let j = arr.length - 1; j >= i + 1; j--) {
			if (arr[j] < arr[j - 1]) {
				let big = arr[j - 1],
					small = arr[j];
				arr[j] = big;
				arr[j - 1] = small;
			}
		}
	}
	return arr;
}
console.log(bubbleSort([4, 7, 1, 3, 2, 5]));

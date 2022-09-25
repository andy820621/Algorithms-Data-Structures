let arr = [15, 3, 17, 18, 20, 2, 1, 666];

function partition(start, end) {
	let pivot = arr[end];
	let smallSideIndex = start - 1; // this variable is counting how many items are less than the pivot.

	// loop array from start to the index of end -1
	for (let i = start; i < end; i++) {
		if (arr[i] <= pivot) {
			smallSideIndex++;
			// swap bigger to the smaller side's index of end.
			let bigger = arr[i];
			arr[i] = arr[smallSideIndex];
			arr[smallSideIndex] = bigger;
		}
	}
	smallSideIndex++; // now this value is the index of the only one sorted item in this partition method.

	// then swap pivot to this index
	arr[end] = arr[smallSideIndex];
	arr[smallSideIndex] = pivot;

	return smallSideIndex;
}

function quickSort(start, end) {
	if (start < end) {
		let sortedIndex = partition(start, end);
		quickSort(start, sortedIndex - 1);
		quickSort(sortedIndex + 1, end);
	}
}

quickSort(0, arr.length - 1);
console.log(arr);

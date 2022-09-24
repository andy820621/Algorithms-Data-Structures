let unsorted = [14, -4, 17, 6, 22, 1, -5];

function selectionSort(arr) {
	let smallest, smallestIndex;

	for (let i = 0; i < arr.length - 1; i++) {
		smallestIndex = i;
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < arr[smallestIndex]) smallestIndex = j;
		}

		// swap
		smallest = arr[smallestIndex];
		arr[smallestIndex] = arr[i];
		arr[i] = smallest;
	}

	return arr;
}

console.log(selectionSort(unsorted));

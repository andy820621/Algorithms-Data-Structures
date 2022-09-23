let unsorted = [14, -4, 17, 6, 22, 1, -5];

function insertionSort(arr) {
	let check, i;
	for (let j = 1; j < arr.length; j++) {
		check = arr[j];
		i = j - 1;
		while (i >= 0 && arr[i] > check) {
			arr[i + 1] = arr[i];
			i--;
		}
		arr[i + 1] = check;
	}
	return arr;
}

console.log(insertionSort(unsorted));

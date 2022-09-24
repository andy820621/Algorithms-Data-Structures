// merge two sorted arrays to one
function merge(arr1, arr2) {
	let result = [];
	let i = 0,
		j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}

	return result;
}

function mergeSort(arr) {
	if (arr.length === 1) return arr;

	let middle = Math.floor(arr.length / 2);
	let left = arr.slice(0, middle);
	let right = arr.slice(middle, arr.length);

	return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([15, 3, 17, 18, 35, 11, 0, 36, -336, 1054]));

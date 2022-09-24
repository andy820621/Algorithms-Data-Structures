let heapSize;
let arr = [15, 3, 17, 18, 20, 2, 1, 666];

function buildMaxHeap() {
	heapSize = arr.length - 1;
	for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
		maxHeapify(i);
	}
}

function maxHeapify(index) {
	let largest = index;
	// set index of the leafs
	let left = index * 2 + 1,
		right = left + 1;

	if (left <= heapSize && arr[left] > arr[largest]) {
		largest = left;
	}
	if (right <= heapSize && arr[right] > arr[largest]) {
		largest = right;
	}

	if (largest !== index) {
		let temp = arr[index];
		arr[index] = arr[largest];
		arr[largest] = temp;
		maxHeapify(largest);
	}
}

function heapSort() {
	buildMaxHeap();
	for (let i = arr.length - 1; i >= 0; i--) {
		// exchange arr[0] with arr[i]
		let temp = arr[0];
		arr[0] = arr[i];
		arr[i] = temp;
		heapSize--;
		maxHeapify(0);
	}

	console.log(arr);
}

heapSort(arr);

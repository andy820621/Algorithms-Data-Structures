// function maxSum(arr, len) {
// 	if (len > arr.length) return null;
// 	let start = 0;
// 	let result = -Infinity;
// 	let step = 0;

// 	while (start + len <= arr.length) {
// 		let sum = 0;
// 		for (let i = start; i < start + len; i++) {
// 			sum += arr[i];
// 			step++;
// 		}
// 		if (sum > result) result = sum;
// 		start++;
// 	}
// 	console.log("step: " + step);
// 	return result;
// }
function minSum(arr, len) {
	if (len > arr.length) return null;
	let start = 0;
	let result = Infinity;
	while (start + len <= arr.length) {
		let sum = 0;
		for (let i = start; i < start + len; i++) {
			sum += arr[i];
		}
		if (sum < result) result = sum;
		start++;
	}
	return result;
}

// Better way
function maxSum(arr, len) {
	if (len > arr.length) return null;
	let step = 0;

	let result = 0;
	for (let i = 0; i < len; i++) {
		result += arr[i];
		step++;
	}

	let temValue = result;
	for (let i = len; i < arr.length; i++) {
		temValue += arr[i] - arr[i - len];
		if (temValue > result) result = temValue;
		step++;
	}
	console.log("step: " + step);
	return result;
}

console.log(maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3));
console.log(minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3));
console.log(minSum([2, 7], 3));

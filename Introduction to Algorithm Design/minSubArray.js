// Write a function called minSubLength which accepts two parameters, an array of positive integers and a positive integer. This function should return the minimal length of a continuous subarray – the sum of elements inside this subarray has to be greater than or equal to the positive integer parameter. If subarray not found, then return null.

function minSubArray(arr, sum) {
	if (arr[0] > sum) return 1;

	let start = 0,
		end = 0,
		total = 0,
		minLength = Infinity;

	while (start < arr.length) {
		step++;
		if (total < sum && end < arr.length) {
			total += arr[end];
			end++;
		} else if (total >= sum) {
			let currentLength = end - start;
			if (currentLength === 1) return 1;
			if (minLength > currentLength) minLength = currentLength;

			total -= arr[start];
			start++;
		} else if (end === arr.length) {
			break;
		}
	}

	if (minLength === Infinity) {
		console.log(`Cannot find subarray that can sum up to the given number.`);
		return null;
	}

	console.log(minLength);
	return minLength;
}
minSubArray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 15);

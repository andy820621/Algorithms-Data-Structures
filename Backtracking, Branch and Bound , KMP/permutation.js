const result = [];

function permutation(arr, start) {
	if (start >= arr.length) result.push([...arr]);
	else
		for (let i = start; i < arr.length; i++) {
			let newArr = [...arr];
			// swap
			let temp = newArr[start];
			newArr[start] = arr[i];
			newArr[i] = temp;
			// recursion
			permutation(newArr, start + 1);
		}
}

permutation(["A", "B", "C", "D"], 0);
console.log(result);

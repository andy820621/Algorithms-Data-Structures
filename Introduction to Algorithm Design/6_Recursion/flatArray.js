function flatArray(arr) {
	let result = [];

	helper(arr);
	function helper(arr) {
		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				helper(arr[i]);
			} else {
				result.push(arr[i]);
			}
		}
	}

	return result;
}

let array = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];

console.log(flatArray(array)); // ["a", "b", "c", "d", "e", "f", "g", "h"];

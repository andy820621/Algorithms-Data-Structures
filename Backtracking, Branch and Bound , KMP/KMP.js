function KMP(string, target) {
	const ps_array = findPsArray(target);
	// console.log(ps_array);

	let i = 0,
		j = 0,
		counter = 0,
		startIndexArray = [];

	while (i < string.length) {
		if (string[i] === target[j]) {
			if (j === target.length - 1) {
				counter++;
				startIndexArray.push(i);
				j = 0;
			} else {
				j++;
			}
			i++;
		} else {
			i -= ps_array[(j = 0)];
		}
	}

	// print answer
	console.log(`We can find "${counter}" same strings,`);
	console.log(`their starting index will be at: [${startIndexArray}].`);

	function findPsArray(string) {
		// create array and set index 0 to "-1"
		let ps_array = [-1];

		let n = 0;
		for (let i = 1; i < string.length; i++) {
			if (string[n] !== string[i]) {
				n = 0;
				ps_array.push(0);
			} else {
				ps_array.push(++n);
			}
		}
		// remove end item
		ps_array.pop();

		return ps_array;
	}
}

KMP("abcdabgabcdabck aabbabcdabck", "abcdabck"); // 2
KMP("afsdajskfjjareklasfjarereralkfjarealkjrea;;iot", "re"); // 5

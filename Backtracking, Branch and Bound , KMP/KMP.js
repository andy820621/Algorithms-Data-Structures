function KMP(string, target) {
	const ps_array = findPsArray(target);
	// console.log(ps_array);

	let i = 0,
		j = 0,
		counter = 0,
		startIndexArray = [];

	while (i < string.length) {
		if (string[i] === target[j] && j < target.length) {
			if (j === target.length - 1) {
				counter++;
				startIndexArray.push(i - j);
				j = 0;
			} else {
				j++;
			}
			i++;
		} else {
			i -= ps_array[j];
			j = 0;
		}
	}

	// print answer
	console.log(`We can find "${counter}" same strings,`);
	console.log(`their starting index will be at: [${startIndexArray}].`);

	function findPsArray(string) {
		// create array and set index 0 to "-1", index 1 to 0
		let ps_array = [-1, 0];

		let n = 0;
		for (let i = 1; i < string.length; i++) {
			if (string[n] !== string[i]) {
				if (n !== 0) {
					n = ps_array[n];
					i--;
				} else {
					ps_array.push((n = 0));
				}
			} else {
				ps_array.push(++n);
			}
		}
		// remove end item
		ps_array.pop();

		// console.log(ps_array);
		return ps_array;
	}
}

KMP("abcdabgabcdabck aabbabcdabck", "abcdabck"); // 2
KMP("afsdajskfjjareklasfjarereralkfjarealkjrea;;iot", "re"); // 5
KMP("mississippi", "issip"); // 1
KMP("aabaaabaaac", "aabaaac"); // 1

function LCS(str1, str2) {
	let tableValue = [];
	let tableFrom = [];

	// build table
	for (let i = 0; i <= str1.length; i++) {
		// set tableValue
		tableValue.push([]);
		tableValue[i][0] = 0;
		// set tableFrom
		tableFrom.push([]);
		tableFrom[i][0] = null;
		for (let j = 1; j <= str2.length; j++) {
			// set tableValue
			tableValue[i][j] = i === 0 ? 0 : null;
			// set tableFrom
			tableFrom[i][j] = null;
		}
	}

	// complete the table
	for (let i = 1; i <= str1.length; i++) {
		for (let j = 1; j <= str2.length; j++) {
			if (str1[i - 1] === str2[j - 1]) {
				// set tableValue
				tableValue[i][j] = 1 + tableValue[i - 1][j - 1];
				// set tableFrom
				tableFrom[i][j] = "↖";
			} else {
				if (tableValue[i - 1][j] === tableValue[i][j - 1]) {
					// set tableValue
					tableValue[i][j] = tableValue[i - 1][j];
					// set tableFrom
					tableFrom[i][j] = ["↑", "←"];
				} else {
					// set tableValue
					tableValue[i][j] =
						tableValue[i - 1][j] > tableValue[i][j - 1]
							? tableValue[i - 1][j]
							: tableValue[i][j - 1];
					// set tableFrom
					tableFrom[i][j] =
						tableValue[i - 1][j] > tableValue[i][j - 1] ? "↑" : "←";
				}
			}
		}
	}

	// printer
	function getResult(i, j) {
		const set = new Set();

		printer(i, j, "");
		function printer(i, j, textStack) {
			if (i === 0 || j === 0) return set.add(textStack);

			if (tableFrom[i][j] === "↖") {
				// textStack = textStack.replace(/^/, str1[i - 1]);
				textStack = str1[i - 1] + textStack;
				printer(i - 1, j - 1, textStack);
			} else if (Array.isArray(tableFrom[i][j])) {
				printer(i - 1, j, textStack);
				printer(i, j - 1, textStack);
			} else {
				let index_1 = tableFrom[i][j] === "↑" ? i - 1 : i;
				let index_2 = tableFrom[i][j] === "←" ? j - 1 : j;
				printer(index_1, index_2, textStack);
			}
		}

		return [...set];
	}

	const result = getResult(str1.length, str2.length);

	console.log(result);
	return result;
}

// LCS("ABACABE", "BACCHAE"); // [ 'BACAE' ]
LCS("ATAACGCGCTGCTCGGGT", "TCAATCAGGATCCGCTGA"); // ["TAACGCCGCTG", "TAACGGCGCTG", "TAACGGTGCTG", "TAACGGTCCGG", "TAACGGTCCGT"]
// LCS("TCAATCAGGATCCGCTGA", "ATAACGCGCTGCTCGGGT"); // ["TAACGGTCCGT", "TAACGGTCCGG", "TAACGGTGCTG", "TAACGGCGCTG", "TAACGCCGCTG"]

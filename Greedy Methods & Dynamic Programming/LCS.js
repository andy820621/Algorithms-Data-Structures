function LCS(str1, str2) {
	let tableValue = [];
	let tableFrom = [];
	let result = "";

	for (let i = 0; i <= str1.length; i++) {
		// set tavleValue
		tableValue.push([]);
		tableValue[i][0] = 0;
		// set tavleFrom
		tableFrom.push([]);
		tableFrom[i][0] = null;
		for (let j = 1; j <= str2.length; j++) {
			// set tavleValue
			tableValue[i][j] = i === 0 ? 0 : null;
			// set tavleFrom
			tableFrom[i][j] = null;
		}
	}

	// complete table
	for (let i = 1; i <= str1.length; i++) {
		for (let j = 1; j <= str2.length; j++) {
			if (str1[i - 1] === str2[j - 1]) {
				// set tavleValue
				tableValue[i][j] = 1 + tableValue[i - 1][j - 1];
				// set tavleFrom
				tableFrom[i][j] = "↖";
			} else {
				// set tavleValue
				tableValue[i][j] =
					tableValue[i - 1][j] >= tableValue[i][j - 1]
						? tableValue[i - 1][j]
						: tableValue[i][j - 1];
				// set tavleFrom
				tableFrom[i][j] =
					tableValue[i - 1][j] >= tableValue[i][j - 1] ? "↑" : "←";
			}
		}
	}

	// printer
	function printer(i, j) {
		if (i === 0 || j === 0) return "";

		if (tableFrom[i][j] === "↖") {
			printer(i - 1, j - 1);
			result += str1[i - 1];
		} else {
			let index_1 = tableFrom[i][j] === "↑" ? i - 1 : i;
			let index_2 = tableFrom[i][j] === "←" ? j - 1 : j;
			printer(index_1, index_2);
		}
	}
	printer(str1.length, str2.length);

	console.log(result);
	return result;
}

LCS("ABACABE", "BACCHAE"); // BACAE
LCS("ATAACGCGCTGCTCGGGT", "TCAATCAGGATCCGCTGA"); // TAACGCCGCTG
LCS("TCAATCAGGATCCGCTGA", "ATAACGCGCTGCTCGGGT"); // TAACGGTCCGT

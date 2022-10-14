function recursionLCS(str1, str2) {
	if (str1.length === 0 || str2.length === 0) return 0;

	if (str1[str1.length - 1] === str2[str2.length - 1])
		return (
			1 +
			recursionLCS(
				str1.substring(0, str1.length - 1),
				str2.substring(0, str2.length - 1)
			)
		);
	else
		return Math.max(
			recursionLCS(str1, str2.substring(0, str2.length - 1)),
			recursionLCS(str1.substring(0, str1.length - 1), str2)
		);
}

// console.log(recursionLCS("AGB", "ACB")); // AB: 2
// console.log(recursionLCS("ATAACGCGCTGCTCGGGT", "TCAATCAGGATCCGCTGA")); // TAACGCCGCTG: 11

function simpleLCS(str1, str2) {
	let table = [];
	// set value of all cells to 0
	for (let i = 0; i <= str1.length; i++) {
		table.push(new Array(str2.length + 1).fill(0));
	}
	console.log(table);

	// loop table from String's beginning to String's end, and set values
	for (let i = 1; i <= str1.length; i++) {
		for (let j = 1; j <= str2.length; j++) {
			table[i][j] =
				str1[i - 1] === str2[j - 1]
					? table[i - 1][j - 1] + 1
					: Math.max(table[i][j - 1], table[i - 1][j]);
		}
	}

	return table[str1.length][str2.length];
}

// console.log(simpleLCS("ATAACGCGCTGCTCGGGT", "TCAATCAGGATCCGCTGA")); // 11
console.log(simpleLCS("abc", "def")); // 0

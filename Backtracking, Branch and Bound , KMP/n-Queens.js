function NQueens(n) {
	let result = 0;
	let table = [];
	for (let i = 0; i < n; i++) {
		table.push(new Array(n).fill(null));
	}

	let x = 0,
		y = 0,
		loop = true,
		queenArray = [];

	while (loop) {
		let i = 0;
		let violation = false;

		// check top
		while (i < y && !violation) {
			if (table[i][x] === "Q") {
				violation = true;
			}
			i++;
		}
		// check left
		i = 0;
		while (i < x && !violation) {
			if (table[y][i] === "Q") {
				violation = true;
			}
			i++;
		}
		// check upper left
		i = -1;
		while (x + i >= 0 && y + i >= 0 && !violation) {
			if (table[y + i][x + i] === "Q") {
				violation = true;
			}
			i--;
		}
		// check bottom left
		i = 1;
		while (x - i >= 0 && y + i < n && !violation) {
			if (table[y + i][x - i] === "Q") {
				violation = true;
			}
			i++;
		}

		// if this position can set as "Q"
		if (!violation) {
			table[y][x] = "Q";
			queenArray.push(y);
			if (queenArray.length === n) {
				// console.log(table);
				result++;
				table[y][x] = null;
				queenArray.pop();
				y++;
			} else {
				y = 0;
				x++;
			}
		} // if this position cannot set as "Q"
		else {
			y++;
		}
		violation = false;

		while (y === n) {
			// back to the previous "Q"
			x--;
			if (x < 0) {
				// stop whole while loop
				loop = false;
				break;
			}

			let prevY = queenArray.pop();
			table[prevY][x] = null;
			y = prevY + 1;
		}
	}

	console.log(result);
	return result;
}
// NQueens(4); // 2
// NQueens(5); // 10
NQueens(8); // 92

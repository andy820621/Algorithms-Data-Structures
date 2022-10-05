class HashTable {
	// m = hashtable size
	constructor(size) {
		this.size = size;
		this.table = [];
		for (let i = 0; i < this.size; i++) {
			this.table.push([]);
		}
	}

	// parse string to integer
	parse(string) {
		let result = 0;
		for (let i = 0; i < string.length; i++) {
			result += string.charCodeAt(i);
		}
		return result;
	}

	// division method
	division(key) {
		return key % this.size;
	}
	// multiplication method
	multiplication(key) {
		let parseKey = isNaN(key) ? this.parse(key) : key;

		let A = (Math.sqrt(5) - 1) / 2;
		return Math.floor(this.size * ((parseKey * A) % 1));
	}

	set(key, value) {
		let index = this.multiplication(key);
		this.table[index].push({ key, value });
	}

	get(key) {
		let index = this.multiplication(key);
		return this.table[index].find((item) => item.key === key);
	}

	printAll() {
		console.log(this.table);
	}
}

let hashtable = new HashTable(6);

hashtable.set("white", "#ffffff");
hashtable.set("magenta", "#ff00ff");
hashtable.set("red", "#ff0000");

hashtable.printAll();

console.log(hashtable.get("white"));

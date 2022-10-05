class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = null;
		this.length = 0;
	}

	push(value) {
		let newNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
		} else {
			let currentNode = this.head;
			while (currentNode.next !== null) {
				currentNode = currentNode.next;
			}
			currentNode.next = newNode;
		}
		return ++this.length;
	}

	pop() {
		if (!this.head) {
			return null;
		} else if (this.length === 1) {
			let temp = this.head;
			this.head = null;
			this.length = 0;
			return temp;
		} else {
			let currentNode = this.head;
			while (currentNode.next.next !== null) {
				currentNode = currentNode.next;
			}
			let temp = currentNode.next;
			currentNode.next = null;
			this.length--;
			return temp;
		}
	}

	shift() {
		if (!this.head) {
			return null;
		} else if (this.length === 1) {
			let temp = this.head;
			this.head = null;
			this.length = 0;
			return temp;
		} else {
			let temp = this.head;
			this.head = this.head.next;
			this.length--;
			return temp;
		}
	}

	unshift(value) {
		if (!this.head) {
			this.head = new Node(value);
		} else {
			let temp = this.head;
			let newNode = new Node(value);
			this.head = newNode;
			this.head.next = temp;
		}
		return ++this.length;
	}

	insertAt(index, value) {
		if (index > this.length || index < 0) {
			return null;
		} else if (index === 0) {
			return this.unshift(value);
		} else if (index === this.length) {
			return this.push(value);
		} else {
			let currentNode = this.head;
			while (index > 1) {
				currentNode = currentNode.next;
				index--;
			}
			let newNode = new Node(value);
			newNode.next = currentNode.next;
			currentNode.next = newNode;
			return ++this.length;
		}
	}

	removeAt(index) {
		if (index > this.length - 1 || index < 0) {
			return null;
		} else if (index === 0) {
			return this.shift();
		} else if (index === this.length - 1) {
			return this.pop();
		} else {
			let currentNode = this.head;
			while (index > 1) {
				currentNode = currentNode.next;
				index--;
			}
			let temp = currentNode.next;
			currentNode.next = currentNode.next.next;
			this.length--;
			return temp;
		}
	}

	get(index) {
		if (index > this.length - 1 || index < 0) return null;

		let currentNode = this.head;
		while (index > 0) {
			currentNode = currentNode.next;
			index--;
		}
		return currentNode;
	}

	printAll() {
		if (this.length === 0) {
			console.log("Nothing in this linked List.");
			return;
		}
		let currentNode = this.head;
		while (currentNode !== null) {
			console.log(currentNode.value);
			currentNode = currentNode.next;
		}
	}
}

const linkedList = new LinkedList();

console.log(linkedList.push("BarZ"));
console.log(linkedList.push("Yao Tsu"));
console.log(linkedList.push("Gakki"));
console.log(linkedList.push("Ikura"));
console.log(linkedList.get(-1));

linkedList.printAll();

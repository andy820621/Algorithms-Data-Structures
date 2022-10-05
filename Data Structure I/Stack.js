class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
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

let stack = new Stack();

stack.push("Mike");
stack.push("Luke");
stack.push("Jason");

stack.printAll();

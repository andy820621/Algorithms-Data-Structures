class Node {
	constructor(val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
		this.printer = [];
		this.queue = [];
	}

	insert(node) {
		let x = this.root,
			y = null;

		while (x !== null) {
			y = x;
			// decide move x to it's left or right
			x = node.value < x.value ? x.left : x.right;
		}

		// if x is empty
		if (y === null) {
			this.root = node;
		} else if (node.value < y.value) {
			y.left = node;
		} else {
			y.right = node;
		}
	}

	preOrder(node) {
		if (node !== null) {
			// push root
			this.printer.push(node.value);
			// recursion
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
	}
	inOrder(node) {
		if (node != null) {
			// recursion left
			this.inOrder(node.left);
			// push root
			this.printer.push(node.value);
			// recursion right
			this.inOrder(node.right);
		}
	}
	postOrder(node) {
		if (node !== null) {
			// recursion
			this.postOrder(node.left);
			this.postOrder(node.right);
			// push root
			this.printer.push(node.value);
		}
	}

	breadthFirst(node) {
		if (node == null) return;
		this.queue.push(node);

		// My Solution
		// while (this.queue.length !== 0) {
		// 	// get & remove queue first item
		// 	let tempNode = this.queue.shift();
		// 	if (tempNode == null) return;

		// 	// add value to result array
		// 	this.printer.push(tempNode.value);

		// 	// add child elements to queue
		// 	if (tempNode.left != null) {
		// 		this.queue.push(tempNode.left);
		// 	}
		// 	if (tempNode.right != null) {
		// 		this.queue.push(tempNode.right);
		// 	}
		// }

		// Better Solution
		for (let i = 0; i < this.queue.length; i++) {
			let tempNode = this.queue[i];
			if (tempNode == null) return;

			// add value to result array
			this.printer.push(tempNode.value);

			// add child elements to queue
			if (tempNode.left != null) {
				this.queue.push(tempNode.left);
			}
			if (tempNode.right != null) {
				this.queue.push(tempNode.right);
			}
		}
	}

	searchRecursively(x, value) {
		if (x == null || x.value === value) return x;

		if (value < x.value) {
			return this.searchRecursively(x.left, value);
		} else {
			return this.searchRecursively(x.right, value);
		}
	}
	searchIteratively(x, value) {
		while (x !== null && x.value !== value) {
			x = value < x.value ? x.left : x.right;
		}
		return x;
	}
}

const BST = new BinarySearchTree();

BST.insert(new Node(15));
BST.insert(new Node(6));
BST.insert(new Node(5));
BST.insert(new Node(1));
BST.insert(new Node(13));
BST.insert(new Node(-7));
BST.insert(new Node(3));

BST.breadthFirst(BST.root);
console.log(BST.printer);

console.log(BST.searchIteratively(BST.root, 5));

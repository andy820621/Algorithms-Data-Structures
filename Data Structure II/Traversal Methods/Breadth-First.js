class Node {
	constructor(val) {
		this.value = val;
		this.children = [];
	}
}

const result = [];
function breadthFirst() {
	let queue = [];
	queue.push(root);
	// mySolution
	while (queue.length !== 0) {
		let tempNode = queue.shift();
		result.push(tempNode.value);

		for (let i = 0; i < tempNode.children.length; i++) {
			queue.push(tempNode.children[i]);
		}
	}
	// Teacher Wilson's solution
	// for (let i = 0; i < queue.length; i++) {
	// 	let tempNode = queue[i];
	// 	result.push(tempNode.value);
	// 	for (let j = 0; j < tempNode.children.length; j++) {
	// 		queue.push(tempNode.children[j]);
	// 	}
	// }
}

// Create Tree
const root = new Node(10);
// height 1
root.children.push(new Node(9));
root.children.push(new Node(7));
// height 2
root.children[0].children.push(new Node(8));
root.children[0].children.push(new Node(5));
root.children[0].children.push(new Node(11));
root.children[1].children.push(new Node(1));
root.children[1].children.push(new Node(3));
// height 3
root.children[0].children[0].children.push(new Node(6));
root.children[1].children[0].children.push(new Node(4));
root.children[1].children[0].children.push(new Node(2));

breadthFirst();
console.log(result);

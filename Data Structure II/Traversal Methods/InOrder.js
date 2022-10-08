class Node {
	constructor(val) {
		this.value = val;
		this.children = [];
	}
}

const result = [];
function inOrder(n) {
	if (n.children[0]) inOrder(n.children[0]);
	result.push(n.value);
	for (let i = 1; i < n.children.length; i++) {
		inOrder(n.children[i]);
	}
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

inOrder(root);
console.log(result);

class Node {
	constructor(val) {
		this.value = val;
		this.children = [];
	}
}

const result = [];
function postOrder(n) {
	for (let i = 0; i < n.children.length; i++) {
		postOrder(n.children[i]);
	}
	result.push(n.value);
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

postOrder(root);
console.log(result);

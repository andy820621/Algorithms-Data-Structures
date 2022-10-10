class Node {
	constructor(value) {
		this.value = value;
		this.visited = false;
		this.neighbors = [];
	}
	addNeighbours() {
		for (let i = 0; i < arguments.length; i++) {
			this.neighbors.push(arguments[i]);
		}
	}
}
let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");
let F = new Node("F");
let G = new Node("G");
let H = new Node("H");
let I = new Node("I");
let J = new Node("J");
let K = new Node("K");
let L = new Node("L");
let M = new Node("M");
A.addNeighbours(E, F);
B.addNeighbours(D);
C.addNeighbours(D);
D.addNeighbours(B, C, E, I);
E.addNeighbours(A, D, F, I);
F.addNeighbours(A, E, I);
G.addNeighbours(H, I);
H.addNeighbours(G, I, L);
I.addNeighbours(D, E, F, G, H, J, K, M);
J.addNeighbours(I, M);
K.addNeighbours(I, L, M);
L.addNeighbours(H, K);
M.addNeighbours(I, J, K);

const result = [];
function DFT(node) {
	node.visited = true;
	result.push(node);
	for (let i = 0; i < node.neighbors.length; i++) {
		if (!node.neighbors[i].visited) DFT(node.neighbors[i]);
	}
}

// DFT(A);
// console.log(result.map((node) => node.value));
// expected to get ["A", "E", "D", "B", "C", "I", "F", "G", "H", "L", "K", "M", "J"]

// DFT(H);
// console.log(result.map((node) => node.value));
// expected to get ["H", "G", "I", "D", "B", "C", "E", "A", "F", "J", "M", "K", "L"]

function BFT(startNode) {
	let queue = [];
	queue.push(startNode);

	// solution 1
	for (let i = 0; i < queue.length; i++) {
		if (!queue[i].visited) {
			result.visited = true;
			result.push(queue[i]);
			queue[i].neighbors.forEach((node) => {
				if (!queue.includes(node)) queue.push(node);
			});
		}
	}

	// solution 2
	// while (queue.length !== 0) {
	// 	let firstNode = queue.shift();
	// 	if (!firstNode.visited) {
	// 		firstNode.visited = true;
	// 		result.push(firstNode);
	// 		firstNode.neighbors.forEach((node) => {
	// 			if (!node.visited && !queue.includes(node)) queue.push(node);
	// 		});
	// 	}
	// }
}

BFT(A);
console.log(result.map((node) => node.value));
// expected to get ["A", "E", "F", "D", "I", "B", "C", "G", "H", "J", "K", "M", "L"];

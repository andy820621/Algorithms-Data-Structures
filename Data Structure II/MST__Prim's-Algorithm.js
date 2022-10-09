class Node {
	constructor(value) {
		this.value = value;
		this.visited = false;
		this.edges = [];
	}

	addNeighbour(edge) {
		this.edges.push(edge);
	}
}

const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");
const allNodes = [A, B, C, D, E, F];

class Edge {
	constructor(node1, node2, weight) {
		this.node1 = node1;
		this.node2 = node2;
		this.weight = weight;
		node1.addNeighbour(this);
		node2.addNeighbour(this);
	}
}

const edgeAB = new Edge(A, B, 10);
const edgeAC = new Edge(A, C, 8);
const edgeBD = new Edge(B, D, 6);
const edgeCD = new Edge(C, D, 5);
const edgeCF = new Edge(C, F, 8);
const edgeDF = new Edge(D, F, 3);
const edgeEF = new Edge(E, F, 1);
const edgeDE = new Edge(D, E, 4);
const edgeBE = new Edge(B, E, 7);

const mst = mstPrim(A);
console.log(mst); // expected to get MST is [edgeAC, edgeCD, edgeDF, edgeEF, edgeBD]
const sum = mst.reduce((sum, edge) => sum + edge.weight, 0);
console.log(sum); // expected to get weight's sum = 23

function mstPrim(startNode) {
	let bucket = [];
	let mstEdges = [];

	for (let i = 0; i < startNode.edges.length; i++) {
		bucket.push(startNode.edges[i]);
	}

	let bestEdge = getBestEdge(bucket);

	while (bestEdge !== null) {
		bestEdge.node1.visited = true;
		bestEdge.node2.visited = true;
		mstEdges.push(bestEdge);

		bucket = [];
		// add next turn's edges to the bucket
		allNodes.forEach((node) => {
			if (node.visited)
				node.edges.forEach((edge) => {
					if (!mstEdges.includes(edge)) bucket.push(edge);
				});
		});
		// get new bestEdge, if null finish this while loop, else keep going.
		bestEdge = getBestEdge(bucket);
	}

	return mstEdges;
}

function getBestEdge(bucket) {
	let bestEdge = null;
	while (bestEdge == null && bucket.length !== 0) {
		let index = 0;
		bestEdge = bucket[index];
		// loop bucket to find the smallest edge
		for (let i = 1; i < bucket.length; i++) {
			if (bucket[i].weight < bestEdge.weight) {
				index = i;
				bestEdge = bucket[i];
			}
		}
		// if this bestEdge will make mst become a cyclic tree then remove it from bucket & set bestEdge to null to make sure while loop keep going
		if (bestEdge.node1.visited && bestEdge.node2.visited) {
			bucket.splice(index, 1);
			bestEdge = null;
		}
		// console.log(bestEdge);
	}
	return bestEdge;
}

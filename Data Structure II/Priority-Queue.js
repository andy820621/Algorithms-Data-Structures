class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.queue = [];
	}

	enqueue(value, priority) {
		let newNode = new Node(value, priority);

		// check if the queue is empty
		if (this.queue.length === 0) {
			this.queue.push(newNode);
			return true;
		}

		this.queue.push(newNode);
		let newIndex = this.queue.length - 1;
		let parentIndex = this.getParentIndex(newIndex);
		while (
			parentIndex >= 0 &&
			this.queue[newIndex].priority > this.queue[parentIndex].priority
		) {
			// swap parent and child
			let temp = this.queue[parentIndex];
			this.queue[parentIndex] = this.queue[newIndex];
			this.queue[newIndex] = temp;

			// update index number
			newIndex = parentIndex;
			parentIndex = this.getParentIndex(newIndex);
		}
	}

	dequeue() {
		if (this.queue.length === 0) return null;
		if (this.queue.length === 1) return this.queue.pop();

		// Swap the node to be removed with the last node
		let temp = this.queue.pop();
		this.queue.push(this.queue[0]);
		this.queue[0] = temp;

		// get & remove the node from the end of the queue
		let removeNode = this.queue.pop();
		// recursion
		this.maxHeapify(0);
		return removeNode;
	}

	maxHeapify(index) {
		let largest = index,
			left = this.getLeftIdnex(index),
			right = this.getRightIdnex(index);

		if (
			left <= this.queue.length - 1 &&
			this.queue[left].priority > this.queue[index].priority
		) {
			largest = left;
		}
		if (
			right <= this.queue.length - 1 &&
			this.queue[right].priority > this.queue[largest].priority
		) {
			largest = right;
		}

		if (largest === index) return;
		// swap
		let temp = this.queue[index];
		this.queue[index] = this.queue[largest];
		this.queue[largest] = temp;
		// recursion
		this.maxHeapify(largest);
	}

	getLeftIdnex(index) {
		return index * 2 + 1;
	}
	getRightIdnex(index) {
		return index * 2 + 2;
	}
	getParentIndex(index) {
		return Math.floor((index - 1) / 2);
	}
}

const pq = new PriorityQueue();
pq.enqueue("Eat Breakfast", 5);
pq.enqueue("Learn Java", 2);
pq.enqueue("Learn Python", 7);
pq.enqueue("Buy Testbooks", 8);
pq.enqueue("Watch Netflex", 12);
pq.enqueue("Pay Bills", 15);

while (pq.queue.length > 0) {
	console.log(pq.dequeue());
}

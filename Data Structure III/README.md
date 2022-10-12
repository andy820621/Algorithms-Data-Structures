# Data Structure III

- [Graph Traversal (Depth First, Breadth First)](#graph-traversal-depth-first-breadth-first)
- [Floyd-Warshall Algorithm](#floyd-warshall-algorithm)
- [Dijkstra’s Algorithm](#dijkstras-algorithm)

---

## Graph Traversal (Depth First, Breadth First)

- Traversal means we visited each node of a graph exactly once.
- Two main types of graph traversal algorithms are **Depth-First** and **Breadth-First**.

> See the [Code](DFT%20&%20BFT.js)

## Floyd-Warshall Algorithm

- In computer science, the Floyd–Warshall algorithm is an algorithm for finding all-pairs shortest path problem in a **directed weighted graph** with **positive** or **negative** edge weights.
- The Floyd–Warshall algorithm is an example of **dynamic programming** and was published in its currently recognized form by Robert Floyd in 1962. However, it is essentially the same as algorithms previously published by Bernard Roy in 1959 and also by Stephen Warshall in 1962.

## Dijkstra’s Algorithm

- Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.
- Given a start point, find the shortest path from this node to all other nodes.
- Least-cost paths are calculated for instance to establish tracks of electricity lines or oil pipelines. The algorithm has also been used to calculate optimal long-distance footpaths in Ethiopia and contrast them with the situation on the ground. Dijkstra’s Algorithm is also used in network routing.

**Follow the steps below to implement the method:**

1. Have a function that takes one input – the starting node.
2. Set all values in shortest table to be infinity except for the starting node. (Set this starting node's distance value to 0.)
3. Set the previous object's property to be null.
4. As long as there is something we need to visit, calculate the distance from A to currentNode plus currentNode to neighbor, if it's less than the shortest path, then update the shortest path and previous table and visited list.

![Dijkstra’s Algorithm](Dijkstra%E2%80%99s%20Algorithm.webp)

> See the [Code](Dijkstra%E2%80%99s%20Algorithm.js)

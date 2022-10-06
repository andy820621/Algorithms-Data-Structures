# Data Structure I

### List of Algorithms

1. [Linked List](#1-linked-list)
2. [Stack and Queue](#2-stack-and-queue)
3. [Hashtable](#3-hashtable)

## 1. Linked List

### What is Linked List?

- In computer science, a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next.
- A data structure that contains only head and length property.
- Link list consists of nodes, and each node has a value (number, string, array, or anything) and a pointer to another node or null.

![Linked List](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png)

Click to see the structure of the [Singly-Linked-List](Singly-Linked-List.js) that use Javascript to recreated.

### Advantages of Linked List

- Elements can be inserted into linked lists indefinitely, while an array will eventually either fill up or need to be resized.
- Very fast insertion and deletion compared to Array.

### Disadvantages of Linked List

- They use **more memory** than arrays because of the storage used by their pointers.
- Nodes in a linked list must be **read in order from the beginning** as linked lists are inherently [sequential access](https://en.wikipedia.org/wiki/Sequential_access).
- Nodes are stored noncontiguous, greatly increasing the time periods required to access individual elements within the list, especially with a CPU cache.
- Difficulties arise in linked lists when it comes to reverse traversing. For instance, singly-linked lists are cumbersome to navigate backward and while doubly linked lists are somewhat easier to read, memory is consumed in allocating space for a back-pointer.

![Doubly-Linked-List](https://sebhastian.com/doubly-linked-list-javascript/doubly-linked-list-example.png)

### Difference between Array and Linked List

#### Linked List

- Do Not Have **indices**
- Connection between nodes are a **next**(property) pointer
- Random access is not allowed(Must go through each item before accessing)

#### Array

- Items are indexed in order
- Insertion and deletion are expensive
- Elements can quickly be accessed with a specific index
- Can be one-dimensional or multi-dimensional

### Overview of Linked List

|                                      | Array  | LinkedList |       Method       |
| :----------------------------------- | :----: | :--------: | :----------------: |
| Accessing Elements                   | $O(1)$ |   $O(n)$   |        get         |
| Insert and Remove from the Beginning | $O(n)$ |   $O(1)$   |   shift, unshift   |
| Insert and Remove from the End       | $O(1)$ |   $O(n)$   |     pop, push      |
| Insert and Remove from the Middle    | $O(n)$ |   $O(n)$   | insertAt, removeAt |

## 2. Stack and Queue

- In computer science, stacks and queues are abstract data types.
- The idea of stacks and queues are commonly used in software engineering, such as JavaScript Call Stack and undo/redo button.

### Stack

- The principle of understanding stack is “LIFO” (Last in first out)
- Elements have no index.
- Can only add to the top and remove from the top.
  - If you want to add something to a stack, then you add it to the top. (push)
  - If you want to remove something from a stack, then you remove the top item. (pop)

![Stack](https://cdn.programiz.com/sites/tutorial2program/files/stack.png)

Click to see the structure of the [Stack](Stack.js) that use Javascript to recreated.

### Queue

- The principle of understanding stack is “FIFO” (First in first out)
- Elements have no index.
- Can only add to the back and remove from the front.
  - If you want to add something to a queue, then you add it from the back. (Enqueue)
  - If you want to remove something from a queue, then you remove from the front. (Dequeue)
- **Enqueue** means to add something to the queue, and **dequeue** means remove something from a queue.

![Queue](https://media.geeksforgeeks.org/wp-content/uploads/20220816162225/Queue.png)

### Deque

- Deque is also known as "double-ended queue“. It is sort of like a hybrid of a stack and a queue. You can add and remove elements from either the front or the back -- but not the middle.

![Deque](https://media.geeksforgeeks.org/wp-content/uploads/20220817115055/doubleended.jpg)

## 3. Hashtable

### Hash Function

- In computer science, hash function is a commonly used idea. There’s tons of different hash functions. Ex. Passwords are hashed before storing into database. JavaScript objects and arrays are hashed.
- The principle of a hash function is to convert one value to another.
- From the problem we observed before, let’s think about how to solve it… why not hashed all players ID into a small integer?

#### Hash Function I – Division Method

> m = hashtable size
> n = # of elements to store into hashtable

Division Method:

> Index = Key mod m

##### Collision and Load Factor

- Collision: When two or more objects happen to be hashed into the same index in hashtable.
- Load factor: the ratio of **$\frac{n}{m}$**
  - Usually, the load factor will be a number between 0 and 1. $(0 < \frac{n}{m} < 1)$ => $(0 < n < m)$
  - The smaller the load factor is, the hashtable is likely to have many empty spots, but not too many collisions.
  - The bigger the load factor is, the hashtable is likely to be full and have lots of collisions.

##### Advantage and Disadvantages

- **Advantage** of using division method is FAST.
- **Disadvantages**:

  1. Ideally, Integer m has to be a **prime number** that it **far** enough from $2^𝑃$ (ex: 701), where **$P$** is a positive integer. (Because $10^𝑃$ is divisible by $2^𝑃$, taught in Number Theory)
  2. If naming convention of objects are similar, then it has a chance to get MANY MANY MANY collisions.

#### Hash Function II – Multiplication Method

> m = hashtable size
> n = # of elements to store into hashtable

Multiplication Method:

> Index = [m(key * A % 1)]

**A = $\frac{(\sqrt{5}−1)}{2}$**

> - keyA is an irrational number ($\approx$ 0.618....)
> - By moding 1, we will get a number between 0 and 1
> - By multiplying m, we will get a number between 0 and m – 1

##### Handling Collisions (Chaining)

- No matter what hash function methods we use, we will have collisions.
- When coming across collision, we just store elements into an array. Therefore, our hashtable is actually a “array of arrays”.

##### Hash keys that are not Numbers

**Convert the string to an integer using whatever technique you wish.**

1. The simplest (but not very effective) algorithm is to use the length of the string.
2. Or you could take the sum of all the **ASCII** values of all the characters in the string.
3. Or you could take some combination of the character's position in the string (0...length) and its **ASCII** value, and multiply/add them creative ways

> Click to see the structure of [HashTable](HashTable.js).(with JavaScript)

### Understanding Hashtable

- Assuming the following things are true (which might not be true in real life but > could be close enough):
  > 1. Hash function has $O(1)$ when hashing any keys.
  > 2. We are doing simple uniform hashing, which means that each key that we are > hashing is equally likely to be hashed into any slot of hashtable, independent of > other keys hashing.
- Then,
  > 1. Let’s called the load factor $\frac{n}{m} = \alpha$. If m = $\theta(n)$, then > $\alpha = O(1)$.
  > 2. The running time for hashtable is $O(1 + \alpha)$.

### Real Life Application of Hashtable

- Python has Dictionaries
- JavaScript has Objects, Arrays
- Java (including Android API) has HashSet, HashMap, LinkedHashSet, and LinkedHashMap generic collections.
- Password Hashing

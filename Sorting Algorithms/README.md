# Sorting Algorithms

- Sorting is one of the most fundamental of all algorithms in Computer Science.
- Even though many modern programming languages have built-in sorting functions, it’s still a good thing to know how it works.
- We are going to learn 6 different sorting algorithms. It’s good to know when to use which algorithm, as they excel in some certain cases.

### List of Algorithms

#### I. Complexity is $O(n^2)$

1. [Bubble Sort](#1-bubble-sort)
2. [Insertion Sort](#2-insertion-sort)
3. [Selection Sort](#3-selection-sort)

#### II. Complexity is $O(n\times \log n)$

1. [Merge Sort](#4-merge-sort)
2. [Heap Sort](#5-heap-sort)
3. [Quick Sort](#6-quick-sort)

---

# I. Complexity is $O(n^2)$

## 1. Bubble Sort

- Bubble sort compares adjacent elements and swaps them if they are in the wrong order.
- This simple algorithm performs poorly in real world use and is used primarily as an educational tool. More efficient algorithms such as quicksort, or merge sort are used by the sorting libraries built into popular programming languages such as Python and Java.
- See the [Code](/Sorting%20Algorithms/1_Bubble%20Sort/bubbleSort.js)

  **Performance:**

  > Worst Case Performance: $O(n^2)$  
  > Best Case Performance: $O(n)$  
  > Average performance $O(n^2)$

## 2. Insertion Sort

- Insertion sort is a little bit more efficient than bubble sort in practice. Theoretically, they have the same Big O value.
- The principle of insertion sort is simple. Keeping inserting a new value into a sorted array. Insert it to the correct spot so the sorted array remains sorted.
- See the [Code](/Sorting%20Algorithms/2_Insertion%20Sort/insertionSort.js)

  **Performance:**

  > Worst Case Performance: $O(n^2)$  
  > Best Case Performance: $O(n)$  
  > Average performance $O(n^2)$

## 3. Selection Sort

- The principle of selection sort is – select the smallest value in unsorted array, and then swap it with the left most value in this unsorted array.
- Selection sort is the last “not so efficient” sorting algorithm we will learn in this course.
- See the [Code](/Sorting%20Algorithms/3_Selection%20Sort/selectionSort.js)

  **Performance:**

  > Worst Case Performance: $O(n^2)$  
  > Best Case Performance: $O(n^2)$  
  > Average performance $O(n^2)$

---

# II. Complexity is $O(n\times \log n)$

## 4. Merge Sort

- The principle of merge sort is quite simple. Take advantage of the fact that combining two sorted arrays has O(n) time complexity, using the pointer skill.
- This sorting algorithm is a classic example of “divide and conquer”. (分而治之)
- See the [Code](/Sorting%20Algorithms/4_Merge%20Sort/mergeSort.js)

  **Performance:**

  > Worse Case Performance: $O(n\times \log n)$  
  > Best Case Performance: $O(n\times \log n)$  
  > Average Performance: $O(n\times \log n)$

## 5. Heap Sort

- Heap sort uses **Max Heap** to sort.
- In order to understand our next sorting algorithm, Heap Sort, you must first understand what a "max heap" is. Also, we need to know how max heap algorithm works.
- See the [Code](/Sorting%20Algorithms/5_Heap%20Sort/heapSort.js)

<img src="https://www.geeksforgeeks.org/wp-content/uploads/MinHeapAndMaxHeap.png" alt="Heap Data Structure" width="70%" />

**Performance:**

> Worse Case Performance: $O(n\times \log n)$  
> Best Case Performance: $O(n\times \log n)$ or **$O(n)$**  
> Average Performance: $O(n\times \log n)$

## 6. Quick Sort

- As you know from its name, quick sort is quick.
- Developed by British computer scientist Tony Hoare in 1959 and published in 1961, it is still a commonly used algorithm for sorting.
- If you want to learn quick sort you have to learn **Partition** first.

  > #### Partition
  >
  > - By itself, Partition is not a sorting algorithm, but it is an important subroutine of the Quicksort algorithm. So, to understand Quicksort, you must first understand Partition.
  > - The idea of partition algorithm is to divide the array into 2 parts. Neither part is a sorted array, but the element in the middle is sorted (we found its correct final spot)

- See the [Code](/Sorting%20Algorithms/6_Quick%20Sort/quickSort.js)

**Performance:**

> Worse Case Performance: $O(n^2)$  
> Best Case Performance: $O(n\times \log n)$  
> Average Performance: $O(n\times \log n)$

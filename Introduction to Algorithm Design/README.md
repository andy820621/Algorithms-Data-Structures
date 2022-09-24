# Introduction to Algorithm Design

> **General Guides to Algorithm Design:**  
> Implement some human thinking in algorithms.  
> Don't make the computer do dumb calculation or stupid things just because computer can do it.

### List of Algorithms

1. [Linear Search (Sequential Search)](#1-linear-search-sequential-search)
2. [Binary Search](#2-binary-search)
3. [Counter](#3-counter)
4. [Pointer](#4-pointer)
5. [Sliding Window](#5-sliding-window)
6. [Recursion](#6-recursion)

## 1. Linear Search (Sequential Search)

- It’s an algorithm that sequentially checks each element of the list until a match is found or the whole list has been searched.
- Probably the easily algorithm we will learn in this course.
- See the [Code](/Introduction%20to%20Algorithm%20Design/0_Linear%20Search/app.js)

  > **Performance:**
  >
  > Worst Case Performance: O(n)  
  > Best Case Performance: O(1)  
  > Average performance O(𝑛/2)

## 2. Binary Search

- Binary search is a search algorithm that finds the position of a target value within a sorted array.
- More efficient than linear search, but only works with sorted data set.
- See the [Code](/Introduction%20to%20Algorithm%20Design/2_Binary%20Search/app.js)

  > **Performance:**
  >
  > Worst Case Performance: O(log⁡𝑛)  
  > Best Case Performance: O(1)  
  > Average performance O(log⁡𝑛)

## 3. Counter

- This is a general skill when doing algorithm design. Counter is not a formal name. Name is different everywhere, but the idea is the same.
- Using a counter object will reduce the complexity of algorithms.
- See the [Code](/Introduction%20to%20Algorithm%20Design/3_Counter)

## 4. Pointer

- This is a general skill when doing algorithm design. Pointer is not a formal name. Name is different, but the idea is the same everywhere.
- It helps reduce the complexity of algorithms.
- See the [Code](/Introduction%20to%20Algorithm%20Design/4_Pointer)

## 5. Sliding Window

- This is a well-known algorithm.
- Generally speaking, a sliding window is a sub-list that runs over an underlying collection. For example, if you have an array like:
- See the [Code](/Introduction%20to%20Algorithm%20Design/5_Sliding%20Window/app.js)

  ```
  [a, b, c, d, e, f, g, h]
  Then, a sliding window of size 3 would run over it like
  [a, b, c]
      [b, c, d]
          [c, d, e]
              [d, e, f]
                  [e, f, g]
  ```

## 6. Recursion

- A function that calls itself.
- Recursion is using a data structure called “stack”. When we are calling a function inside another function, we are on the call stack.
- Recursion is also a mathematical relation in sequences.
- See the [Code](/Introduction%20to%20Algorithm%20Design/6_Recursion)

  > **Fibonacci Sequence is defined by:**
  >
  > F(0) = 0  
  > F(1) = 1  
  > F(n) = F(n – 1) + F(n – 2)
  >
  > F = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....]

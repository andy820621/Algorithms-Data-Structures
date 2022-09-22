# Introduction to Algorithm Design

## List of Algorithms

1. [Linear Search (Sequential Search)](#linear-search-sequential-search)
2. [Binary Search](#binary-search)
3. [Counter](#counter)
4. [Pointer](#pointer)
5. [Sliding Window](#sliding-window)
6. [Recursion](#recursion)

### Linear Search (Sequential Search)

- It’s an algorithm that sequentially checks each element of the list until a match is found or the whole list has been searched.
- Probably the easily algorithm we will learn in this course.

  > **Performance:**
  > Worst Case Performance: O(n)  
  > Best Case Performance: O(1)  
  > Average performance O(𝑛/2)

### Binary Search

- Binary search is a search algorithm that finds the position of a target value within a sorted array.
- More efficient than linear search, but only works with sorted data set.

  > **Performance:**
  > Worst Case Performance: O(log⁡𝑛)  
  > Best Case Performance: O(1)  
  > Average performance O(log⁡𝑛)

> **General Guides to Algorithm Design:**
> Implement some human thinking in algorithms.
> Don't make the computer do dumb calculation or stupid things just because computer can do it.

### Counter

- This is a general skill when doing algorithm design. Counter is not a formal name. Name is different everywhere, but the idea is the same.
- Using a counter object will reduce the complexity of algorithms.

### Pointer

- This is a general skill when doing algorithm design. Pointer is not a formal name. Name is different, but the idea is the same everywhere.
- It helps reduce the complexity of algorithms.

### Sliding Window

- This is a well-known algorithm.
- Generally speaking, a sliding window is a sub-list that runs over an underlying collection. For example, if you have an array like:

  ```
  [a, b, c, d, e, f, g, h]
  Then, a sliding window of size 3 would run over it like
  [a, b, c]
      [b, c, d]
          [c, d, e]
              [d, e, f]
                  [e, f, g]
  ```

# Backtracking & Branch and Bound & KMP

## Backtracking

- Backtracking is a general algorithm for finding all (or some) solutions to some computational problems, notably constraint satisfaction problems, that incrementally builds candidates to the solutions, and **abandons** a candidate (**backtracks**) as soon as it determines that the candidate cannot possibly be completed to a valid solution.
- Backtracking is considered as one of the BRUTE FORCE solutions.
- Backtracking is often much faster than brute force enumeration of all complete candidates, since it can eliminate many candidates with a single test.

> See the [Code](permutation.js)

### 8 Queens Puzzle

- The eight queens puzzle is the problem of placing eight chess queens on an 8×8 chessboard so that no two queens threaten each other; thus, a solution requires that no two queens share the same row, column, or diagonal.
- In general, we want to know how many solutions are there in a N Queens puzzle.

> See the [Code](n-Queens.js)

## Branch and Bound Algorithm

- Branch and bound is an algorithm design paradigm which is generally used for solving **combinatorial optimization** problems. These problems are typically **exponential** in terms of time complexity $(n\ items => 2^n)$ and may require exploring all possible permutations in worst case. The Branch and Bound Algorithm technique solves these problems relatively quickly.
- Before enumerating the candidate solutions of a branch, the branch is checked against upper or lower estimated bounds on the optimal solution, and is discarded if it cannot produce a better solution than the best one found so far by the algorithm.

> $*$ If a problem can be solved by BRUTE FORCE with backtracking, then the optimization solution can be found by branch and bound.

### 0/1 Knapsack Problem

- 0/1 Knapsack problem means finding the maximum profit choice of items with the condition that we either take an item into our bag or not.
- Potential Solutions are:
  1. Brute Force
  2. Backtracking (Optimize the Brute Force Solution)
  3. Branch and Bound

## Difference between Backtracking & Branch and Bound

<table>
    <thead>
        <tr>  
            <th>Parameter</th>
            <th>Backtracking</th>
            <th>Branch and Bound</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td>Approach</td>
        <td>Backtracking is a general algorithm for finding all (or some) solutions to some computational problems. (<b>constraint satisfaction</b> problems)</td>
        <td>Branch-and-Bound is used to solve <b>combinatorial optimization</b> problems. These problems are typically <b>exponential</b> in terms of time complexity.</td>
      </tr>
      <tr>
        <td>Traversal</td>
        <td>DFS (Depth First Search)</td>
        <td>BFS (Breadth First Search)</td>
      </tr>
      <tr>
        <td>Function</td>
        <td>Feasibility Function</td>
        <td>Feasibility Function <br>Bounding Function</td>
      </tr>
      <tr>
        <td>Problems</td>
        <td>Backtracking is used for solving <b>Decision Problem</b>. </td>
        <td>Branch-and-Bound is used for solving <b>combinational optimization</b> Problem.</td>
      </tr>
      <tr>
        <td>Applications</td>
        <td>Useful in solving <b>N-Queen</b> Problem, <b>Hamilton Cycle</b>. </td>
        <td>Useful in solving <b>0/1 Knapsack Problem</b>, <b>Travelling Salesman Problem</b>.</td>
      </tr>
    </tbody>
    
</table>

## Knuth-Morris-Pratt String Matching

- In computer science, the Knuth–Morris–Pratt string-searching algorithm (or KMP algorithm) searches for occurrences of a word within a main text string by employing the observation that when a mismatch occurs, the word itself embodies sufficient information to determine where the next match could begin, thus bypassing re-examination of previously matched characters.

![Schematic diagram of the process of KMP comparison](https://miro.medium.com/max/828/1*zih18lLx2ibPlf1FgoNj-A.gif)

> See the [Code](KMP.js)

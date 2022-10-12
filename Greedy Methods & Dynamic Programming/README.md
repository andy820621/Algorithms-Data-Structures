# Greedy Methods & Dynamic Programming

- [Greedy Methods](#greedy-methods)
- [Dynamic Programming](#dynamic-programming)
  - [Longest Common Subsequence (LCS)](#longest-common-subsequence-lcs)
  - [Deeper look of Dynamic Programming](#deeper-look-of-dynamic-programming)
    - [Meaning of Dynamic Programming](#meaning-of-dynamic-programming)
    - [Multi-Stage Graph](#multi-stage-graph)

## Greedy Methods

- "Greedy" algorithms are a class of algorithms that make choices based on what appears best at the moment, rather than considering the data as a whole. The greedy approach works for some problems, not so well for others.
- **Huffman Encoding**, **Minimal Spanning Tree**(Both **Kruskal** and **Prim**), and **Dijkstra’s Algorithms** are **greedy algorithms**. As you study these algorithms, you should notice that the decisions made, and data structures created, are based on only a subset of the data at any given time. And yet they still arrive at globally-optimal solutions. That is the Greedy way.
- Each step of a "greedy" algorithm only considers what seems best at the moment, rather than looking at the data as a whole.

## Dynamic Programming

### Longest Common Subsequence (LCS)

- A common substring is a collection of contiguous letters that appear in two strings.
- A common subsequence is any collection of letters that appear IN THE SAME ORDER, but not necessarily contiguously, in two strings.
  > $*$ Please do not confuse the term "substring" and "subsequence".
- For example, in the strings **ABCDE** and **ACE** the longest substring is BAC, while the longest subsequence is **ACE**.

1. Create a table

<div class="table table-1">

|        | ""  |  A   |  B   |  C   |  D   |  E   |
| ------ | :-: | :--: | :--: | :--: | :--: | :--: |
| **""** |  0  |  0   |  0   |  0   |  0   |  0   |
| **A**  |  0  | null | null | null | null | null |
| **C**  |  0  | null | null | null | null | null |
| **E**  |  0  | null | null | null | null | null |

</div>

2. Loop to complete the table

<div class="table table-2">

|        | ""  |   A   |   B   |   C   |   D   |   E   |
| ------ | :-: | :---: | :---: | :---: | :---: | :---: |
| **""** |  0  |   0   |   0   |   0   |   0   |   0   |
| **A**  |  0  | 1 (↖) | 1 (←) | 1 (←) | 1 (←) | 1 (←) |
| **C**  |  0  | 1 (↑) | 1 (←) | 2 (↖) | 2 (←) | 2 (←) |
| **E**  |  0  | 1 (↑) | 1 (←) | 2 (↑) | 2 (←) | 3 (↖) |

</div>

3. Then, we can get the Longest Subsequence is **"ACE"**

> - **See the [simpleLCS](simpleLCS.js)**: use **recursion** to implement the **simple** Longest Common Subsequence method which can get the longest sebsequence length.
> - **See the [LCS](LCS.js)**: use **Dynamic Programming** to implement the Longest Common Subsequence method.

### Deeper look of Dynamic Programming

- Dynamic Programming algorithms, like the **LCS** algorithm, take a very **"global"** approach to problem-solving. (Compared with Greedy Method, which **makes decision based on the current situation**.)
- Dynamic Programming algorithm solves every possible **subproblem** before producing its solution. (By doing this, we won’t have duplicate works.)
- While effective, dynamic programming is overkill for some types of problems. In some cases, a simpler, more efficient algorithm will still find the right answer.

#### Meaning of Dynamic Programming

- **Dynamic** simply means "**changing“**. The table of sub-solutions is ever growing as the algorithm proceeds.
- **Programming** here does NOT refer to writing computer code. Instead, it refers to making **a detailed record of something**. Example: when you go to a play or a concert, the booklet or flyer you're given as you enter the theater is called a "program". It's a list of all the songs, acts, artists, etc. involved in the production.

#### Multi-Stage Graph

![multistage graph](multistage%20graph.png)

**Use Dynamic Programming to solve this graph:**

<table>
    <thead>
        <tr>  
            <th></th>
            <th>stage1</th>
            <th colspan="3">stage2</th>
            <th colspan="2">stage3</th>
            <th>stage4</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>S</td>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td>D</td>
        <td>E</td>
        <td>T</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>S</td>
        <td>0</td>
        <td>1(S)</td>
        <td>2(S)</td>
        <td>7(S)</td>
        <td>
          <b>4(A)</b><br>
          6(B)
        </td>
        <td>
          <b>7(A)</b><br>
          12(B)<br>
          10(C)
        </td>
        <td>
          <b>12(D)</b><br>
          14(E)<br>
          17(C)
        </td>
      </tr>
    </tbody>
</table>

> We can get the result is **12 (S → A → D → T)**

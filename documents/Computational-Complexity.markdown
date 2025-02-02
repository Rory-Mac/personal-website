---
layout: narrow
title: Computational Complexity
---
<h4>Computational Complexity</h4>
<p>An algorithm is an instance of information processing from input to output. Input-output and information proccessing can be considered
equivalent to operands and operation respectively. The number of operations required for an algorithm to arrive at an output may vary 
across inputs, as may the size of intermediate operands. Time complexity acts as a measure of the number of operations expected across 
inputs. Space complexity acts as a measure of the size of intermediate operands expected across inputs. These measures are defined with
respect to some primitive operand and operation, for instance bit-shifts on binary digits, or arithmetic operators on natural numbers.</p>
<p>There are different ways of creating expectation of complexity based of the encountered operations and operand sizes of individual
inputs. Consider an algorithm for which there exist two inputs, one that requires significant computation to derive an output, and one that
requires nearly none. Suppose the costly input is encountered in an extreme minority of cases. In this scenario, best-case complexity creates
the expectation of nearly no cost. Worst-case complexity creates the expectation of significant cost. Average-case complexity creates the
expectation of half the cost of the worst-case scenario. Amortized-case complexity creates the expectation of nearly no cost. This is
because amortized complexity weighs each input with a probability of occurrence before computing the average-case complexity.</p>
<p>Complexity can be more formally defined with big <em>O</em> notation. 
\[f(x) = O(g(x)), \>\>\> x \rightarrow \infty\]
\[ \equiv \]
\[|f(x)| \leq M|g(x)|, \>\> \forall \> x \geq x_0, \>\> M \in \mathbb{R}^{+}, \> x_0 \in \mathbb{R}\]
We say that \(f(x)\) is of the order of \(g(x)\). This order is synonymous to the notion of a complexity class, that is the set of 
algorithms \(f(x)\) for which \(f(x) = O(g(x))\) is said to belong to the complexity class \(g(x)\). A problem exists as an 
input-output map. The complexity of any algorithm that computes the solution to a problem exists as an upper bound to the complexity of
that problem. A problem is reducible to another problem if there exists a function that maps every well-formed input of one to the other. 
\[\exists f (x \in X \iff f(x) \in Y \, \>\> \forall x \in \Sigma^{*}) \rightarrow (X \> ReducesTo \> Y) \]
If every problem in a complexity class \(C\) can be reduced to a problem \(X\), \(X\) is said to be hard for that complexity class, and 
complete for that complexity class if \(X \in C\).</p>
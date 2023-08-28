---
layout: narrow
title: Digital Logic
---
<h4>Digital Logic</h4>
<p>Digital computation imitates biological computation. Computation is perception of the world, description of the perception, and evaluation of the description.
Let's attempt to perform the simplest computation by perceiving the simplest world. In this simplest world we perceive something, or nothing, i.e. \(\exists x(x=x)\) 
or \(\nexists x(x=x)\). We describe our perception
with a proposition, i.e. we propose that we perceive something, or that we perceive nothing, and denote this proposition \(P\). We evaluate our description to be true or false. The
truth table represents a set of evaluations for a set of possible propositions.
creating a state diagram.
\[
  \begin{array}{c | c | c}
  P & & \neg \\
  \hline
  T & T & F\\
  F & F & T\\
  \end{array}
\]
We can create a state diagram where nodes represent propositions and edges represent logical connectives (evaluations). Thus, a run on the state diagram represents
either the formulation or the evaluation of an expression.
<img src="/Assets/images/simplest_language_closeup.png" width="40%" height="100%">
If we are to observe that \(\exists y(y = y, y \neq x)\) then the propositions \(P\), \(Q\) follow for the existence of \(x\), \(y\) respectively.
Our truth table extends itself to a new set of possible propositions and evaluations.
\[
  \begin{array}{| c | c | c | c | c | c | c | c | c | c | c | c | c | c | c | c }
  P & Q & T & \lor & \leftarrow & P & \rightarrow & Q & ↔ & \land & ↑ & ⊕ & \neg Q & ↛  & \neg P & ↚  & ↓ & F\\
  \hline
  T & T & T & T & T & T & T & T & T & T & F & F & F & F & F & F & F & F\\
  T & F & T & T & T & T & F & F & F & F & T & T & T & T & F & F & F & F\\
  F & T & T & T & F & F & T & T & F & F & T & T & F & F & T & T & F & F\\
  F & F & T & F & T & F & T & F & T & F & T & F & T & F & T & F & T & F\\
  \end{array}
\]
Our state diagram has evolved substantially. There now exist sixteen possible initial expressions for sixteen possible logical connectives between our propositions \(P\)
and \(Q\). There exist 17 edges between each node and itself for each binary connective plus the identity unary connective. There exist 17 edges between each node and
each other node for each binary connective plus negation. Again, a run through the state diagram represents formulation or evaluation of an expression.
<img src="/Assets/images/propositional_logic.png" width="100%" height="100%"></p>
<p>In terms of computation, few functions are necessary to define beyond those covered so far, since any \(n\)-ary logic connective can be broken down into a sequence of binary logic connectives,
and Conjunctive Normal Form means that the logic of any boolean function can be implemented through AND, OR and NOT logic alone. One exception is that of the multiplexor
and demultiplexor, which use selector bits to route one input to a set of outputs, or one output from a set of inputs, respectively.
\[
  \begin{array}{| c | c | c | c | c }
  s & P & Q \\
  \hline
  T & T & T & T\\
  T & T & F & F\\
  T & F & T & T\\
  T & F & F & F\\
  F & T & T & T\\
  F & T & F & T\\
  F & F & T & F\\
  F & F & F & F\\
  \end{array}
  
  \qquad

  \begin{array}{| c | c | c | c }
  s & P \\
  \hline
  T & T & FT \\
  T & F & FF \\
  F & T & TF \\
  F & F & FF \\
  \end{array}
\]
<p>Our contemplation so far covers propositional logic. This means that by encoding the the truth/falsity of our propositions with electric signals, and using 
configurations of silicon to implement the logic of our logic connectives, we can build a computer that can formulate and evaluate any expression in propositional
logic. To allow our computer to perform basic arithmetic, we need only implement the logic of two more truth-table, that of the half-adder and full-adder. This nicely
follows from the blue groupings highlighted above. The truth or falsity of a proposition in the case of arithmetic does not represent the existence/non-existence of
an entity, but rather the existence/non-existence of a group of entities of size \(2^{n-1}\) for the \(n^{th}\) binary input:
\[
  \begin{array}{| c | c | c | c }
  P & Q & s & c \\
  \hline
  T & T & F & T \\
  T & F & T & F \\
  F & T & T & F \\
  F & F & F & F \\
  \end{array}

  \qquad

  \begin{array}{| c | c | c | c | c }
  c_{in} & P & Q & s & c_{out} \\
  \hline
  T & T & T & T & T \\
  T & T & F & F & T \\
  T & F & T & F & T \\
  T & F & F & T & F \\
  F & T & T & F & T \\
  F & T & F & T & F \\
  F & F & T & T & F \\
  F & F & F & F & F \\
  \end{array}
\]
</p>
<p>Our hypothetical computer, although useful, lacks any form of memory. By introducing memory, we substitute propositional logic for sequential logic, and move towards
automata theory.</p>
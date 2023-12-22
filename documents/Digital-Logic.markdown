---
layout: narrow
title: Digital Logic
---
<h4>Digital Logic</h4>
<p>Digital computation imitates biological computation. Computation is perception of the world, description of the perception, and evaluation of the description.
Let's attempt to perform the simplest computation by perceiving the simplest world. In this simplest world we perceive either something or nothing,
i.e. \(\exists x(x=x)\) or \(\nexists x(x=x)\). We describe our perception with a proposition, and denote this proposition \(P\), either
we propose the existence of something, or the non-existence of something. We evaluate our proposition, and express our evaluation as a 
truth table.
\[
  \begin{array}{c | c | c}
  P & & \neg \\
  \hline
  T & T & F\\
  F & F & T\\
  \end{array}
\]
We can create a state diagram where nodes represent propositions and edges represent logical connectives (evaluations). A run on this state
diagram represents either the formulation or the evaluation of an expression in our simplified language of propositional logic.
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
<p>Conjunctive Normal Form is the observation that any truth table can be expressed as a sum of products or product of sums which, using
AND, OR, and NOT connectives only. Also note that any \(n\)-ary logic connective can be expressed as a sequence of binary logic connectives.
Another truth-table that proves fundamental in computation is that of the multiplexor and demultiplexor, which route many inputs to one
output, or one input to many outputs, respectively.
\[
  \begin{array}{| c | c | c | c | c }
  S & P & Q \\
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
  S & P \\
  \hline
  T & T & F \; T \\
  T & F & F \; F \\
  F & T & T \; F \\
  F & F & F \; F \\
  \end{array}
\]
<p>By encoding our propositions as electric signals, and implementing the logical connectives that evaluate them in silicon, we can 
create a digital computer to formulate and evaluate any expression in propositional logic. To add basic arithmetic we need only introduce
the truth-tables of the half-adder and full-adder. In these truth-tables the truth or falsity of a proposition does not represents the
existence or non-existence of the observation of a group of things. This follows nicely from the blue-highlighted groupings we made above. 
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
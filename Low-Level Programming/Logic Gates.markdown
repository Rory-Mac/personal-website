---
layout: default
mode: narrow
title: Logic Gates
---
<h4>Logic Gates</h4>
<p>Logic gates are the building blocks of digital circuits designed to compute: to take an input, and provide an output. As the most fundamental building blocks of
computers, logic gates enact the most fundamental forms of computation. Lets start with set theory, grounded in the observation that entities exist and can be grouped.
There doesn't seem to be an observation more axiomatic than that. Perhaps the most axiomatic observation is observation of the identity law, which can be formalised like
so, \[ \exists x(x = x). \]</p>
<p>Let's call this a proposition, namely the proposition that there exists \(x\) equal to itself. We can then infer from our observation 
of the existence or non-existence of \(x\), that
\[
    \begin{align*}
    &P \rightarrow Q, P \quad \\
    \therefore\ &Q \quad
    \end{align*}
\]

For our simple example, \(P\) represents the initial observation of the existence of \(x\) and \(Q\) represents the secondary observation
of the existence of \(x\). Our 'if-then' inference will be considered true until we perceive the initial existence of \(x\) and we dont 
perceive the secondary existence of \(x\). Each observation can be considered a 'world' expressed as a row in a binary truth table:
\[
  \begin{array}{|c c|c|}
  p & q & p \rightarrow q\\
  \hline
  T & T & T\\
  T & F & F\\
  F & T & T\\
  F & F & T\\
  \end{array}
\]

If we have just one proposition and one conclusion, we have just one unary operator, the negation operator, so that if the existence of \(x\)
was observed, then the non-existence of \(x\) was not observed, and if the non-existence of \(x\) was observed, the existence of \(x\) was 
not observed:
\[
  \begin{array}{|c | c|}
  p & \neg p\\
  \hline
  T & F\\
  F & T\\
  \end{array}
\]
If we have two propositions and one conclusion, we have 16 possible operators:
\[
  \begin{array}{| c | c | c | c | c | c | c | c | c | c | c | c | c | c | c | c }
  p & q & 1 & \lor & \leftarrow & p & \rightarrow & q & ↔ & \land & ↑ & ⊕ & \neg q & ↛  & \neg p & ↚  & ↓ & 0\\
  \hline
  T & T & T & T & T & T & T & T & T & T & F & F & F & F & F & F & F & F\\
  T & F & T & T & T & T & F & F & F & F & T & T & T & T & F & F & F & F\\
  F & T & T & T & F & F & T & T & F & F & T & T & F & F & T & T & F & F\\
  F & F & T & F & T & F & T & F & T & F & T & F & T & F & T & F & T & F\\
  \end{array}
\]
These operators are (from left to right), identity, or, converse implication, premise one, implication, premise two, if and only if, and, nand, 
xor, premise two negation, non-implication, premise one negation, converse non-implication, nor, and null. We can visualise these
operators as groupings of worlds:
<img src="/Assets/images/gate_logic.png" width="100%" height="100%">
If we have \(n\) propositions and one conclusion there exist \(2^{2^n}\) operators we could possibly define. The most useful, as visualised
above, include logical unary operators, logical binary operators, and the unique logic of the multiplexor, which introduces a 
selector bit to select an input value as output,
\[
  \begin{array}{| c | c | c | c | c }
  s & p & q \\
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
\]
Similarly, there exists the demultiplexor, which uses a selector bit to direct the input-bit to one of a set of output-bits,
\[
  \begin{array}{| c | c | c | c }
  s & p \\
  \hline
  T & T & FT \\
  T & F & FF \\
  F & T & TF \\
  F & F & FF \\
  \end{array}
\]
In our visualisation we can observe that our defined logical connectives are a partially ordered finite set, and so we can create a Hasse
diagram. This helps visualise logical equivalencies within the system: 
<img src="/Assets/images/logic_connectives.png" width="100%" height="100%"></p>
<p>Thus, if we encode our propositions in electric signals, and our logical connectives in silicon to transform said electric 
signals, then we can build a computer to evaluate any statement in propositional logic.</p>

<!--
Simulate gates in propositional Logic
First order logic (+ logic gates)
Second order logic (+ logic gates)
ZFC (+ logic gates)
Turing machine (to compute any algorithm)
-->
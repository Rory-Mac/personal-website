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
signals, then we can build a computer to evaluate any statement in propositional logic. Note that we can evolve the logical connectives
in this structure from binary operators to ternary, quaternary or even \(n\)-ary operators, by extending the two-dimensional truth-tables
represented by the existence/non-existence of an entity, into \(n\) to represent the \(n\)-terms being operated on. Despite this 
extensibility, the computer would not yet be able to evaluate basic arithmetic, which is instead formalised through predicate logic, an 
extension of propositional logic. Predicate logic introduces existential quantifiers, universal quantifiers, variables, functions, and
predicates, in addition to the logical connectives of propositional logic. An example of a formula formulated in the language of predicate logic:
\[ \forall x \forall y (P(f(x)) \rightarrow \neg (P(x) \rightarrow Q(f(y), x, z))) \]</p>
<p>Functions and variables are terms in this language. Variables are denoted by variable symbols such as \(x\), \(y\),
 \(z\), etc, and can be thought of as observations of the existence or non-existence of an entity, just as they were in propositional logic.
Functions are denoted by function symbols with parenthesis containing a set of terms, such as \(f(x, y, z)\), where \(x,y,z\) represent
terms rather than variable symbols, that themselves could be functions or variable symbols, creating a recurrence that terminates at the
observed existence or non-existence of each variable. Formulas in the language of predicate logic are defined by the following rule set:
<ul>
  <li>Predicate symbols: \(P(t_1, ..., t_n)\) is a formula if \(P\) is an n-ary predicate and \(t_1, ..., t_n\)
  are terms.</li>
  <li>Negation: if \(\varphi\) is a formula, then \(\neg \varphi\) is a formula.</li>
  <li>Logical connectives: if \(\varphi\) and \(\psi\) are formulas then \((\varphi \; ? \; \psi)\) is a formula for some logical connective \(?\).</li>
  <li>Quantifiers: if \(\varphi\) is a formula, then \(\forall x \varphi\) and \(\exists x \varphi\) are formulas.</li>
</ul>
Predicates and quantifiers are the only terms in the language that extend upon our previously formalised structure. Assuming a finite 
number of observations for which a universal quantifier refers to, we can use a simple n-ary 'and' connective to determine if the predicate
for all observations evaluates to true. An n-ary 'or' would similarly determine the truth of an existential quantifier.</p>
<p>We can define a new truth table for a half-adder, where the truth of an input doesn't represent the observed existence/non-existence of 
an entity but rather the observed existence/non-existence of a group of entities of size \(2^n-1\) for \(n\) binary inputs:
\[
  \begin{array}{| c | c | c | c }
  p & q & s & c \\
  \hline
  T & T & F & T \\
  T & F & T & F \\
  F & T & T & F \\
  F & F & F & F \\
  \end{array}
\]
We can then define the truth-table of a full-adder to include the input-bit carried from the previous sum: 
\[
  \begin{array}{| c | c | c | c | c }
  c_{in} & p & q & s & c_{out} \\
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
<p>This hypothetical computer, although useful, lacks a form of memory. Upon introducing memory, we depart from the forms of logic dicussed
thus far, and move towards automata theory.</p>
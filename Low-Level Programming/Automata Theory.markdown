---
layout: narrow
title: Automata Theory
---
<h4>Automata Theory</h4>
<p>Any statement in propositional logic maps to a boolean function that can be expressed in conjunctive normal form (CNF). 
Consider the CNF of a full adder:
\[
  \begin{array}{| c | c | c | c | c }
  c_{in} & p & q & s & c_{out} \\
  \hline
  T & T & T & T & T & A \land B \land C \\
  T & T & F & F & T & A \land B \land \overline C \\
  T & F & T & F & T & A \land \overline B \land C \\
  T & F & F & T & F & A \land \overline B \land \overline C \\
  F & T & T & F & T & \overline A \land B \land C \\
  F & T & F & T & F & \overline A \land B \land \overline C \\
  F & F & T & T & F & \overline A \land \overline B \land C \\
  F & F & F & F & F & \overline A \land \overline B \land \overline C \\
  \end{array}
\]
\[
  \quad s \equiv (A \land B \land C) \lor (A \land \overline B \land \overline C) \lor (\overline A \land B \land \overline C) \lor 
  (\overline A \land \overline B \land C) \quad \\
\]
\[
  \quad c_{out} \equiv (A \land B \land C ) \lor (A \land B \land \overline C) \lor (A \land \overline B \land C) \lor
  (\overline A \land B \land C) \quad \\
\]
The logical expression can be simplified with the laws of boolean algebra to find a more optimal expression, to then be implemented in 
a digital circuit. This logic sits within the category of combinational logic: input bits are combined by a set of logical connectives to
arrive at output bits. By adding memory, we introduce the concept of the finite state machine. State means memory, transformed by
state-transitions from timestep to timestep as defined by some clock cycle. Combinational circuits have a propagation delay: a time
taken for inputs to map to stable outputs in the digital circuit. The clock cycle needs to exceed the longest 
propagation delay within the state machine for the state machine to be synchronised. We can express the state machine mathematically 
using a 5-tuple.
        \[ M = \langle \Sigma, S, S_0, \delta, F \rangle \]
\( \quad \Sigma \) is a non-empty finite set of symbols belonging to an alphabet<br>
\( \quad S\) is a non-empty finite set of states<br>
\( \quad S_0\) is an initial state belonging to S<br>
\( \quad \delta\) is a state-transition function \(\delta : S \times \Sigma \rightarrow S\)<br>
\( \quad F\) is a set of states considered final</p>
<p>A 'run' in the finite state machine is defined as an ordered set \( q_0, q_1, \dots, q_n \) where \(q_i \in Q\) and \(q_i = \delta(q_{i-1}, a_i)\).
Consider the following example state machines. The first defines the grammar of a binary alphabet that excludes all binary 
words with an odd number of zeros. The second defines an arbitrary grammar for a seven-character alphabet.</p>
<p><img src="/Assets/images/dfa1.png" width="100%" height="100%"></p>
<p>Finite state machines read and evaluate regular languages. If a given input is fed to a state machine that terminates succesfully, then 
that input is a grammatically valid expression in the regular language that state machine defines. A regular language is a language 
defined by a regular expression. A regular expression is a sequence of characters that define which strings that can be made from a 
character set 'match'. Regular expressions are typically constructed from the following:
<ul>
  <li>Boolean or: '|' for example "deer|dear" matches "deer" or "dear".</li>
  <li>Grouping: '()' for example "a(b|c)d" matches "abd" or "acd".</li>
  <li>Zero or one quantifier: '?' for example 'ab?' matches 'a' or "ab".</li>
  <li>Zero or more quantifier: '*' for example 'ab*' matches 'a', "ab", "abb", "abbb", etc. but not "abc".</li>
  <li>One or more quantifier: '+' for example 'ab+' matches "ab", "abb", "abbb", etc. but not 'a'.</li>
  <li>N matches: '{n}' for example x{4} matches "xxxx".</li>
  <li>N or more: '{min,}' for example x{2,} matches "xx", "xxx", "xxxx", etc.</li>
  <li>N or less: '{,max}' for example x{,3} matches 'x', "xx", "xxx", but not "xxxx".</li>
  <li>N or more and M or less: '{min,max}' so x{2,4} matches "xx" and "xxxx" but not 'x' and "xxxxx".</li>
  <li>Wildcard: '.' for example 'a.' matches "aa", "ab", "ac", etc.</li>
</ul>
<p>Kleene's algorithm transforms any given nondeterministic finite automaton into a regular expression. Lets look at the state machines
that express the above regex primitives.</p>
<p><img src="/Assets/images/regex_state_machines.png" width="100%" height="100%"></p>
<p>We now know how to create a state machine to parse validate the grammar of expressions in a regular language. Evaluate of the 
expressions themselves is also conceptualised by a state machine, where state represents memory, state-transitions represent instructions
that manipulate state, and the 'run' on the state machine is defined by a sequence of valid instructions (a program).</p>


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
words with an odd number of zeros. The second defines an arbitrary grammar for a seven-character alphabet.
<img src="/Assets/images/dfa1.png" width="100%" height="100%">
The finite state machine can be used to read and evaluate any regular language. If a run succesfully terminates for a given input in the 
finite state machine evaluating the grammar of a given language, then that input is a grammatically correct expression in the given 
language. To evaluate the input string, we can consider information states as memory and state-transitions as instructions, and the 'run'
on the state machine as defined by the validated input, the program. This sequence of instructions also needs to be stored in memory, thus
there exists data memory and instruction memory. The limitation of the DFA model of computation is that it can only read and evaluate 
regular languages.</p>
<p>A formal language is a language constructed from symbols belonging to an alphabet combined to form terms according to a set of defined
rules. A regular language is a formal language defined by a regular expression. A regular expression is a sequence of characters defining 
a subset of a set of possible sequences of characcters, which can be thought more intuitively as an expression that defines which 
expressions are equivalent to itself, that is which expressions match.</p>

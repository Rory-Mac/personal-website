---
layout: default
mode: narrow
title: Automata Theory
---
<h4>Automata Theory</h4>
<p>Any statement in propositional logic maps to a boolean function, and any boolean function can be expressed in conjunctive normal form 
(CNF). Consider finding the CNF of a full adder:
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
We can use the laws of boolean algebra to simplify the complexity of the CNF expression, and thus the complexity of the circuit used to 
implement the expression. The logic we have thus far explored is called combinational logic, as we are combining the bits of a boolean input
through the set of logical connectives defined in propositional logic, to arrive at a boolean output. We can introduce the concept of memory,
where boolean outputs can be stored and used as input at future timesteps, which introduces the concept of finite state machines, with 
'state' representing memory and 'state-transitions' representing the computation that transforms memory from time step to time step. This
means the input to a boolean function depends on a chain of input-output mappings computed at prior time steps. A propagation delay exists
in the combinational logic components of our digitial computer, meaning they may temporarily be in flux before arriving at a stable output.
The state machine must therefore be synchronised to a clock cycle, where one clock cycle exceeds the propagation delay of all combinational
logic components. The finite state machine is a mathematical model of computation formally represented by the 5-tuple,
        \[ M = \langle \Sigma, S, s_0, \delta, F \rangle \]
\( \quad \Sigma \) is a non-empty finite set of symbols belonging to an alphabet<br>
\( \quad S\) is a non-empty finite set of states<br>
\( \quad s_0\) is an initial state belonging to S<br>
\( \quad \delta\) is a state-transition function \(\delta : S \times \Sigma \rightarrow S\)<br>
\( \quad F\) is a set of states considered final</p>
<p>A run in the finite state machine is then defined by the ordered set \( q_0, q_1, \dots, q_n \) where \(q_i \in Q\) and \(q_i = \delta(q_{i-1}, a_i)\).
Consider the following finite state machines as arbitrary examples, one defining the grammar for a binary alphabet that excludes all binary 
words with an odd number of zeros, and the other defining an arbitrary grammar for a seven-character alphabet:
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

<!--
    Regular expressions and finite state automatons, Kleene's algorithm
    Context-free languages, Pushdown automata, and the obligations of parentheses 
    Context-sensitive languages (Turing Machines)
    Recursively-enumerable languages (Universal Turing Machines)
-->

---
layout: narrow
title: Formal Logic
---
<h4>Formal Logic</h4>
<p>Formal Logic studies the inference of logical truth within a formal system. Zeroth-order logic is an instance of formal logic that 
acts as the foundation for first-order through to higher-order logic. The language of zeroth-order logic exists as the composition of
logical propositions and connectives, denoted \((p_1, p_2, \ldots p_m)\) and 
\((c_1^1, c_2^1, \ldots, c_n^1, c_1^2, c_2^2, \ldots, c_n^2, \ldots, c_1^m, c_2^m, \ldots, c_n^m)\) respectively, giving expressions of 
the form \(c_n^m(p_1, p_2, \ldots, p_m)\). Alternatively we can express the formal language through recursive definition.
\[ \phi ::= p_1, p_2, \ldots \>|\> \neg \phi \>|\> \phi \wedge \psi \>|\> \phi \vee \psi \>|\> \phi \rightarrow \psi \>|\> \phi \leftrightarrow \psi \]
Zeroth-order logic encodes the composition of truth and falsity.
\[ \phi ::= p_1, p_2, \ldots \>|\> \top \>|\> \bot \>|\> 
\phi \begin{vmatrix}
\bot & \bot & \bot\\
\bot & \top & \bot\\
\top & \bot & \bot\\
\top & \top & \bot\\
\end{vmatrix} \psi 
\>|\>
\phi \begin{vmatrix}
\bot & \bot & \top\\
\bot & \top & \bot\\
\top & \bot & \bot\\
\top & \top & \bot\\
\end{vmatrix} \psi
\>|\> \ldots \>|\>
\phi \begin{vmatrix}
\bot & \bot & \top\\
\bot & \top & \top\\
\top & \bot & \top\\
\top & \top & \top\\
\end{vmatrix} \psi  
\]
In the absence of the propositions \((p_1, p_2, \ldots)\) the above recursive definition encodes an interpretation \(\mathcal{I}\) of an
expression formulated in zeroth-order logic. An argument exists as a conclusion paired with a set of premises 
\(\langle \{\phi_1, \phi_2, \ldots, \phi_n \}, \psi \rangle\). An interpretation of an argument is an assignment of \(\{\top, \bot\}\) to
the propositions of an argument. The argument is valid if there exists no interpretation such that the premises are true and the conclusion
false.</p>
<p>If a proposition is true for all interpretations it is a tautology, and can be denoted with \(\vdash\) and no LHS.
\[\vdash p \vee \neg p\]
\[\vdash \neg (p \wedge \neg p)\]
If a proposition is a tautology aswell as an implication or equivalence it is a rule of inference. Put more formally, if 
\(p \rightarrow q \equiv \top\) then any formula \(\phi\) containing \(p\) any number of times is equivalent to any formula \(\psi\) that
exists as \(\phi\) with some number of \(p\) substituted for \(q\). We omit \(\equiv \top \) and substitute \(\rightarrow\) for \(\vdash\) 
or if \(p \leftrightarrow q \equiv \top\) we substitute \(\leftrightarrow\) for \(⟚\). What follows is a long list of common inference rules.
\[ (p \wedge (p \rightarrow q)) \vdash q \]
\[ ((p \rightarrow q) \wedge \neg q) \vdash \neg p \]
\[ (p \rightarrow q) \wedge (q \rightarrow r) \vdash (p \rightarrow r) \]
\[ (p \vee q) \wedge \neg p \vdash q\]
\[ (p \rightarrow q) \wedge (r \rightarrow s) \wedge (p \vee r) \vdash (q \vee s) \]
\[ (p \rightarrow q) \wedge (r \rightarrow s) \wedge (\neg q \vee \neg s) \vdash (\neg p \vee \neg r) \]
\[ (p \rightarrow q) \wedge (r \rightarrow s) \wedge (p \vee \neg s) \vdash (q \vee \neg r) \]
\[ (p \wedge q) \vdash p \]
\[ p \vdash (p \vee q) \]
\[ (p \rightarrow q) \wedge (p \rightarrow r) \vdash (p \rightarrow (q \wedge r))\]
\[ p \>⟚\> (p \vee p) \]
\[ p \>⟚\> (p \wedge p) \]
\[ p \>⟚\> \neg \neg p\]
\[ (p \vee q) \>⟚\> (q \vee p) \]
\[ (p \wedge q) \>⟚\> (q \wedge p) \]
\[ (p \leftrightarrow q) \>⟚\> (q \leftrightarrow p) \]
\[ (p \vee (q \vee r)) \>⟚\> ((p \vee q) \vee r) \]
\[ (p \wedge (q \vee r)) \>⟚\> ((p \wedge q) \vee r) \]
\[ (p \vee (q \wedge r)) \>⟚\> ((p \vee q) \wedge (p \vee r)) \]
\[ (p \wedge (q \vee r)) \>⟚\> ((p \wedge q) \vee (p \wedge r)) \]
\[ \neg (p \wedge q) \>⟚\> (\neg p \vee \neg q)\]
\[ \neg (p \vee q) \>⟚\> (\neg p \wedge \neg q)\]
\[ (p \rightarrow q) \>⟚\> (\neg q \rightarrow \neg p) \]
\[ (p \rightarrow q) \>⟚\> (\neg p \vee q ) \]
\[ (p \rightarrow (q \rightarrow r)) ⟚ ((p \wedge q) \rightarrow r) \]
\[ (p \leftrightarrow q) \>⟚\> ((p \rightarrow q) \wedge (q \rightarrow p)) \]
\[ (p \leftrightarrow q) \>⟚\> ((p \wedge q) \vee (\neg p \wedge \neg q)) \]
\[ (p \leftrightarrow q) \>⟚\> ((p \vee \neg q) \wedge (\neg p \vee q)) \]</p>
<p>First order logic, or predicate logic, is an extension to zeroth order logic that introduces predicates \(P(x)\) and functions \(f(x)\)
where \(x\) is a variable as well as the quantifiers \(\exists\) and \(\forall\). Like zeroth order logic, we can express the formal language of first order logic through
recursive definition. \[ \phi ::= \psi \>|\> \phi \wedge \phi \>|\> \phi \vee \phi \>|\> \phi \rightarrow \phi \>|\> \phi \leftrightarrow \phi \>|\> 
(\phi) \>|\> \forall x \phi \>|\> \exists x \phi \]
\[ \psi ::= \top \>|\> \bot \>|\> t = t \>|\> P^n ( t_1, t_2, \ldots t_n ) \]
\[ t ::= x \>|\> c \>|\> f^n ( t_1, t_2, \ldots t_n ) \]
An interpretation in first order logic assigns to variables objects of the domain of discourse, that is all objects to which a variable 
could be assigned. The interpretation of a function \(f^n ( t_1, t_2, \ldots t_n )\) is thus given as \( I(f^n) ( d_1, d_2, \ldots d_n ) \)
for elements \(( d_1, d_2, \ldots d_n )\) in the domain of discourse. Terms are evaluated equal \((t = t)\) if they reference the
same object \(I(d = d)\). A predicate describes a number of objects in the domain of discourse, and is interpreted as the belonging of 
a number of objects to the domain of objects that predicate describes, \( I(P^n) ( d_1, d_2, \ldots d_n ) \). The universal and existential
quantifiers are interpreted as the truth of their paired formula for all or for some assignment of their paired variables, respectively.
Formula \(\phi\) and atomic formula \(\psi\) are then interpreted just as in zeroth order logic.</p>
<p>Like before we have identities that can be proven through evaluation of first-order formulae and used as rules of inference and 
substitution.
\[ \neg \forall P(x) \leftrightarrow \exists x \neg P(x) \]
\[ \neg \exists P(x) \leftrightarrow \forall x \neg P(x) \]
\[ \forall x \forall y P(x, y) \leftrightarrow \forall y \forall x P(x, y) \]
\[ \exists x \exists y P(x, y) \leftrightarrow \exists y \exists x P(x, y) \]
\[ \forall x P(x) \wedge \forall x Q(x) \leftrightarrow \forall x (P(x) \wedge Q(x)) \]
\[ \exists x P(x) \vee \exists x Q(x) \leftrightarrow \exists x (P(x) \vee Q(x)) \]
First-order logic can be extended to higher-order logic through additional quantification. For instance, quantification over predicates is
valid in second order logic and quantification over predicates of predicates is valid in third-order logic.
\[ \exists x \> P(x) \]
\[ \exists P \> Q(x) \]
\[ \exists x \> Q(P(x)) \>\>\>\> \exists Q \> Q(P(x)) \]
</p>


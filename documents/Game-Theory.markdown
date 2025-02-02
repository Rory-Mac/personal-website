---
layout: narrow
title: Game Theory
---
<h4>Game Theory</h4>
<p>Game theory is the mathematical modelling of the strategic interaction that occurs between decision-making agents when they co-exist
within environments. Let us start with the normal-form of a game, existing as the tuple \( (N, (A_i)_{i \in N}, (u_i)_{i \in N} ).\> \)
In this formalisation of a game we denote the number of players, the actions available to each player, the action profiles between player 
actions, the action profiles of all players excluding one, and the outcomes that map to a given set of action profiles, as follows.   
\[ N=\{1,\>\ldots\>,n\} \]
\[ A_i=\{a_i^1,\>\ldots\>,a_i^k\} \]
\[ A = A_1 \times A_2 \times \ldots \times A_n\]
\[ A_{-i} = A_1 \times A_{i-1} \times A_{i+1} \times \ldots \times A_n\]
\[ \{ (u_1(a), u_2(a), \>\ldots\> , u_i(a)) \>|\> a \in A, \> u_i : A \rightarrow \mathbb{R} \} \]
Let's use the diner's dilemma as an introductory example.</p>
<p><img src="/Assets/images/diners_dilemma.png" width="100%" height="100%"></p>
<p>The utility function derives itself from the preference relations of each agent.
\[ x ≻ y \iff x ≿ y \wedge \neg(y ≿ x) \] 
\[ x ∼ y \iff x ≿ y \wedge y ≿ x\]
We say that a preference relation is rational if it is complete and transitive.
\[ \forall x, y \in A : \> (x ≿ y) \vee (y ≿ x) \]
\[ \forall x, y, z \in A : \> (x ≿ y) \wedge (y ≿ z) \implies (x ≿ z) \]
And define a utility function over it. 
\[ x ≿ y \iff u(x) \geq u(y) \> \forall \> x, y \in A \]
We also say that a player action is dominant if it yields a higher utility than all alternative actions, no matter the action profile 
produced by other players.
\[ u_i(a_i^l, a_{-i}) > u_i(a_i^k, a_{-i}) \>\> \forall \> a_{-i} \in A_{-i} \]
An action profile is pareto-optimal if it is pareto-dominated by no other action profile. An action profile is pareto-dominant, if the
following holds for \(a, b \in A\).
\[ (u_i(a) \geq u_i(b) \>\> \forall \> i \in N) \wedge \exists i \>|\> (u_i(a) \gt u_i(b)) \]
We can define a lottery over a set of action profiles to model the stochastic nature of a game.
\[ L(A) = \biggl\{ p \in [0,1]^A : \sum_{a \in A}p(a) = 1 \biggr\} \]
The compound lottery \(L \in L(A) \) exists as the summed probability of a pair of lotteries \(L_1, L_2 \in L(A) \).
\[ L = [\alpha : L_1, \> 1 - \alpha : L_2 ] \]
\[ L(a) = \> \alpha L_1(a) + (1 - \alpha) L_2(a) \>\> \forall a \in A \]
We can define preference relations over lotteries just as we did with action profiles.
\[ L_1 ≿ L_2 \iff \sum_{a \in A}L_1(a) \> u(a) \>\geq \sum_{a \in A} L_2(a) \> u(a) \>\> \forall \> L_1, L_2 \in L(A) \] 
If this holds, then it is known that the relation is rational, continuous, and independent.
\[ \exists ϵ \>|\> (ϵ \gt 0), \> [1 - ϵ : L_1, ϵ : L_3] ≻ L_2 ≻ [1 - ϵ : L_2, ϵ : L_3] \>\>\forall\> L_1, L_2, L_3 \in L(A) \>|\> L_1 ≻ L_2 ≻ L_3 \] 
\[ L_1 ≿ L_2 \iff [p : L_1, (1 - p) : L_3 ] ≿ [p : L_2, (1 - p) : L_3] \>\>\forall\> L_1, L_2, L_3 \in L(A), \> p \in [0, 1] \]</p>
<p>The concept of a mixed strategy is equivalent to a lottery defined over a player's set of available actions.
\[ s_i \in S_i = L(A_i) \]
\[ s \in S = S_1 \times S_2 \times \ldots \times S_n\]
The expected utility of a strategy profile is given as the sum of the utility of action profiles with respect to a player, weighted by the
probability that all players take the actions specified by that action profile, as given by each player strategy.
\[ u_i(s) = \sum_{a \in A} u_i(a) \cdot \prod_{j=1}^{n} s_j(a) \]
A strategy is dominant if it yields higher expected utility, no matter the strategy profile of other players.
\[ u_i(s_i, s_{-i}) > u_i(t_i, s_{-i}) \>\> \forall \> s_{-i} \in S_{-i} \>\>|\>\> s_i, t_i \in S_i\]</p>
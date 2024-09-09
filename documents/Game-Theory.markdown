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
We can define a lottery over a set of outcomes to model the stochastic nature of a game.
\[ L(A) = \biggl\{ p \in [0,1]^A : \sum_{a \in A}p(a) = 1 \biggr\} \]
The compound lottery exists as the summed probability of a pair of lotteries. 
\[ L = [\alpha : L_1, \> 1 - \alpha : L_2 ] \]
\[ L(a) = \> \alpha L_1(a) + (1 - \alpha) L_2(a) \>\> \forall a \in A \]
We can define preference relations over lotteries just as we did with outcomes.
\[ L_1 ≿ L_2 \iff \sum_{a \in A}L_1(a) \> u(a) \>\geq \sum_{a \in A} L_2(a) \> u(a) \>\> \forall \> L_1, L_2 \in L(A) \] 
If such a relation holds, then it is known that the relation is rational , continuous, and independent.
\[ \exists ϵ \>|\> (ϵ \gt 0), \> [1 - ϵ : L_1, ϵ : L_3] ≻ L_2 ≻ [1 - ϵ : L_2, ϵ : L_3] \>\>\forall\> L_1, L_2, L_3 \in L(A) \>|\> L_1 ≻ L_2 ≻ L_3 \] 
\[ L_1 ≿ L_2 \iff [p : L_1, (1 - p) : L_3 ] ≿ [p : L_2, (1 - p) : L_3] \>\>\forall\> L_1, L_2, L_3 \in L(A), \> p \in [0, 1] \]
</p>

<!--
Fundamentals
    Wk1 Notes (slides 22 onwards)
Games
    Split or Steal
    Cake-cutting Game (external force as determinant of cooperative vs non-cooperative game)
    Ultimatum Game (number 42, wife/child 10/0 split is accepted)
    Goalie and Kicker (pure strategies, mixed strategies, equilibria)
    Global Thermonuclear War
    First simulation (strategies, indicators, resources)
    Does prospect theory complicate matters?
Further
    Strategies (takers, givers, grudgers, copycats, detective)
    Variables that can change (rewards/punishments, number of interactions, number of rounds, rules of proliferation, mistakes)
    Other: Nash Equilibirum, Social Contract, Evolutionary Game Theory (EGT)
    Real World additions: personality indicators, neural networks, reputation, migration, narratives, Autobiographical Memory
    (+ diffusion and rules of attraction/repulsion in social map)
-->
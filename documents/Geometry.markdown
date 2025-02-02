---
layout: narrow
title: Geometry
---
<h4>Geometry</h4>
<p>Geometry is the study of the spatial relationships between objects and the space they occupy. We will denote points, lines and plains
with uppercase, lowercase and lowercase italicized alphabetic symbols, respectively. We then start with the axioms of incidence. The
incidence or non-incidence of the points \(P_1, P_2, \ldots P_n\) on the line \(l\) can be written as \(P_1P_2 \ldots P_N = l \) and 
\( P_1P_2 \ldots P_N \neq l\), respectively.</p>
<p>In one dimension, the following axioms are required.
\[ (\exists A, B) \implies (\exists a \>|\> AB = a) \]
\[ (\exists a) \implies (\exists A, B \>|\> AB = a) \]
\[ (AB = a) \wedge (AB = b) \implies (a = b) \]
\[ (AB = a) \wedge (CD = a) \implies \left({\{a,b,c,d\} \choose 2} = a\right) \]
We can extend these axioms to two dimensions.
\[ (\exists A, B, C, a \>|\> A, B, C \neq a)\]
\[ (\exists A, B, C, a \>|\> A, B, C \neq a) \implies (\exists ABC = \alpha)\]
\[ (\exists \alpha) \implies (\exists ABC \>|\> ABC = \alpha)\]
\[ (\exists ABC \>|\> ABC = \alpha ) \wedge (\exists DEF \>|\> DEF = \alpha) \implies \left({\{A, B, C, D, E, F\} \choose 3} = \alpha\right) \]
\[ (AB = a) \wedge (AB = \alpha) \implies (a = \alpha) \]
We can extend these axioms to the \(n\)-th dimension if we so desire.</p>
<p>We then introduce axioms of order with the notion of betweenness. The set of all points incident on \(AB = a\>\) that are between
\(A\) and \(B\) is denoted \([A,B]\).
\[ B \in [A,C] \implies B \in [C,A] \wedge (\exists a \>|\> ABC = a) \]
\[ AC = a \implies (\exists B \in [A,C])\]
\[ ABC = a \implies A \in [B,C] \>⊕\> B \in [A,C] \>⊕\> C \in [B,A]\]
We then introduce axioms of congruence. 
\[ AB = a,\> AA' = a' \implies \exists B' \>|\> AB \cong A'B' \]
\[ AB \cong AB \]
\[ AB \cong A'B',\> A'B' \cong A''B'' \implies AB \cong A''B'' \]
\[ AB = a,\> BC = a,\> A'B' = a',\> B'C' = a',\> AB \cong A'B',\> BC \cong B'C' \implies AC \cong A'C' \]
\[ (\exists A \>|\> A = h,\> A = k),\> hk = \alpha,\> a' = \alpha',\> (\exists O' \>|\> O' = a',\>   O' = h') \implies (\exists! k' \>|\> 
(h,k) \cong (h',k'))\]
\[\angle (h,k) \cong \angle (h',k'), \angle (h', k') \cong \angle (h'', k'') \implies \angle (h, k) \cong \angle (h'', k'')\]
</p>
<p>Inclusion of the following parallel axiom or its negation determines whether the defined geometry is Euclidean or non-Euclidean.
    \[ (\exists B \>|\> B \neq a, \> B = b, \> B = c),\> (\not \exists C \>|\> C = a, C = b), \> (\not \exists C \>|\> C = a,\>  C = c) \implies b = c \]</p>
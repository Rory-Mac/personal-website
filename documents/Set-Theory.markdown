---
layout: narrow
title: Set-Theory
---
<h4>Set Theory</h4>
<p>Set Theory begins with the \(\in\) relation, the notion that set membership exists as a relation between objects.
In this context, we refer to the objects to which objects belong as sets. The notion of a subset and proper subset follow, as do
definitions of relations between sets. 
\[ o \in A \]
\[ A ⊆ B \>\equiv\> o \in A \rightarrow o \in B \]
\[ A \subset B \>\equiv\> (o \in A \rightarrow o \in B) \wedge (\exists a \in A \>|\> a \notin B) \]
\[ A \cup B = \{ o \>|\> o \in A \vee o \in B \} \]
\[ A \cap B = \{ o \>|\> o \in A \wedge o \in B \} \]
\[ A \>\backslash\> B = \{ o \>|\> o \in A \wedge o \notin B \} \]
\[ A \ominus B = \{ o \>|\> o \in A \> \backslash \> B \> \vee \> o \in B \> \backslash \> A \} \]
\[ A \times B = \{ (a, b) \>|\> a \in A, b \in B \} \]
\[ P(A) = \{ S \>|\> S ⊆ A \} \]
The concept of mathematical relation, that \(x\) relates to \(y\) or \(xRy\>\) follows from these principles, as does the concept of
mathematical function, denoted \(f : X \rightarrow Y \) with domain \(X\) and codomain \(Y\).
\[ R ⊆ A \times B \]
\[ X = \{ x \>|\> (x, y) \in R \} \]
\[ Y = \{ y \>|\> (x, y) \in R \} \]
Bipartite graphs encode mathematical relations. Take 
\( ( \mathbb{N} \geq \mathbb{N}, \> \mathbb{N} \cdot (\mathbb{N},\mathbb{N}), \> \mathbb{N} + \mathbb{N}) \) as an example.
<p><img src="/Assets/images/relations.png" width="100%" height="100%"></p>
<p>Properties of relations can be investigated. Common properties include reflexivity, irreflexivity, symmetry, anti-symmetry, assymetry,
transitivity, left-uniqueness, right-uniqueness, left-totality, right-totality, connectedness and strong-connectedness. 
\[ xRx \> \forall \> x \in R \]
\[ xRx = ∅ \]
\[ (xRy \rightarrow yRx) \> \forall \> (x,y) \in R \]
\[ ((xRy \wedge yRx) \rightarrow x = y) \> \forall \> (x,y) \in R \]
\[ (xRy \rightarrow y\not Rx) \> \forall \> (x,y) \in R \]
\[ ((xRy \wedge yRz) \rightarrow xRz) \> \forall \> (x,y), \>(y,z) \in R \]
\[ ((xRy \wedge zRy) \rightarrow x = z) \> \forall \> (x,y), \>(y,z) \in R \]
\[ ((xRy \wedge xRz) \rightarrow y = z) \> \forall \> (x,y), \>(y,z) \in R \]
\[ (\exists y \> | \> xRy) \> \forall \> x \in X \]
\[ (\exists x \> | \> xRy) \> \forall \> y \in Y \]
\[ (x \neq y \rightarrow xRy \vee yRx) \> \forall \> x, y \in X \]
\[ (xRy \vee yRx) \> \forall \> x, y \in X \]
<p>The properties of these relations can also be observed in their bipartite graphical encodings. Dotted lines represent implied 
non-existence.</p>
<p><img src="/Assets/images/relation_properties.png" width="100%" height="100%"></p>
<p>Unique combinations of these properties provide types of relations that can be classified.</p>
<p><img src="/Assets/images/relation_types.png" width="40%" height="40%"></p>
<p>Relations are defined in set-theoretic terms over sets. Relations are themselves set and can thus be defined over other relations.
\[ R \cup S = \{ (x, y) \>|\> xRy \vee xSy \} \] 
\[ R \cap S = \{ (x, y) \>|\> xRy \wedge xSy \} \] 
\[ \overline R = \{ (x, y) \>|\> x, y \in X \wedge x \not Ry\} \]
\[ R^T = \{ (y, x) \>|\> xRy\} \]
The composition of relations introduces the notion of left and right inverses. In the latter two definitions, \(R\) is defined as a left
and right inverse, respectively. An involution is a function that is its own inverse.
\[ S \circ R = \{ (x,z) \>|\> \exists y \> (xRy \wedge ySz) \} \]
\[ S \circ R \> (x) = x \]
\[ R \circ S \> (x) = x \]
An operation is a relation from the \(n\)-tuple of a set to itself.
\[ f : S \times S \times \ldots \times S \rightarrow S \]
\[ f : S^n \rightarrow S\]
We can generalise our definition of a relation as a subset of the cartesian product of more than one set.
\[ R \subset A_1 \times A_2 \times \ldots \times A_n \]</p>

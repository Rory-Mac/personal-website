---
layout: narrow
title: Set-Theory
---
<h3>Set Theory</h3>
<p>Set Theory begins with the \(\in\) relation, the notion that an object can relate to another object by being an element of that object.
In this context, we refer to the objects to which objects belong as sets. The notion of a subset and proper subset follow, as do relations
that we define between sets. 
\[ o \in A \]
\[ A ⊆ B = \{ o \in B \>|\> o \in A \} \]
\[ A \subset B \{ o \in B \>|\> o \in A, A \neq B \} \]
\[ A \cup B = \{ o \>|\> o \in A \vee o \in B \} \]
\[ A \cap B = \{ o \>|\> o \in A \wedge o \in B \} \]
\[ A \backslash B = \{ o \>|\> o \in A \wedge o \notin B \} \]
\[ A \ominus B = \{ o \>|\> o \in A \backslash B \vee o \in B \backslash A \} \]
\[ A \times B = \{ a,b \>|\> a \in A, b \in B \} \]
\[ P(A) = \{ S \>|\> S ⊆ A \} \]
The concept of mathematical relation, denoted \(R\), follows from these principles alone, as does the concept of mathematical function,
denoted \(f : X \rightarrow Y \) with domain \(X\) and codomain \(Y\).
\[ R ⊆ \{ (a, b) \>|\> a \in A, b \in B \} \]
\[ R ⊆ A \times B \]
\[ X = \{ x \>|\> (x, y) \in R \} \]
\[ Y = \{ y \>|\> (x, y) \in R \} \]
Symbolically \(\> aRb \>\) if \(\> (a, b) \in R \>\). The symbolic substitution of \(R\) gives distinct relations which can be
translated into the visual alphabet of concentric rings and directed edges. Let's take
\( ( \mathbb{N} \geq \mathbb{N}, \> \mathbb{N} \cdot (\mathbb{N},\mathbb{N}), \> \mathbb{N} + \mathbb{N}) \) as an example.
Operators are relations between the set of operand tuples and the set to which its results belong.</p>
<p><img src="/Assets/images/relations.png" width="100%" height="100%"></p>
<p>Relations exhibit properties that can be investigated. Let's define reflexivity, irreflexivity, symmetry, assymetry, transitivity,
left-uniqueness, right-uniqueness, left-totality, right-totality, connectedness and strong-connectedness. 
\[ xRx \> \forall \> x \in R \]
\[ xRx = ∅ \]
\[ (xRy \implies yRx) \> \forall \> (x,y) \in R \]
\[ ((xRy \wedge yRx) \implies x = y) \> \forall \> (x,y) \in R \]
\[ ((xRy \wedge yRz) \implies xRz) \> \forall \> (x,y), \>(y,z) \in R \]
\[ ((xRy \wedge zRy) \implies x = z) \> \forall \> (x,y), \>(y,z) \in R \]
\[ ((xRy \wedge xRz) \implies y = z) \> \forall \> (x,y), \>(y,z) \in R \]
\[ (\exists y \> | \> xRy) \> \forall \> x \in X \]
\[ (\exists x \> | \> xRy) \> \forall \> y \in Y \]
\[ (x \neq y \implies xRy \vee yRx) \> \forall \> x, y \in X \]
\[ (xRy \vee yRx) \> \forall \> x, y \in X \]
Types of relations can be identified by unique combinations of properties.</p>

<!--
    Types of relations based on properties
    Operations on Relations giving rise to set theory algebra (commutativity, associativity, identity, distributivity, invertibility)

    Circular Reasoning of \imples, \exists, \forall, long-chain, extend definitions to relations between sets
-->
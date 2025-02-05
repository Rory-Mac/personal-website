---
layout: narrow
title: Category-Theory
---
<h4>Category Theory</h4>
<p>Category theory explores categorical relationships between objects, where objects are defined by their relations to other objects.
Category theory begins with the notion of objects, morphisms, categories, functors, monoids and monads. We denote objects and morphisms
\( \> ob(C), \> hom(C) \> \) and a morphism between objects \(a,b\) as \(\> f : a \mapsto b\). 
A binary operator is used to express the composition of morphisms.
\[ \circ : hom(a,b) \times hom(b,c) \mapsto hom(a,c) \]
\[ f : a \mapsto b, \> g : b \mapsto c \implies g ∘ f : a \mapsto c \]
Composition of morphisms is associative if the following holds.
\[ f : a \mapsto b, \> g : b \mapsto c, \> h : c \mapsto d \]
\[ (h \circ g) \circ f = h \circ (g \circ f) \]
Composition of morphisms produces an identity morphism if the following holds.
\[ id_a : a \mapsto a, \> id_b : b \mapsto b, \> f : a \mapsto b \]
\[ id_a \circ f = f = f \circ id_b \]
We assert the existence of a category over objects and morphisms if the composition of morphisms, the associativity of composition, and the
identity of objects all hold.</p>
<p>Let us first explore the varying types of morphisms. First the monomorphism, defined as follows, with \(\>g_1, g_2\>\) 
representing all morphisms from \(x\) to \(a\) for all objects \(x\) with morphisms to object \(a\).
\[ f : a \mapsto b, \>\>\>\> g1, g2 : x \mapsto a \]
\[ f \circ g_1 = f \circ g_2 \implies g_1 = g_2 \]
Next, the epimorphism, the right-cancellative equivalent of the left-cancellative monomorphism. 
\[ f : a \mapsto b, \>\>\>\> g1, g2 : b \mapsto x \]
\[ g_1 \circ f = g_2 \circ f \implies g_1 = g_2 \]
Then, the bimorphism, if \(f : a \mapsto b\) is both a monomorphism and an epimorphism, and the isomorphism, if \(\> g : b \mapsto a \> \), 
\( \> f \circ g = 1_b \> \) and \(\> g \circ f = 1_a \>\).
We previously discussed the endomorphism, \(f : a \mapsto a\). An automorphism is an endomorphism that is also an isomorphism.
Additionally, a morphism \(g : b \mapsto a\) is said to be a retraction if \(f \circ g = 1_b\) and a section if \(g \circ f = 1_a\).
Let's look at the commutative diagram equivalents to these definitions. A commutative diagram is a diagram used to visualise categories 
in category theory, with morphisms expressed as arrows between denoted objects.</p>
<p><img src="/Assets/images/morphisms.png" width="100%" height="100%"></p>
<p>Functors can be thought of as morphisms between categories. Consider a functor \(F\) from category \(C\) to category \(D.\)
For each object \(x\) under \(C\), \(\> F(x) \>\) exists under \(D\>\) and \(\>  F(1_x) = 1_{F(x)}. \>\) For each morphism 
\(\> f : x \mapsto y \>\) under \(C\), \(\> F(f) : F(x) \mapsto F(y) \>\) exists under \(D. \>\) Additionally, for each morphism 
\(\> f : x \mapsto y \>\) and \(g : y \mapsto z \>\), \( \> F(\> g \circ f) = F(g) \circ F(f) \>\). The visualisations of category theory
we use can themselves be thought of as functors from an intuitively perceived category to a visuo-spatiallly perceived category. 
Natural transformations can be thought of as morphisms between functors. Additionally, in higher category theory, \(n\)-morphisms can exist
between \((n-1)\)-morphisms down to the 1-morphisms we have thus far discussed. Exploration of sets, groups, topological spaces, vector
spaces, posets, manifolds, and other mathematical constructs is in fact exploration of category theory instantiated in particular 
mathematical contexts.</p>

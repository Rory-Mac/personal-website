---
layout: narrow
title: Functional
---
<h4>Functional Programming</h4>
<p>Functional Programming is a programming paradigm in which programs are constructed as a tree of functional expressions. Functional 
Programming in its purest form uses pure functions only. These are deterministic mathematical functions that derive their output from
their input only. Thus, side-effects and mutable state are minimised if not avoided entirely in the functional paradigm. Lambda calculus 
forms the basis for functional programming and is computationally equivalent to the turing machine model of computation.
Thus, any imperative program can be expressed as a functional program and vice versa. That being said, some programmatic 
tasks map more intuitively to the use of state rather than functional expression. To implement such tasks more easily without resorting 
to the use of state, functional programming borrows concepts from category theory. Category theory defines objects not by a set of 
internal characteristics but instead by a set of relations with other objects that form categories.</p>

<p>Category theory begins with the notion of objects, morphisms, categories, functors, monoids and monads. We denote a set of objects as
\(\> Ob(C)\) and a set of morphisms as \(\> Mor(A, B)\) for each \(\> A, B \in Ob(C)\). Morphisms are denoted \(\> f : A \rightarrow B \). Three
requirements must be met to assert that a category exists over a set of objects and morphisms: composition, associativity and identity.
Composition asserts that for any three objects and any three morphisms \[ \> A, B, C \in Ob(C),  \>\> f \in Mor(A,B), \>\> g \in Mor(B,C) \] 
it must be the case that \(\> g ∘ f \in Mor(A,C) \).</p>
<p>Association asserts that composition of 
morphisms is assocative, that is for any four objects and any three morphisms 
    \[A, B, C, D \in Ob(C), \>\> f \in Mor(A, B), \>\> g \in Mor(B, C),\> h \in Mor(C, D)\]
it must hold that \(h ∘ (g ∘ f) = (h ∘ g) ∘ f \).</p>
<p>Identity asserts that for each object \(A\) there must exist \(\> id_x \in Mor(A, A)\) such that for every morphism 
\(\> f \in Mor(A,B)\), it holds that \(\> f ∘ id_x = f\) and \(\> id_x ∘ f = f\).</p>
<p>If a set of objects and morphisms can satisfy these three properties, we can assert the existence of a category over that set. </p>
<p>In category theory we also identify relations between categories themselves. These relations are termed functors, or in the case of 
relations between categories and themselves, endofunctors. A functor \(F\) between categories \(C\) and \(D\) consists of an object
mapping and a morphism mapping. The object mapping is a function that maps each \(\> A \in C\) to \(\> F(A) \in D\). The morphism mapping
is a function that maps each \(\> f : A \rightarrow B \) in \(C \>\) to \(\> F(f) : F(A) \rightarrow F(B)\) in \(D\). Identity morphisms 
must map to one another by the morphism mapping so that \(\> F(id_A) = id_{F(A)}\). Composition must also be preserved so that for 
\(\> f : A \rightarrow B\) and \(\> g : B \rightarrow C \>\) it is the case that \(\> F(g ∘ f) = F(g) ∘ F(f)\).</p>
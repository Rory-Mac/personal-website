---
layout: narrow
title: Functional
---
<h4>Functional Programming</h4>
<p>Functional Programming is a paradigm of programming in which programs are built by applying a set of functions to a state
without mutating the state itself. Category theory creates a framework for the composition and manipulation of functions and thus
sets the groundwork for the functional paradigm.</p>
<p>In category theory, we define categories of objects. We consider a category \(C\) to which a set of objects belong. A set of
morphisms between these objects denoted \(C(x,y)\) belongs to \(C\) where \(x\), \(y\) are objects belonging to \(C\). Composition is
associative for any category so that 
\[
    (\exists f g \; | \; f = C(x,y), \; g = C(y,z), \; x,y,z \in C) \implies (g \circ f)(x) = g(f(x)).
\]
Additionally there exists an identity morphism denoted \(id_n \in C(n,n)\) for any \(n \in C\).</p>
<p><img src="/Assets/images/functional_intro.png" width="100%" height="100%"></p>
<!--
    https://www.youtube.com/watch?v=Gz8W1r90olc
    https://www.math3ma.com/categories/category-theory
	functional portal
    functors, applicatives, monads
-->
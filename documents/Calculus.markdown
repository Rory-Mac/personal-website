---
layout: narrow
title: Calculus
---
<h4>Calculus</h4>
<p>Calculus begins with the Riemann sum, an approximation of an integral by a finite sum. Take any region of a polynomial \( f(x) \) and
partition it into a finite sequence of rectangles of width \( dx \) and area \(dA\). Alignment of these rectangles can follow a left, right,
upper, or lower approximation; they are most easily visualised, though other shapes can be used to the same effect. In
any case, as \(dx \rightarrow 0 \) the sum of the areas of these partitions approximates \( f(x) \).
\[ \frac{dA}{dx} \approx f(x), \>\> dx \longrightarrow 0 \]</p>
<p><img src="/Assets/images/Riemann_sum.png" width="100%" height="100%"></p>
<p>In this same limit, \( df(x) \) approximates a function giving the instantaneous rate of change of \(f(x)\) for a
given value \(x\). We can call this function the derivative of \(f(x)\) and \(f(x)\) the integral of this derivative function.
\[\frac{df(x)}{dx} = \frac{f(x + dx) - f(x)}{dx} \approx f'(x), \>\> dx \longrightarrow 0 \]
If the derivative expresses the rate of change of the integral, 
and the integral the sum of all instaneous rates of change, then the integral expresses the area under the curve of the derivative.
This intuitive relationship can be formalised by the following expression (the fundamental theorem of calculus). 
\[ \int_{a}^{b} f'(t)\,dt = f(b) - f(a) \]</p>
<p>The following expression is the power rule and has a geometric analog (scaled from two to \(n\) dimensions).
\[ \frac{d(x^n)}{dx} = nx^{n-1} \]</p>
<p><img src="/Assets/images/geometric_power_rule.png" width="100%" height="100%"></p>
<p>We can think of incrementing our exponent from \(n\) to \(n+1\), as a nudge of length \(dx\) in a new dimension. For inputs of the form 
\(x^n\) we can re-express our theorem of calculus like so,
\[ \frac{x^n + a_1x^{n-1}dx + a_2x^{n-2}dx^2 + \dots + a_ndx^n - x^n}{dx}, \>\> x \longrightarrow 0 \]
for some coefficients \(a_1 \dots a_n \). We can think of our binomial expansion like branches in a tree, paths of multiplication.
\[ (x+y)^n = \sum_{k=0}^{n} {n \choose k} x^{n-k} y^k \]</p>
<p><img src="/Assets/images/binomial_theorem.png" width="100%" height="100%"></p>
<p>There exist a set of paths with one movement in the \(x\) direction, a set of paths with 2 movements in the \(x\) direction, etc. The cardinality 
of these sets equates from \(n..1\). All such sets are discounted by the limit except the set of paths denoted \(a_1x^{n-1}dx\). 
which gives us our power rule \(nx^{n-1}\).</p>
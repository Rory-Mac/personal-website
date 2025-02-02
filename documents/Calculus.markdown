---
layout: narrow
title: Calculus
---
<h4>Calculus</h4>
<p>Calculus is the mathematical study of continuous change. We start by formalising the notion of continuity of a real-valued function. A
function \(f : \mathbb{R} \rightarrow \mathbb{R}\) is said to be continuous if for every point \(p\) in the domain of \(f\) there exists
a limit \(L\) as \(x\) approaches \(p\).
\[ \lim_{x \to p} f(x) = L \]
A limit exists for an input \(p\) if the following holds for \(\epsilon, \delta \in \mathbb{R}\).
\[ (\forall \epsilon > 0)(\exists \delta > 0)(\forall x \in \mathbb{R})(0 < |x - p| < \delta \implies |f(x) - L| < \epsilon) \]
Intuitively we can imagine that if for any codomain centred at \(L\) there exists a domain centred at \(p\) such that all points within
the domain exist within the codomain as well, then \(L\) is the limit as \(x \rightarrow p\).</p>
<p>The Riemann sum can be used to formulate the foundations of calculus. For a tagged partition over the interval \([a, b]\), that is a 
partition \(a = x_1 < x_2 < \ldots < x_n = b\) with tags \(t_0, t_1, \ldots, t_n\) where \(t_i \in [x_i, x_{i+1}]\) the Riemann sum is as
follows.
\[\sum_{i=0}^{n-1}f(t_i)(x_{i+1} - x_i)\]
The Riemann integral is not unlike our formalisation of continuity. Take \(T\) as the set of all tagged partitions over the interval we 
are integrating.  
\[ (\forall \epsilon > 0)(\exists \delta > 0)(\> \forall \> ((x_0, x_1, \ldots x_n), (t_0, t_1, \ldots t_n)) \in T) \]
\[ 0 < \left( \sum_{i=0}^{n-1}f(t_i)(x_{i+1} - x_i \right) < \delta \implies \left| \left(\sum_{i=0}^{n-1}f(t_i)(x_{i+1} - x_i)\right) - s \right| < \epsilon) \]
Now we can state the fundamental theorems of calculus. If \(f\) is real-valued, continuous and defined over \([a,b]\) we define \(F\)
for all \(x\) in \([a,b]\) and say that \(F\) is differentiable on \((a,b)\).   
\[F(x) = \int_{a}^{x}f(t)dt \implies F'(x) = f(x)\]
Additionally, if \(f\) is Riemann integrable on \([a,b]\) the following holds.
\[\int_{a}^{b}f(x)dx = F(B) - F(A)\] 
The derivative can also be defined like so. 
\[ f'(x) = \lim_{dx \to 0}\frac{f(x + dx) - f(x)}{dx} \]
With these theorems we can generate foundational rules of integration and differentiation.</p>

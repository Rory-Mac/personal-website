---
layout: default
mode: narrow
title: Calculus
---
<h4>Calculus</h4>
<p>Calculus begins with the Riemann sum. We can segment any function \(f(x) \) into a set of rectangles of width \( dx \) with area \(dA\) and height equal to the value
    of the rightmost, lowermost, uppermost or leftmost intercept, respectively illustrated above.
</p>
<p> \[ \frac{dA}{dx} \approx f(x), \>\> dx \longrightarrow 0 \]</p>
<p> We can read \(\frac{dA}{dx}\) as 'the derivative of \(A\)'. We can also read it as 'a small change in \(x\) yielding a small change in \(A\)'.
    This concept has fascinatingly unintuitive consequences. It implies that we can determine a function's rate of change at a singular point, despite 
    the intuitive sense that we would need two points to measure any such change. We can rewrite our equation as follows:
        \[\frac{df(x)}{dx} \approx f'(x), \>\> dx \longrightarrow 0 \]</p>
<p> A derivative function is a function that outputs the rate of change of a corresponding integral function for a given point. 
    An integral function is a function that outputs the sum of all changes of a corresponding derivative function over a given interval.
    The fundamental theorem of calculus:
    \[ \frac{df}{dx}(x) = \frac{f(x + dx) - f(x)}{dx}, \>\> dx \longrightarrow 0 \]</p>
<p> A nice way to visualise this theorem is with the tangent: the straight line that intersects any two points on \(f(x)\) as they infinitely 
    approach one another. Their vertical difference is \(ds\), their horizontal difference is \(dt\), and the gradient of the line connecting them 
    (the tangent) is the derivative of the function as \(dt\) approaches zero.   
</p>
<p> \[ \frac{d(x^n)}{dx} = nx^{n-1} \]
    This expression is called the power rule. It has the following geometric analog scaled from two to n dimensions:
    <img src="/Assets/images/geometric_power_rule.png" width="100%" height="100%"></p>
<p>We can think of incrementing our exponent from \(n\) to \(n+1\), as a nudge of length \(dx\) in a new dimension. For inputs of the form \(x^n\) we can
    re-express our theorem of calculus like so,
    \[ \frac{x^n + a_1x^{n-1}dx + a_2x^{n-2}dx^2 + \dots + a_ndx^n - x^n}{dx}, \>\> x \longrightarrow 0 \] 
for some coefficients \(a_1 \dots a_n \). We can think of our binomial expansion like branches in a tree each representing paths of multiplication:
<img src="/Assets/images/binomial_theorem.png" width="100%" height="100%">
This can be expressed more formally as,
    \[ (x+y)^n = \sum_{k=0}^{n} {n \choose k} x^{n-k} y^k \]
There exist a set of paths with one movement in the \(x\) direction, a set of paths with 2 movements in the \(x\) direction, etc. The cardinality 
of these sets equates from \(n..1\). All such sets are discounted by the limit except the set of paths denoted \(a_1x^{n-1}dx\). 
which gives us our power rule \(nx^{n-1}\).
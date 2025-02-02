---
layout: narrow
title: Probability Theory
---
<h4>Probability Theory</h4>
<p>We start with the notion of probability measure over events within a sample space.
    \[ (\forall E \>|\> E \subset \Omega)(\forall e \>|\> e \in E)(e \in \Omega) \]
    \[ P : e \rightarrow x,\> x \in \mathbb{R},\> x \in [0, 1] \]
    \[ P(\Omega) = 1, \>\>\>\> 0 \leq P(e) \leq 1, \>\>\>\> 0 \leq P(E) = \sum_{e \>\in\> E} P(e) \leq 1 \]
    \[ P(E_1 \vee E_2) = P(E_1) + P(E_2), \>\>\>\> P(E_1 \wedge E_2) = P(E_1)P(E_2) \]
We then observe that the probability of an event's occurence is either dependent on or independent from the occurrence of other events.
\[ P(A \>|\> B) = \frac{P(B \>|\> A)P(A)}{P(B)} = \frac{P(A \wedge B)}{P(B)} \]
\[ P(A | B) = P(A) \equiv P(A \wedge B) = P(A)P(B) \]
We can construct a probability tree with each pathway from root encoding the occurrence of an event given the occurrence of the events
its occurrence depends upon.</p>
<p><img src="/Assets/images/probability_tree.png" width="100%" height="100%"></p>
<p>Event variables can be described as discrete or continuous collections of events. Take for instance the probability of rain versus the 
probability of each possible amount of rain. We look at the expected value, variance, standard deviation, covariance and correlation of
event variables.
\[ E(X) = \sum_{i}x_ip_i \>\>\>\> E(X) = \int_{-\infty}^{\infty}xp_x \]
\[ Var(X) = Sd(X)^2 = \sigma^2 = \sum_{i}p_i(x_i - E(X))^2 = E(X^2) - E(X)^2\]
\[ Cov(X,Y) = \sum_{i} p_{x_i}p_{y_i}(x_i - E(X))(y_i - E(Y)) = E(XY) - E(X)E(Y) \]
\[ Corr(X,Y) = \frac{Cov(X,Y)}{\sigma_x \sigma_y} \]
Thus, every event variable has a corresponding probability distribution that is either discrete or continuous. The binomial distribution
and normal distribution recur frequently. 
\[ P(n, r) = \frac{n!}{(n-r)!}, \>\>\>\> C(n,r) = {n \choose r} = \frac{n!}{r!(n-r)!} \]
\[ P_x = {n \choose x} p^x q^{n-x}\]
\[ P_x = \frac{1}{\sigma \sqrt{2 \pi}} e^{-\frac{1}{2}(\frac{x-E(X)}{\sigma})^2}\]</p>

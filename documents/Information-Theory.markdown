---
layout: narrow
title: Information Theory
---
<h4>Information Theory</h4>
<p>Information theory studies the quantification, storage and communication of information. Entropy is a property of information. The 
entropy of a discrete, random variable \( X \) with probability of occurrence \(p(x) \rightarrow [0,1] \) is expressed by Shannon's entropy.
\[ H(x) := - \sum_{x \in X} p(x) \log p(x) \]</p>
<p><img src="/Assets/images/shannons_entropy.png" width="100%" height="100%"></p>
<p>Take the case where \(X={x_1}\) and \(P(X) = {1}\). Imagine splitting \(x_1\) into \(x_2\) and \(x_3\) such that \(X={x_2,x_3}\) and
\(P(X) = {0.5,0.5}\). We can then add random noise to perturb these probabilities along the range \(P(X) = {0-p(x_2), p(x_3)-p(x_1)}\).
We have the intuition that to perform these actions recursively would be to tend towards maximum entropy. Entropy is minimised in the case
that only one discrete value of variable \(X\) exists with probability 1. Entropy approaches a maximum when the number of discrete values 
\(X\) can possess approaches infinity and each of their probabilities are uniform and approach zero.</p>

<!--
    Mutual Information
    Shannon's source coding theorem
-->


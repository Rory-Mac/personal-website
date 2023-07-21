---
layout: default
mode: dark
title: Gradient Descent & Backpropagation
---
<h4>Gradient Descent & Backpropagation</h4>
<p>Backpropagation is a means of finding the gradient vector of a cost function to express the degree to which small changes in each network parameter
affect the cost associated with a batch of training data. We use the gradient vector to modify our parameter set in the direction of least cost. Let us 
start off with the following set of relevant equations:
<a target="_blank" href="https://www.3blue1brown.com/"><img src="/Assets/images/backprop_overview.png" width="100%" height="100%"></a>
The cost function itself is denoted \(C_0\), where \(0\) denotes the index of an output node and \(y\) denotes a comparison node. The same definition
holds when \(a^{(L)}\) denotes the activation vector for the set of output nodes and \(y\) similarly denotes the activation vector for the set of 
comparison nodes. The same definition also holds when \(a^{(L)}\) denotes an actual activation matrix and \(y\) an expected activation matrix. In this case,
each row in the matrices represent the actual or expected activation vector of a given training example, and column length (the number of rows) represents the
size of the batch of training examples. Subtraction and exponentiation in these cases are element-wise. Note that the cost function is sometimes instead written
as half its value above which cancels with the exponent when the cost function is derived with respect to \(a^{(L)}\). We wish to find the partial derivative of
the cost function with respect to each individual parameter (that is, each weight and bias).
    \[\frac{\partial C}{\partial w^{(L)}} = \frac{1}{n} \sum_{k=0}^{n-1} \frac{\partial C_k}{\partial w^{(L)}}\]
Having found this value, we simply multiply it by the learning rate and add it to the corresponding parameter value. The following is another equation that proves
useful in backpropagation:
    \[\delta^{(L)}_j= \frac{\partial C}{\partial a^{(L)}_j} \sigma^{\prime}({z^{(L)}_j})\]
This is an expression of 'error' and is equivalent to finding the partial derivative of the cost function with respect to the weighted sum of a given node. This
expression finds the error associated with a single node, but can be extended to find the error associated with an entire layer \(L\) like so:
    \[\delta^L = \nabla_aC \odot \sigma^{\prime}(z^L)\]
We can re-express this as follows, and see that despite the complexity of the equations, they can be reduced to vector operations and thus be computed quickly 
by software libraries optimised for such:
    \[\delta^L = (a^L - y) \odot \sigma^{\prime}(z^L)\]
We can re-express this again, instead highlighting the relationship between the error associated with one layer and the error associated with an adjacent layer,
thus we can 'backpropagate' this error backwards through our network when computing the partials of our cost function with respect to each parameter:
    \[\delta^l = ((w^{l+1})^{T} \> \delta^{l+1}) \odot \sigma^{\prime}(z^L)\]
The motivation here stems from the fact that if we can define and evaluate a vector that represents the error associated with a network layer, then we can 
update each parameter in that layer based on that error value, rather than the error value associated with the output vector, many layers away.
The use of the tranpose matrix is simply the reverse of the 'feed-forward' approach, except now we are 
backpropagating the error associated with an output activation back to the set of input activations that generated that error, as scaled by weight. We have thus
found (through backpropagation) the cost partial with respect to an activation, but since we have defined error as the cost partial with respect to the weighted
sum, we use the Hadamard product '\(\odot\)' with \(\sigma^{\prime}(z^L)\) (the partial of \(a\) with respect to \(z\)), thus establishing the error of layer 
\(L\) from the error of layer \(L+1\).</p>
<p>
<img src="/Assets/images/backprop_summary_pt1.png" width="100%" height="100%">
<img src="/Assets/images/backprop_summary_pt2.png" width="100%" height="100%">
</p>
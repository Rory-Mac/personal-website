---
layout: narrow
title: Neural-Networks
---
<h4>Neural Networks</h4>
<p>Perceptrons exist as the digital analog to biological neurons in the human nervous system. Perceptrons are layered to create
artificial neural networks (ANNs).</p>
<p><img src="/Assets/images/nn_introduction.png" width="100%" height="100%"></p>
<p>Functionally, a perceptron consists of the summation of weighted inputs with a bias, mapped to an output via an activation function.
This can be expressed as follows.
    \[ σ\left(\left(\sum_{i=1}^n a_iw_i\right) + b \right) \]
We can extend this equation to compute the output activation of a layer of perceptrons.
    \[
    σ\left(
    \begin{bmatrix} w_{0,0} & w_{1,0} & \dots & w_{n,0} \\ w_{0,1} & w_{1,1} & \dots & w_{n,1} \\ 
    \vdots & \vdots & \ddots & \vdots \\ w_{0,n} & w_{1,n} & \dots & w_{n,n} \end{bmatrix}
    \begin{bmatrix} a_0 \\ a_1 \\ \vdots \\ a_n \end{bmatrix} +  
    \begin{bmatrix} b_0 \\ b_1 \\ \vdots \\ b_n \end{bmatrix}
    \right)
    \]
Let us consider a select few activation functions, of which many exist.
\[ Step(x) = \begin{cases} 
      0 & x\leq 0 \\
      1 & x \gt 0 \\ 
    \end{cases} \qquad
    σ(x) = \frac{1}{1+e^{-x}} \qquad
    Tanh(x) = \frac{e^z-e^{-z}}{e^z+e^{-z}} \qquad
    ReLU(x) = max(0, x) \]
The primitives of propositional logic can be mapped to unique weight-sets of simple ANNs. Thus, in theory, ANNs can implement the
functionality of any modern digital circuit.</p>
<p><img src="/Assets/images/ann_logic.png" width="100%" height="100%"></p>
<p>The perceptron can map real input to output directly, however. Its formula hints at the sort of computation we expect it
to be capable of performing beyond simple binary logic.
    \[ z = \sigma(\; w_1x_1 + w_2x_2 + \ldots + w_nx_n + w_0 \;) \]
The parameter set for a perceptron with \(n\) input activations defines an \((n-1)\)-dimensional hyperplane that separates the 
\(n\)-dimensional activation space. Thus, a single perceptron can act as a binary classifier for any linearly separable dataset.
Let us first visualise this in one-dimension.</p>
<p><img src="/Assets/images/perceiving_one_feature.png" width="100%" height="100%"></p>
<p>Our initial parameters transform the input activation space in some way. The weight scales the input space, which we can perceive as 
movement towards or from the number line, whilst the bias shifts the input space in the positive or negative direction. By using the 
binary step function, the input space is classified, visualised above as assigning each input activation a color classification. The
perceptron adjusts its parameter set to determine the optimal classification via the perceptron learning algorithm
with pseudo-code as follows:</p>
<p><code>
&emsp;for each training case (input activation, correct classification):<br>
&emsp;&emsp;&emsp;k = 1 if actual_output == 0 and target_output == 1 else -1<br>
&emsp;&emsp;&emsp;for each input weight:<br>
</code>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\(w_k \leftarrow w_k + k\eta x_k\)<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\(w_0 \leftarrow w_0 + k\eta \)<br></p>
<p>The character \(\eta\) denotes the learning rate. A high learning rate makes for fast convergence at the cost of greater accuracy, whilst a 
low learning rate makes for greater accuracy at the cost of fast convergence.</p>

<p>Backpropagation is a means of finding the gradient vector of a cost function to express the degree to which small changes in each network parameter
affect the cost associated with a batch of training data. We use the gradient vector to modify our parameter set in the direction of least cost. Let us 
start off with the following set of relevant equations:
<a target="_blank" href="https://www.3blue1brown.com/"><img src="/Assets/images/backprop_overview_light.png" width="100%" height="100%"></a>
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
<p><img src="/Assets/images/backprop_summary_pt1_light.png" width="100%" height="100%"></p>
<p><img src="/Assets/images/backprop_summary_pt2_light.png" width="100%" height="100%"></p>
<p>We can now assemble primitive agents that possess simple knowledge structures derived from simulated worlds. Movement towards complexity
within the simulation is akin to movement towards the reality from which the principles of the simulation were created.</p>
<p><img src="/Assets/images/primitive_agent.png" width="100%" height="100%"></p>
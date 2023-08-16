---
layout: default
mode: narrow
title: Perceptrons
---
<h3>Perceptrons</h3>
<p>Perceptrons are digital analogs to biological neurons in nervous systems. Perceptrons are layered, just as neurons are, to create artificial neural networks.
<img src="/Assets/images/nn_introduction.png" width="100%" height="100%">
Each input activation is scaled by a corresponding weight, summed with a bias, and then scaled by an activation function. We express the output
activation of a single perceptron as follows,
    \[ σ\left(\left(\sum_{i=1}^n a_iw_i\right) + b \right) \]
We can extend this equation to compute the output activation of a single layer of perceptrons,
    \[
    σ\left(
    \begin{bmatrix} w_{0,0} & w_{1,0} & \dots & w_{n,0} \\ w_{0,1} & w_{1,1} & \dots & w_{n,1} \\ 
    \vdots & \vdots & \ddots & \vdots \\ w_{0,n} & w_{1,n} & \dots & w_{n,n} \end{bmatrix}
    \begin{bmatrix} a_0 \\ a_1 \\ \vdots \\ a_n \end{bmatrix} +  
    \begin{bmatrix} b_0 \\ b_1 \\ \vdots \\ b_n \end{bmatrix}
    \right)
    \]</p>
<p>The activation functions used in artificial neural networks vary greatly. Some of the most commonly used activation functions include the
step activation function, the sigmoid activation function, the tanh activation function, and the ReLU activation function,
\[ Step(x) = \begin{cases} 
      0 & x\leq 0 \\
      1 & x \gt 0 \\ 
    \end{cases} \qquad
    σ(x) = \frac{1}{1+e^{-x}} \qquad
    Tanh(x) = \frac{e^z-e^{-z}}{e^z+e^{-z}} \qquad
    ReLU(x) = max(0, x) \]</p>
<p>Now that we know what a perceptron is, we want to determine what a perceptron can compute. We quickly realise that perceptrons can be 
used to compute the most fundamental boolean functions, OR, AND, and NOT. Any boolean function can be expressed as a combination of these
primitive functions via conjunctive normal form. Thus, in theory, enough perceptrons in a neural network implementing these said functions
could achieve the same functionality as any modern digital circuit.
<img src="/Assets/images/digital_logic_nns.png" width="100%" height="100%">
Of course the perceptron scales and maps real inputs to outputs directly. Its formula hints at the sort of computation we expect it
to be capable of performing beyond simple binary functions,
    \[ z = \sigma(\; w_1x_1 + w_2x_2 + \ldots + w_nx_n + w_0 \;) \]
We can imagine the set of \(n\) activations as an \(n\)-dimensional input space, and the set of weights as defining an \((n-1)\)-dimensional
hyperplane that divides said input space in two. Thus, the perceptron can act as a binary classifier for any linearly separable dataset.
Let's visualise this in one-dimension:
<img src="/Assets/images/perceiving_one_feature.png" width="100%" height="100%">
Our initial parameters transform the input activation space in some way. The weight scales the input space, which we can perceive as 
movement towards or from the number line, whilst the bias shifts the input space in the positive or negative direction. By using the 
binary step function, the input space is classified, visualised above as assigning each input activation a color classification. This 
concept extends to higher dimensions so that the parameter set for a perceptron with \(n\) input activations defines an \((n-1)\)-dimensional
hyperplane that separates the \(n\)-dimensional activation space. Thus, a single perceptron can act as a binary classifier for any linearly
separable dataset. The perceptron adjusts its parameter set to determine the optimal classification via the perceptron learning algorithm
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
<h4>Hypercubes</h4>
<p>This page simply documents a way to visualise neural network input spaces as projections of hypercubes onto two-dimensional spaces.
Consider the simple case of a neural network with just two one-bit binary inputs. Each input has a corresponding weight, weight one, and weight two. 
A weight scales its corresponding input. This is often thought of mathematically as is, or structurually as the conductivity of the edge through which 
an activation flows in the neural network. A less common way to perceive input scaling, is spatially like so:</p>
<p><img src="/Assets/images/scaling_space.png" width="100%" height="100%"></p>
<p>Consider that the a one bit input scaled by a factor of 2 doubles the range of the input space from (0,1) to (0,2). Thus to scale an input is to 
essentially increase the resolution of the coordinate direction associated with that input, either by moving towards it (if the axis representing the 
input increasing in length with the weight) or to increase its resolution (if the axis representing the input does not increase in length with the weight,
as illustrated above).</p>
<p>This perception of weight scaling as movement through space is generalizable to n-dimensions and gives us intuitive heuristics like hill climbing, 
however for now our spatial perception is limited to three dimensions. It is still the case however, that no matter how large our input space gets, it 
can still be conceptualized as an n-cube for n input nodes with an initial range based on the range of possible input activation that is then scaled by 
the weight. We can perceive higher-dimensional n-cubes for a neural network of n input parameters by using more sophisticated mathematical projection
techniques. Let us first consider the 4-cube:</p>
<p><a target="_blank" href="https://en.wikipedia.org/wiki/Hypercube#/media/File:4-cube_graph.svg"><img src="/Assets/images/4-cube_dark.png" width="50%" height="50%"></a></p>
<p>Despite the increased complexity, we can still identify two distorted three-dimensional cuboids linked on a fourth-dimensional axis. We could imagine 
scaling this fourth dimensional axis to increase the number of of three-dimensional cuboids that exist on that axis. However if we conceptualise such 
scaling as an increased resolution of the components of our structure (rather than each edge lenght actually increasing) we can see that the structure itself 
remains constant, no matter the scaling. The scaling of input weights based on a cost function is therefore conceputalised as movement through abstract 
space, and a kind of 'filtering' of the input space for information of most utilitiy and relevance. We can then appreciate the beauty and signficance of 
projections of higher-dimensional n-cubes, like the following 15-cube, that still can be used to visually represent a network with 15 input features:</p>
<p><a target="_blank" href="https://en.wikipedia.org/wiki/Hypercube#/media/File:15-cube.svg"><img src="/Assets/images/15-cube.png" width="100%" height="100%"></a></p>
<p>Given that reinforcement networks simply modify parameter sets in order to minimise a cost function, the above visualisations are relevant and useful. 
Thus, we can perceive a learning algorithm's continual modification of a parameter set as movement through n abstract spatial dimensions, which I find to 
be quite poetic and beautiful.</p>

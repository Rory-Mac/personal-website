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
<p>The activation functions used in artificial neural networks vary greatly. Some of the most commonly used activation functions include the sigmoid activation function,
the tanh activation function, and the ReLU activation function,
   \[ σ(x) = \frac{1}{1+e^{-x}} \qquad Tanh(x) = \frac{e^z-e^{-z}}{e^z+e^{-z}} \qquad ReLU(x) = max(0, x) \]</p>

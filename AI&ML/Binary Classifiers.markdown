---
layout: default
mode: light
title: Binary Classifiers
---
<h4>Binary Classifiers</h4>
<p>We can think of a single perceptron as a linear classifier. Let us bring to mind a single perceptron with two inputs \(x\) and \(y\), two 
corresponding weights \(w_1\) and \(w_2\), and a bias \(w_0\). The input-output mapping of this particular perceptron can be mathematically expressed as   
\(z = w_1x + w_2y + w_0\) which is simply a line on a two-dimensional euclidean input plane: 
<img src="/Assets/images/linear_classification.png" width="100%" height="100%">
A positive bias brings the line up and a negative bias brings the line down. The weight of \(x\) increases the gradient of the line with respect to \(x\) and
the weight of \(y\) increases the gradient of the line with respect to \(y\). Given that our inputs are the axes themselves, the inputs when expressed as
vectors are linearly independent and \(n\) inputs expressed as vectors produce an \(n\)-dimensional space for which an \((n-1)\)-dimensional hyperplane exists as the 
expression of the current set of parameters (weights and bias). This shape will split the \(n\)-dimensional space in two just as the line splits our 
two-dimensional plane in two, thus classifying the set of all input values into two distinct sets. There simultaneously exists some hypothetical hyperplane
that splits the set of input values into two distinct sets as desired (e.g. cat versus dog, malignant cancer versus benign cancer, spam versus inbox mail, 
etc.). The perceptron learning algorithm is the method by which the perceptron moves the current hyperplane towards the desired hyperplane for a linearly 
separable dataset, by modifying its parameters (and thus the hyperplane itself):<br><br>
&emsp;for each training case (input_value + target_output value):<br>
&emsp;&emsp;&emsp;if actual_output = 0 and target_output = 1:<br>
&emsp;&emsp;&emsp;&emsp;&emsp;for each input weight:<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\(w_k \leftarrow w_k + \eta x_k\)<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\(w_0 \leftarrow w_0 + \eta \)<br>
&emsp;&emsp;&emsp;if actual_output = 1 and target_output = 0:<br>
&emsp;&emsp;&emsp;&emsp;&emsp;for each input weight:<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\(w_k \leftarrow w_k - \eta x_k\)<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\(w_0 \leftarrow w_0 - \eta \)<br><br>
Thus for all misclassifications an update occurs that directs the actual hyperplane produced by the set of parameters towards the target hyperplane. The 
'learning rate' represented by the lowercase eta character \( \eta \) is pre-selected and directs how quickly the perceptorn 'learns' so to speak. It 
will move towards the target hyperplane at a faster rate, at the expense of accuracy, given that a higher learning rate corresponds to a greater degree of 
overshooting. The below image helps visualise this process:
<img src="/Assets/images/binary_classification.png" width="100%" height="100%"></p>
<p>There is a problem however. Our learning algorithm applies only to single-layer perceptron networks, however there exist simple logic functions such 
as XOR which require multi-layer perceptron networks to implement. This is becuase the XOR function is non-linearly-separable but can be broken down 
into logic gates that are (NAND, AND, NOR, OR, etc).</p>
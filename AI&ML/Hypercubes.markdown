---
layout: default
mode: narrow
title: Hypercubes
---
<h4>Hypercubes</h4>
<p>This page simply documents a way to visualise neural network input spaces as projections of hypercubes onto two-dimensional spaces.
Consider the simple case of a neural network with just two one-bit binary inputs. Each input has a corresponding weight, weight one, and weight two. 
A weight scales its corresponding input. This is often thought of mathematically as is, or structurually as the conductivity of the edge through which 
an activation flows in the neural network. A less common way to perceive input scaling, is spatially like so:</p>
<p><img src="/Assets/images/scaling_space_dark.png" width="100%" height="100%"></p>
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
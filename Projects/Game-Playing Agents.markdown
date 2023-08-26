---
layout: narrow
title: Game-Playing Agents
---
<h4>Game-Playing Agents</h4>
<h5>Introduction</h5>
<p>This project was my first foray into neural network design. The hope was that by the end of such an endeavor, I'd have a nice 
self-contained assortment of games each paired with a set of competent agents trained to beat them. Further, I hoped to explore whether
these agents could be integrated into a single and more robust model, capable of beating a variety of games by itself.</p>
<h5>MNIST Visualisation</h5>
<p>Given that I'd be using neural network libraries to build these models, It seemed first important to understand what processing would take
place behind the scenes, to put all further work in context. So as a kind of tangential mini-project, I implemented a feed-forward 
deep neural-network from scratch to process the MNIST dataset, a task oft-considered the 'hello-world' of neural network design. This 
involved understanding the calculus of backpropagation and tensor flow in greater depth, so that an appreciation could be gained for the 
mechanics going on behind the scenes anytime a line of code like 'nn.Linear()' was written. We can attempt to perceive the perception of
the neural network, and how it is deconstructing images of human-written digits into more and more abstract forms, by creating pixel maps
of its weighted values:</p>
<p><img src="/Assets/images/mnist_weights.png" width="100%" height="100%"></p>
<p>Were we to have applied a convolutional neural network to achieve competency in the same task, these abstract forms would likely make a lot
more intuitive sense, given that CNNs are inspired by visual processing in the human brain.</p>
<h5>Lessons from Pong</h5>
<p>The first environment selected for our neural networks to train was that of the retro game Pong, first released in 1972. I coded the game up from scratch, built 
a hebbian learning agent, a NEAT learning agent, a human-controlled pong paddle (so that we can play against our agents if we wish to), and a perfect agent built
from math for our learning agents to play against and thus learn from.</p>
<p><img src="/Assets/images/pong.gif" width="100%" height="100%"></p>
<p>For a relatively simple game like pong, it seems that all our learning techniques arrive at perfect agents. Lets take a similarly simple but more recent game, and
again code it from scratch, in this case 'Grav Bird' (A direct clone of flappy bird, with some minor tweaks and changes).</p>
<h5>Lessons from Grav Bird</h5>
<p>Again we applied NEAT, as well as a Deep-Q network, a CNN-connected Deep-Q network, and a model-free vanilla Q-learning technique. This is a step in the right 
direction, as we can now say that the agents are learning with the same amount of information as a human. Consider that in our previous models, we would pass 
game parameters in directly (such as player velocity, distance to obstacle, etc), whereas now the agent perceives nothing more than the visual content of the game
iteslf, just as a human does.</p>
<p><img src="/Assets/images/grav_bird_neat.gif" width="50%" height="50%"></p>
<p><img src="/Assets/images/grav_bird.gif" width="50%" height="50%"></p>
<p>It is here that NEAT, despite its superiority for our simpler earlier game, loses its advantage. Note that it is still superior in that it produces a perfect agent
in a way that our Q-learning models do not, but only if the game is made quite easy (reasonable distance between pipes, reasonably slow speed of gameplay, etc). This
is likely because in NEAT, the agents don't actually backpropagate and learn from their experiences, instead weights are modified through mutations. This evolutionary
process is much slower, and fails to arrive at the more complex solutions that can be discovered via backpropagation. The Deep-Q model performs quite well, however it
required a fair bit of fine-tuning of the hyperparameters. To get the model working, I needed to implement Adam learning-rate Optimisation, experience replay and 
epsilon-decay.</p>
<h5>Lessons from Block-Surfer</h5>
<p>Something I forgot to mention is the fact that an extra sort of Mini-Game was that of 'Sprite Walk'. Sprite Walk was a simple proof-of-concept maze-solver where
an agent navigates a two-dimensional maze, learning to essentially enact a depth-first-search without prior awareness of such an algorithm using Q-learning. 
<p><img src="/Assets/images/sprite_walk.gif" width="50%" height="50%"></p>
<p>Not only did this assist with the development of our grav-bird agents, but it also segways nicely into 'Block Surfer' a game in which the agent must perform a visual 
depth-first-search the way a human might. The difference is that in Block Surfer, this search will have to occur at nearly every time step, so that the agent knows 
which path to take to survive not only in the short-term but in the long-term.</p>
<p><img src="/Assets/images/block_surfer.gif" width="100%" height="100%"></p>
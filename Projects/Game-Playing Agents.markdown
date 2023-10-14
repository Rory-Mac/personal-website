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
mechanics going on behind the scenes anytime a line of code like 'nn.Linear()' was written. The source code can be found on GitHub.</p>
<h5>Lessons from Pong</h5>
<p>The first environment selected for our neural networks to train was that of the retro game Pong, first released in 1972. I coded the game up from scratch, built 
a hebbian learning agent, a NEAT learning agent, a human-controlled pong paddle (so that we can play against our agents if we wish to), and a perfect agent built
from math for our learning agents to play against and thus learn from For the relatively simple game pong, all learning techniques arrived at perfect agents. .</p>
<p><img src="/Assets/images/pong.gif" width="100%" height="100%"></p>
<h5>Lessons from Grav Bird</h5>
<p>Lets take a more recent but equally simple game, flappy bird, and code it from scratch to create our own 'grav bird' clone.
Again we applied NEAT, a Deep-Q network, a CNN-Deep-Q network, and a model-free vanilla Q-learning technique. This is a step in the right 
direction, as we can now say that the agents are learning with the same amount of information as a human. Consider that in our previous models, we would pass 
game parameters in directly (such as player velocity, distance to obstacle, etc), whereas now the agent perceives nothing more than the visual content of the game
iteslf, just as a human does.</p>
<p><img src="/Assets/images/grav_bird_neat.gif" width="50%" height="50%"></p>
<p>In the case of grav bird, NEAT loses its superiority. It is still superior in its ability to produce a perfect agent, but only if the game is made quite easy 
(reasonable distance between pipes, reasonably slow speed of gameplay, etc). This is likely because in NEAT, the agents don't actually backpropagate
and learn from their experiences, instead weights are modified through mutations. This evolutionary process is much slower, and fails to arrive
at the more complex solutions that can be discovered via backpropagation. The Deep-Q model performs quite well, however it required a fair
bit of fine-tuning of the hyperparameters. To get the model working, I needed to implement Adam learning-rate Optimisation, experience replay and 
epsilon-decay.</p>
<p><img src="/Assets/images/grav_bird.gif" width="50%" height="50%"></p>
<h5>Lessons from Block-Surfer</h5>
<p>Something I forgot to mention is that I created an additional mini-game called 'sprite walk'. Sprite Walk was a simple proof-of-concept maze-solver where
an agent navigates a two-dimensional maze, learning to implement a depth-first-search without prior awareness of such an algorithm using Q-learning. 
<p><img src="/Assets/images/sprite_walk.gif" width="50%" height="50%"></p>
<p>Not only did this assist with the development of our grav-bird agents, but it also segued nicely into block surfer, a game in which the agent must perform a visual 
depth-first-search the way a human might. The difference is that in block surfer, this search will have to occur at nearly every time step, so that the agent knows 
which path to take to survive not only in the short-term but in the long-term.</p>
<p><img src="/Assets/images/block_surfer.gif" width="100%" height="100%"></p>
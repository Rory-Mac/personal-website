---
layout: default
mode: light
title: Markov Decision Process
---
<h4>Markov Decision Process</h4>
<p>Let us first look at Markov Chains, from which Markov Decision Processes are derived. A Markov Chain is a stochastic model. Stochastic model is a fancy mathematical
term that is simply used to refer to a system that evolves across time based on some form of probability distribution. More formally, a stochastic model is a family of 
random variables indexed by some parameter within a probability space. Let us look at our first example:
<img src="/Assets/images/markov_chain.png" width="100%" height="100%"></p>
<p>Each node exists as a state, and each edge exists as a probablistic state transition. The Markov Chain, as one might guess, satisfies the Markov property. The 
Markov property is the property of a stochastic process where the probability of the next state transition to occur is entirely independent from the sequence of 
state transitions that already have occurred (the history of the stochastic process).</p>
<p>A Markov Decision Process, builds upon the concept of a Markov Chain, by introducing the concept of actions. That is, the current state is associated with a
decision maker, from which a set of actions exist that the decision maker can take. Taking an action causes a state transition based on a set of probalistic 
state transitions associated with that action as defined by a state transition function \(P_a(s, s')\). Each state transition is associated with a reward as defined 
by a reward function \(R_a(s, s')\). Let us look at our next example:
<img src="/Assets/images/markov_decision_process.png" width="100%" height="100%"></p>
<p>We can formalise our notion of a markov decision process with the 4-tuple \((S,A,P_a,R_a)\):
    <ul>
        <li>\(S\) is a set of states (the state space).</li>
        <li>\(S\) is a set of actions (the action space).</li>
        <li>\(P_a(s, s')\) is the state transition function.</li>
        <li>\(R_a(s, s')\) is the reward function.</li>
    </ul>
We can collapse a Markov Decision Process back into a Markov Chain by setting the reward to a constant value for all state transitions, and having no more than a single 
action associated with each state. The question then becomes: what policy should exist for the decision-maker to follow? We express this as function \(\pi(s)\) that 
outputs the decision made for a given state input \(s\). The policy should be one that maximising cumulative reward for the decision-maker. This cumulative reward can 
be estimated in the current state as the expected discounted sum over a finite or possibly infinite time horizon:
\[E\left[ \sum_{t=0}^{\infty} \gamma^{t} R_{a_t}(s_t, s_{t+1})\right]\]
We denote an optimal policy \(\pi^*\). It is not always obvious, however, what the state-transition probablities are. In such a situation we may use simulator models
that simulate a system following a markov decision process, and record the probablities of state-transitions as the sum of state-transitions to have occurrred 
over an appropriate time period, were the decision maker to make random decisions. The same method can be applied to determine the reward associated with state 
transitions if this too is unknown.</p>
<p>Recursive methods used in dynamic programming can help determine the optimal policy for a Makrov Decision Process with a finite state and finite action space.
One such method would be to contain an array of values associated with states and an array of policies associated with actions, both of which are recursively 
updated until no changes are made:
    \[ V(s) := \sum_{s'} P_{\pi(s)}(s, s')(R_{\pi(s)}(s,s') + \gamma V(s')) \]
    \[ \pi(s) := argmax_a \biggl\{\sum_{s'} P_a(s, s')(R_a(s,s') + \gamma V(s')) \biggl\} \]
To put this informally, to calculate the value of a state, we take the value associated with each state that our current state could transition to, discount 
these states by a discount factor \(\gamma\), add the rewards associated with these state transitions, multiply our computed values by the probability of the state
transition occurring (based on our current policy function), and sum these computed values together. We then update our policy function such that the action 
associated with the current state is the the one that maximises the value of the current state. We can combine these two computational steps into one:
        \[ V_{i+1}(s) := max_a \biggl\{\sum_{s'} P_a(s, s')(R_a(s,s') + \gamma V_i(s')) \biggl\} \]
</p>
<p>Reinforcement learning refers to the learning of intelligent agents in an environment where the actions of the agents are based on an attempt to maximise 
a cumulative expected reward. Q-Learning is a reinforcement learning technique used to find the optimal policy in a Markov Decision Process with a finite 
state and action space, where the state transition function and reward function may be unknown. Let's look at the pseudocde for the Q-Learning algorithm:</p>
<p><code style="font-size:1rem;">
Initialise Q(S,A), ∀s ∈ S, a ∈ A(s); set Q(terminal-state, ⋅ ) = 0<br>
Repeat (for each episode):<br>
&emsp;Initialize S<br> 
&emsp;&emsp;&emsp;&emsp;Repeat (for each step of episode):<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Choose A from S using ε-greedy policy<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Take action A, observe R, S'<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Q(S,A) ← Q(S,A) + 𝛼[R + γ max_a Q(S', a) - Q(S,A)]<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;S ← S'<br>
&emsp;&emsp;&emsp;&emsp;until S is terminal-state<br>
</code></p>
<p>A nice way to visualise this is with a simple two-dimensional application. The dark gray square bottom-left represents the intelligent agent. The concentric squares 
top-right represent the goal state. Each square is a state in our state diagram, and each cardinal direction is an action from that state, thus there exist four actions
for every state. There are exceptions to this: non-corner edge cells have three state-action pairs, whilst corner cells have two. Movement onto a dark-square can be
thought of as a sink hole, that terminates the current episode and carries a signficantly negative reward. Our agent follows an ε-greedy policy, meaning it will
take a random action a small percent of the time, and the optimal action a large percent of the time.
<img src="/Assets/images/q_learning_simple_map.png" width="100%" height="100%"></p>
<p>All grid cells are initialised to a small negative reward, though in the case of our application, dark cells are initialised to a large negative reward. The goal state 
has a reward value of zero (the optimal state, greater than all negative rewards in the map). The first decision of our agent is essentially random. If the ε-greedy
policy dictates a random move the move will be random, else if the ε-greedy policy dictates the greedy move, this will still be essentially random as the Q-values
associated with our state space have not yet been learnt. Say the agent takes an inital action by moving right, then we immediately observe a reward R and a new state
S'. In accordance with our pseudocode, we plug these values in to determine what is called the 'temporal difference', that is we find the maximum Q-value for the 
state-transitions that exist from our new state, discount this value, add our observed reward, subtract the Q-value from our previous state, multiply this difference
by a learning rate, and finally update the Q-value of the initial state we had just moved from. This process will repeat recursively until the optimal policy is found,
(the chain of state-transitions that maximises cumulative reward across time, terminating at the goal state).
<img src="/Assets/images/state_action.png" width="100%" height="100%"></p>
<p>We have made an assumption that in the above heuristic the maximum Q-value for the new state will not coincide with a state-action pair that returns us to our intial
state. This is true of the optimal policy, as needless recurrent movement will decrease cumulative reward. In the process of learning however, our agent may
enter such loops. We could have devised a system where there is no terminal state and instead the agent's goal is to find such a loop that is maximally rewarding. 
For such situations, the ε-greedy policy helps to avoid local minima.</p>
<p>A similiar reinforcement learning algorithm named SARSA (State-Action-Reward-State-Action) is near-identical to Q-learning except that the Q-value for the next state
in our equation is determined from an action sampled from our ε-greedy policy, rather than as a max of Q-values associated with the set of actions that could be taken
from the new state:
<p><code style="font-size:1rem;">
Q(S,A) ← Q(S,A) + 𝛼[R + γ Q(S', A') - Q(S,A)]<br>
S ← S'; A ← A'<br>
</code></p>
<p> This simple difference is what makes Q-learning an 'off-policy' algorithm and SARSA is an 'on-policy' algorithm. Q-learning will evaluate the quality of the next
state based on a function separate from the learnt optimal-policy. 
</p>
<p>There is a limitation to our learning model however, which is the fact that the finitude of the state-action space is necessary for the agent to learn. Deep-Q 
models use deep neural networks to act as function approximators for the Q-Learning algorithm. The neural network learns to predict the Q-values associated with an 
element of the state action space based on a simple Mean-Squared-Error (with neural inputs being composed of the current state, next state, transition-reward and termination-factor, i.e. does the transition 
terminate the current episode). The hope is that the neural network can learn features of the state-action space and generalise to new input samples.</p>
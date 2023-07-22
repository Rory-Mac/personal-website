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
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Q(S,A) ← Q(S,A) + 𝛼[R + γ max Q(S', A) - Q(S,A)]<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;S ← S'<br>
&emsp;&emsp;&emsp;&emsp;until S is terminal-state<br>
</code></p>

<!--
    Q-Learning pseudocode and visualisation
    SARSA pseudocode and visualisation
    Deep-Q Networks for generalization
    Bellmann equation
-->
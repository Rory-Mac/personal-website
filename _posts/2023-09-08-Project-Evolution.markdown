---
layout: narrow
title: Project Evolution
---
<h4>Project Evolution</h4>
<p>This post documents a simple but useful heuristic that I try to remind myself of when working on personal projects. When trying to 
engineer a system, we first perceive a current state, that is the absence of system components, and a goal state, the beautifully 
engineered system we hope to realise through the efforts of the project. The process of creating and linking subcomponents towards the
goal state requires an understanding of the playing field, that is, the rules that constrain the evolution of the system.</p>
<p><img src="/Assets/images/requirements" width="100%" height="100%"></p>
<p>The first step is to understand these requirements in detail, these constraints that define how the system can and cannot evolve. Here 
we can think in the limit, assuming an infinite amount of resources and engineering talent to manage said resources, what do we think
could and could not be done? The resolution of these constraints can grow as we take into account the actual resources at hand.</p>
<p><img src="/Assets/images/deletion" width="100%" height="100%"></p>
<p>The next step is to be biased towards deletion. To move towards our goal system that fulfills some desirable function, we have to add
subcomponents based on our best hypotheses as to what such subcomponents should be. We can either add system components for all
conceivable cases where they might prove useful, and remember that the best design exists as some refined form of the current nest of
system components. Alternatively, we can bias ourselves towards deletion of system components that are not obviously necessary, and
reintroduce them when they become obviously necessary. It seems that we often favor the former approach when we should be favoring the latter
approach. Because we are risk-averse creatures, having to add back a component we had deleted feels far greater a loss than the gain of
deleting system components that we discover we don't need after the fact. However, keeping our system design lean helps make clear our
current hypothesis, and progress at a more rapid rate. Imagine there are ten cardinal components that separate our current design from a 
working solution, then deleting one component for every two added would converge at about ten design iterations, as would adding 10 and 
deleting 9, however in the latter case we would have needed to perform ten times the work to converge at the same time.</p>
<p><img src="/Assets/images/optimisation" width="100%" height="100%"></p>
<p>The third step is to optimise the subcomponents, assuming enough thought has been given to steps one and two. Although is not ideal to
construct a system component that will soon be deleted, it is even worse to optomise a system component that will soon be deleted. We want
to have justified confidence that the component we are optomising is well-defined and a necessary subcomponent of the goal system. Of course
there still exist components that haven't been realised, so our refined hypothesis design, once optomised, exists as a kind of core for the 
next iteration. It is here that we can look to accelerating the iterative cycle whilst maintaining the above standards.</p>
<p>This is where personal motives come into play. The iterative cycle will be accelerated if the individual engineer's working on it have a 
great sense of curiosity and desire for the realisation of the goal system, the kind of passion that allows for an extreme work ethic without
causing burnout. The last step is that of automation, which can be thought of as an extension to acceleration of the iterative design cycle.</p>
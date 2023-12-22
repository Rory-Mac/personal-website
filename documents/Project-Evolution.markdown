---
layout: narrow
title: Project Evolution
---
<h4>Project Evolution</h4>
<p>This post documents a simple but useful heuristic that I try to remind myself of when working on personal projects. Before the project 
comes the inspiration, a vision of a system that would fulfill some desirable function. Then comes consideration for the plausibility of 
the existence of such a system. To determine such, we have to articulate what we require of the system, and understand the constraints that
will limit its evolution. We consider the constraints that apply to all systems (the laws of physics, for instance) and the constraints that
uniquely apply to the goal system (e.g., the effect of radiation when developing satellite technology, what is and is not 
computable when developing new digital algorithms, etc). It can be helpful to think in the limit, a hypothetical in which we possess an infinite supply of
engineering talent and resources, and then introduce more realistic constraints from there.</p>
<p><img src="/Assets/images/requirements.png" width="100%" height="100%"></p>
<p>The next step is to be biased towards deletion. Deletion is an inevitability. We cannot wait to be perfectly confident in our design 
decisions before making them, which means some design decisions will prove wrong and some developed system components will prove useless
later on. One approach is to develop components for all conceivable cases, and identify the most necessary ones after the fact. The other
is to hypothesise which components are necessary, and to create and delete components with respect to that hypothesis. As risk-averse 
creatures, we are inclined to favor the former, because re-adding a deleted system component seems far greater a cost than having a 
system component that is of no use. The problem is that if components only exist 'in-case' they serve some present or future function, 
then there is no real hypothesis, just a brute-force approach. If we instead bias deletion, then the system evolves with our proven and
disproven hypotheses, converging to the goal system at a much faster rate.</p>
<p><img src="/Assets/images/deletion.png" width="100%" height="100%"></p>
<p>The third step is to optimise. It is pointless to optimise a system component that will soon prove irrelevant to the overall
design. This is why we want to have developed confidence in the necessity of our system components through iterations of hypotheses as
previously discussed. Only then can we begin to optimise the system components that really matter. Optimisation introduces a new level
of abstraction, and so it is important that it apply only to the core components of our evolving design, the 
components that have been most impervious to design changes for the most amount of time.</p>
<p><img src="/Assets/images/optimisation.png" width="100%" height="100%"></p>
<p>Finally, we can look at accelerating the design cycle. More personal motives and narratives come into play here. The design cycle will
inevitably be accelerated if the engineer has a great sense of curiosity and desire for the realisation of the desired system. Even better
is if the engineer associates such a realisation with a narrative of struggle and discovery, as this can motivate a more extreme work ethic
that maintains itself and avoids burnout. Automation can exist as a further extension to this acceleration.</p>

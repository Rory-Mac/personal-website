---
layout: default
mode: narrow
title: Coding Theory
---
<h3>Coding Theory</h3>
<p>The binary alphabet is comprised of the beautifully simple character set 0 and 1. It is a very easy language to learn:
<br><br>&emsp;1)	write 0 or 1
<br>&emsp;2)	repeat ad infinitum</p>
<p>In no dimensions we have the concept of zero and one:</p>
<div class="flex"><img src="/Assets/images/number_zero_inverted.png" width="10%" height="10%">
<img src="/Assets/images/number_one_inverted.png" width="10%" height="10%"></div>

<p>In one dimension we have a binary number line:</p>
<p><img src="/Assets/images/binary_number_line_inverted.png" width="100%" height="100%"></p>

<p>The pattern by which the binary number line extends is as follows:</p>
<p><img src="/Assets/images/binary_number_line_pattern_inverted.png" width="100%" height="100%"></p>

<p>This pattern can be replicated in all n-digit number systems. In two dimensions we can think of binary by the same pattern, except
 that each level in this tower is a two-dimensional square.
Just looking at the expansion of these squares gives us the following</p>

<div class="flex">
	<img src="/Assets/images/2d_binary_squares_inverted.png" width="20%" height="20%">
	<img src="/Assets/images/2d_binary_wave_inverted.png" width="20%" height="20%">
	<img src="/Assets/images/2d_binary_wave2dark.png" width="20%" height="20%">
</div>

<p>The same pattern extended to a 1024x1024 grid in sdl:</p>
<p><img src="/Assets/images/binary_wave1024x1024_rotated.png" width="50%" height="50%"></p>
<p>Boolean functions are functions that associate a set of boolean inputs with a set of boolean outputs. Here is an example.</p>

<p><span style="white-space: pre;">
&emsp;γ δ ε
&emsp;0 0 0&emsp;1 0 1 0 1 0 0 1
&emsp;0 0 1&emsp;1 0 1 0 1 0 1 0
&emsp;0 1 0&emsp;1 1 1 0 1 1 0 1
&emsp;0 1 1&emsp;1 1 1 1 1 0 1 1
&emsp;1 0 0&emsp;1 1 1 0 1 1 0 0
&emsp;1 0 1&emsp;0 1 0 1 1 0 1 1
&emsp;1 1 0&emsp;0 1 0 1 0 1 0 0
&emsp;1 1 1&emsp;1 0 1 1 0 1 1 1
</span></p>
<p>We can visualise the set of all possible inputs in a boolean function as a fractal, much like above, by color-coding 0 as black, 1 as white, and columns as byte-values:</p>
<p><img src="/Assets/images/byte_truth_cases5.png" width="50%" height="50%"></p>

<p>The rows beneath the body of truth-cases represent an extension of the 16 1-bit output functions in a 2-bit system:</p>
<p><img src="/Assets/images/truth_cases.png" width="50%" height="50%"></p>

<p>Two more useful boolean functions are that of the multiplexor and demultiplexor, with truth tables as follows:</p>
<p><img src="/Assets/images/mux_demux.png" width="50%" height="50%"></p>

<p>The selector bits in the leftmost columns of these respective truth tables select which of the other input bits should be passed to output. They also form a fractal,
which in our case is akin to scalability, such that we can build large memory modules such as RAM.</p>

<p>In 3D we can visualise binary by assigning each edge of a cubic with a binary coordinate (these are nested cubes of a 3-byte coordinate system)</p>
<p><img src="/Assets/images/3d_binary_wave2.png" width="50%" height="50%"></p>

<p>3-byte coordinate systems are great at representing additive and subtractive color so we can use opengl and three.js to produce the following:</p>
<div class="flex">
    <img src="/Assets/images/color_cube1.png" width="50%" height="50%">
    <img src="/Assets/images/color_cube2.png" width="50%" height="50%">
</div>
<p>Throughout this document we have been approaching the concept of hamming spaces.
A hamming space is the set of all words with character length N in the alphabet Q.
We can visualise hamming spaces as tree structures with nodes representing symbols and edges representing symbol selections.
Each instance of branching appends n^b nodes to the hamming space of an alphabet Q, where n is the number of symbols in the alphabet Q and b the length of the word.
Take for instance the binary alphabet Q with N=4 and the decimal alphabet R with N=3. </p>
<div class="flex">
<img src="/Assets/images/tree_inverted.png" width="50%" height="50%">
<img src="/Assets/images/tree2_inverted3.png" width="50%" height="50%">
</div>

<p>The set of n symbols in alphabet Q when represented as a set of sets represents a complete graph. The hamming space is thus the set of all N-length paths that
can be traversed within this graph.</p>
<p><img src="/Assets/images/complete_inverted.png" width="20%" height="20%"></p>

<p>To simplify consider the below</p>
<p><img src="/Assets/images/refraction_sets.png" width="50%" height="50%"></p>

<p>A vector in this graph from set A to B reads as 'each element pair (a,b) in the bijection A → B is such that b exists if and only if a exists and the relation R is
true for all b and true for no a'. This holds true for a relation representing any dimension we might have. In the above diagram we have the set of symbols 0,1 in the 
x,y,z dimensions, all of which are existentially dependent on the set of symbols 0,1. These sets would not exist if the concept of 0 and 1 did not exist, which would 
not exist if existence didn't exist. Each element in our dimension sets is a vector, it has a direction and a value. Thus hamming observes that for any alphabet
that exists as a finite field, any hamming space over n symbols in an alphabet Q produces an n-dimensional vector space.</p>

<p>Thus we can consider basic arithmetic as movement through this vector field.</p>
<p><img src="/Assets/images/hamming_space_dark.png" width="50%" height="50%"></p>

<p>Any symbol will be connected to all other symbols, and thus any word in the alphabet Q is n substiutions away from that word. The hamming distance between two 
strings equals the number of substitutions required for one to become equal to the other.</p>
<p>A finite state automaton is a network of nodes and edges representing states and transitions repectively. The network exists as a directed graph 
    with a singular inbound edge that is not connected to any node, representing an input stream. The processing of this input stream through the network is 
    referred to as a 'run'. Each character in the input stream acts as a 'transition' through the network, from one 'state' to another. If the weighted
    value of an outbound edge matches the current character, it exists as the next transition in the run. If multiple outbound edges match the current 
    character one of them will be selected as the next transition in the run. A deterministic finite state automaton (DFA) has no such case of 
    multiple outbound edges of matching value. A non-deterministic finite state automaton (NFA) is one that does. A state with two circles 
    is an 'acceptor' state, one that 'matches' our input stream once all characters have been processed.
    Some simple examples:</p>
<p><img src="/Assets/images/dfa1_dark.png" width="100%" height="100%"></p>
<p>An automaton can be more formally represented as:
        \[ M = \langle \Sigma, \Gamma, Q, \delta, \gamma \rangle \] </p>
<p>\(\Sigma \) is the finite set of symbols in a given input alphabet<br>\(\Gamma\) is the finite set of symbols in a given 
output alphabet<br>\(Q\) is a set of states<br>\(\delta\) is a set of state-input pairings<br>\(\gamma\) is a set of 
(state-input)-output pairings</p>
<p>A run can then be defined as a set of states \(q_0, q_1, \dots, q_n \) where \(q_i \in Q\) and \(q_i = \delta(q_{i-1}, a_i)\).
   Thus we can construct a DFA to determine whether a word (a set of characters in an input stream) is grammatically correct, by determining whether its 
   final state is an acceptor state. 
<p>This has application in regular expression engines and compilers.</p>
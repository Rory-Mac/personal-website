---
layout: narrow
title: Computer Architecture
---
<h4>Computer Architecture</h4>
<p>Our contemplation of computer architecture can start with a simplified model:
<img src="/Assets/images/simple_architecture.png" width="100%" height="100%">
This model is a first step in combining combinational and sequential logic. The set of core registers not resident in main memory can be 
thought of as an information state, which can be stored and loaded to and from main memory, and can be manipulated through the core logic
unit (which contains the set of operations implemented through combinational logic circuits that can be applied to these registers).</p>
<p><img src="/Assets/images/evolved_architecture.png" width="100%" height="100%">
Our evolved architecture is an extended form of the Von Neumann Architecture, with introduces software through the stored
program concept: the separation of main memory into data memory and instruction memory. This allows for the information state of the 
computer architecture to evolve by an algorithm that is resident in memory, and can easily be exchanged for other software algorithms 
by rewriting the instruction memory. Load and store of the software program itself to and from instruction memory can be handled by 
another process that interfaces with memory-mapped input-output devices. These are devices that write to or read from data memory outside
the CPUs fetch-execute cycle. The simplest and most intuitive example is that of a keyboard (input) and screen (output).</p>
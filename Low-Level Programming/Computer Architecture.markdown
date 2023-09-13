---
layout: narrow
title: Computer Architecture
---
<h4>Computer Architecture</h4>
<p>Our first model expressed a first step in combining combinational and sequential logic. The set of core registers not resident in main
memory can be thought of as an information state, which can be stored and loaded to and from main memory, and can be manipulated through 
the core logic unit (containing the set of operations that can be applied to these registers, implemented by combinational digital circuits).</p>
<p><img src="/Assets/images/simple_architecture.png" width="100%" height="100%"></p>
<p>A modern computer system is a finite state machine. Four gigabytes of memory is equal to 32 billion bits, and expresses one
information state. This means that a computer with 4GB of main memory can occupy \(2^{32000000000}\) information states. Operators
define state transitions, expressed as directional edges between information states.
The number of outbound directional edges that exist for one information state equals the number of operators implemented by the core logic
unit, multiplied by the number of operands they could operate on. For a unary op such as negation, this would equal one billion outbound
edges for a 32-bit architecture with 4GB of main memory. For a binary op such as bitwise-AND this equals \(1000000000 \choose 2\). 
Needless to say, it is a very large state machine, but a state machine nonetheless.</p>
<p><img src="/Assets/images/evolved_architecture.png" width="100%" height="100%"></p>
<p>Our evolved architecture is an extended form of the Von Neumann Architecture, with introduces software through the stored
program concept: the separation of main memory into data memory and instruction memory. This allows for the information state of the 
computer architecture to evolve by an algorithm that is resident in memory, and can easily be exchanged for other software algorithms 
by rewriting the instruction memory. Load and store of the software program itself to and from instruction memory can be handled by 
another process that interfaces with memory-mapped input-output devices. These are devices that write to or read from data memory outside
the CPUs fetch-execute cycle. The simplest and most intuitive example is that of a keyboard (input) and screen (output).</p>
<p>The question then raised, is how does the fetch-execute cycle actually work? To create a control unit responsible for this execution 
cycle, we require a program counter and an instruction register. The program counter, also known as the instruction pointer, stores the 
address of the instruction to be decoded in the current clock cycle, this instruction is read from memory and written to the instruction 
register, to be decoded. This instruction defines the next step in the run on our state machine.

</p>
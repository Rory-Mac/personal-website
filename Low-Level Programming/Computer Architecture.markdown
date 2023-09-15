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
register, to be decoded. This instruction defines the next step in the run on our state machine. What instructions are typically available?
Let us use the RV32I Base Integer Instruction Set as a simpler example that can be extended to further forms of computation, such as 
atomic instructions, floating-point arithmetic, multiplication and division, etc. This RISC-V standard defines six instruction classes.</p>
<p><img src="/Assets/images/RISC-V_formats.png" width="100%" height="100%"></p>
<p>Source and destination registers are color-coded blue, immediate values green, control bits yellow and opcodes red. This color-coding 
reveals that despite the complexity of the data formats, they each represent fundamental classes of operations. The R-type instruction 
operates on two source registers and stores the result in a destination register, as does the I-type instruction, except with one register
and one immediate value as the operands. The S-type instruction stores the results of computation in main memory and thus uses an immediate
value in place of the destination register bitfield. The B-type instruction extends the S-type for branching, writing to the program counter
instead of main memory. The U-type instruction loads an immediate value into the upper 20-bits of the destination register, and is extended
to the J-type instruction with adds this value to the program counter and stores the result in the destination register.</p>
<p>We then need to determine how to create datapaths between the control unit, the logic unit, the core registers and main memory, to 
allow for the decoding of all instructions for all instruction types. We can then increase the efficiency of our processor with multi-cycle 
and pipelined processor designs.</p>
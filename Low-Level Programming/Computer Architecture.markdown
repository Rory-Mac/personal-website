---
layout: narrow
title: Computer Architecture
---
<h4>Computer Architecture</h4>
<p>The following simplified model represents the first step in combining combinational and sequential logic to form a finite state machine.
The state of this state machine is segmented into a small number of core registers and a large number of main memory registers, that is 
arrays of arrays of latched data flip flops. Using a small set of core registers that are distinct from main memory allows for faster 
load and store of intermediate values in a program execution, and to allow further abstractions of our state machine. For example, if
we reference one core register as a stack pointer and another as a return address and use them as such, our computational model evolves 
from that of a state machine to that of a pushdown automata. Combinational digital circuits that transform data signals are combined to
form a logic unit. Values loaded from memory are transformed by the core logic unit before being stored back into memory. Sequential
register logic necessitates a clock, with each clock cycle corresponding to a state transition. Thus, an instruction sequence maps to a
state-transition sequence which defines the run on our state machine.</p>
<p><img src="/Assets/images/simple_architecture.png" width="100%" height="100%"></p>
<p>The node values of a state machine define an alphabet, whilst the edge values define a grammar. Alternatively, the node values of a 
state machine can define a current value, whilst the edge values define instructions for the manipulation of the current value. Combining
these two facts we know that our computer architecture can validate and execute instructions formulated in a regular language. We store 
these instructions in memory, and thus distinguish between data memory and instruction memory. But an initial program needs to be loaded 
into instruction memory through some interface outside to the core hardware we have thus far described. This interface is referred to as
input-output, and defines the boundary between the computer architecture and its external environment. Input-output to another device is
typically memory-mapped, which means that it is addressed in the same address scope as main memory and can be written to and read from in the
same manner. A program counter stores the address to the next instruction to be processed, whilst an instruction register
stores the instruction being currently processed (addressed by the program counter one clock cycle before). The action performed by these
registers is referred to as the fetch execute cycle.</p>
<p><img src="/Assets/images/evolved_architecture.png" width="100%" height="100%"></p>
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
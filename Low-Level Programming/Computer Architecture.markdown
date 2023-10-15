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
<p>The instruction being executed is composed of a sequence of bitfields. These bitfields are decoded and passed to the relevant components
of the hardware for processing. Let's consider the RISC-V RV32I Base Integer Instruction Set as an example. Source and destination registers,
immediate values, control bits, and opcodes are colored blue, green, yellow and red, respectively. Hundreds of instructions can be 
expressed by a small number of instruction formats. The R-type (R for register) instruction format has three register bit fields addressing
registers in core memory. The control bits tell the core logic unit which operator to apply to these operands before storage. Opcodes put
instructions in categories and coordinate the action of hardware components. For example, the opcode for an R-type instruction that loads
and stores values to and from core registers will not write-enable main memory, just as the S-formatted STORE instruction will store a value
to main memory but not write-enable the core registers.</p>
<p><img src="/Assets/images/RISC-V_formats.png" width="100%" height="100%"></p>
<p>The regular language implemented by the the computer maps to an assembly language. An assembly language is a language with
near one-to-one correspondance between instructions and binary. For example, the assembly instruction ADD r1, r2, r3 can be directly 
fetch-executed and maps to the bit fields \( 0000000 \; 00011 \; 00010 \; 000 \; 00001 \; 0110011\). Further abstractions allow us to move
towards the validation and execution of recursively-enumerable languages. These are high-level programming languages far more
expressive than assembly. We can start by giving the core registers an additional meaning.</p>
<p><img src="/Assets/images/register_abstraction.png" width="100%" height="100%"></p>
<p>The above register mapping belongs to the RISC-V Instruction Set Architecture, not dissimilar from other ISA register mappings.
 Register zero is denoted zero in assembly, and is hard-coded with zero bits. It can be used as a constant, and is useful
in the creation of pseudo-instructions. For example, 'mv rs rd' could assemble into the equivalent instruction 'add rs rd zero'.
The return address register stores the instruction following a function call, so we can return to our current context
after a called subroutine has finished executing. Argument registers store arguments or pointers to arguments, which can be accessed by 
the called function and overwritten with return values. The distinction between temporary and saved registers is that saved registers must
be preserved across function calls. To do this, a called function pushes saved register values it wishes to use onto the stack, and then 
pops them back upon finishing its execution. The stack is accessed by way of a stack pointer.</p>
<p><img src="/Assets/images/call_stack.png" width="100%" height="100%"></p>
<p>By introducing the frame pointer we introduce the concept of context-switching, that is, what context should be saved when switching
from our current execution environment to a called function. As can be seen in the rightmost column of the RISC calling convention, the 
caller saves any temporaries, function arguments and return values, before pushing a stack frame to the stack and jumping to the called
context. The frame is a region on the stack that preserves important register values, including a frame pointer to the frame itself,
the return address to jump back to once the function is complete,   
</p>
<!--
The call stack diagram
global pointer points to data, this includes initialised and uninitialised (bss). Uninitialised may contain garbage values or be zeroed.
thread pointer and thread local storage
heap, kernel, syscalls
multi-cycle, pipelined, branch prediction
-->
---
layout: narrow
title: Logic Gates
---
<h4>Logic Gates</h4>
<p>The transistor allows for the control of the flow of current and voltage through a semiconductor. A semiconductor is a material with 
relatively moderate conductance, less than that of conductors, more than that of insulators. Electrical conductance is the reciprocal
of resistance, the more commonly used metric. The resistance of a material is defined as the ratio of the voltage across the material to 
the current passing through the material, \(R=\frac{V}{I}\).</p>
<p>Silicon is a semiconductor. A silicion atom has fourteen electrons, four of which are valent electrons, each of which form covalent bonds
with the valent electrons of other silicon atoms to create a stable lattice structure. The silicon lattice can be p-doped with a material 
with a lesser amount of valent electrons or n-doped with a material with a greater amount of valence electrons. In either case, doping 
increases the conductance of the semiconductive material.
<img src="/Assets/images/silicon.png" width="100%" height="100%">
A sandwich of n-doped and p-doped terminals in a transistor will form depletion layers betwen each connected terminal, as the positive and negative 
charges neutralise. A small positive voltage can be applied to the insulated gate, essentially breaking the depletion layer and allowing
for the flow of current across the transistor. Thus, we can apply a voltage to change the information state of the transistor, which encodes
one bit of information, on or off.
<img src="/Assets/images/transistor.png" width="50%" height="50%"></p>
<p>We can use transistors with basic circuit elements to create logic gates. The circuit designs for AND, OR, XOR, and NOT are as follows:  
<img src="/Assets/images/ttl_logic.png" width="100%" height="100%"></p>
<p>We can use these logic gates to create basic arithmetic units called adders and subtractors. The left logic gate diagrams show that of the
half-adder and half-subtractor, whilst the right logic gate diagrams show that of the full adder (includes a carry bit) and full subtractor (includes a borrow
bit):
<img src="/Assets/images/adders.png" width="100%" height="100%">
<img src="/Assets/images/subtractors_with_twos_complement.png" width="100%" height="100%">
\[
  \begin{array}{| c | c | c | c}
  A & B & S & C \\
  \hline
  T & T & F & T \\
  T & F & T & F \\
  F & T & T & F \\
  F & F & F & F \\
  \end{array}

  \quad
  
  \begin{array}{| c | c | c | c}
  A & B & C_{in} & S & C_{out} \\
  \hline
  T & T & T & T & T\\
  T & T & F & F & T\\
  T & F & T & F & T\\
  T & F & F & T & F\\
  F & T & T & F & T\\
  F & T & F & T & F\\
  F & F & T & T & F\\
  F & F & F & F & F\\
  \end{array}

  \quad 

  \begin{array}{| c | c | c | c}
  P & Q & D & B \\
  \hline
  T & T & F & F \\
  T & F & T & F \\
  F & T & T & T \\
  F & F & F & F \\
  \end{array}

  \quad
  
  \begin{array}{| c | c | c | c}
  P & Q & B_{in} & D & B \\
  \hline
  T & T & T & T & T\\
  T & T & F & F & F\\
  T & F & T & F & F\\
  T & F & F & T & F\\
  F & T & T & F & T\\
  F & T & F & T & T\\
  F & F & T & T & T\\
  F & F & F & F & F\\
  \end{array}
\]<br></p>
<p>By introducing the concept of subtraction beyond zero, and thus the set of negative numbers, we need a way of converting positive 
and negative numbers. We can do this by negating the binary string (one's complement) and adding one (two's complement), visualised 
in the arch diagram above. The logic gates discussed thus far can easily be extended for larger bit inputs. Here are the 8-bit equivalents
of some of the logic gates we have covered:
<img src="/Assets/images/basic_8bit_gates.png" width="100%" height="100%"></p>
<p>Our \(n\)-bit adders and subtractors operate in \(O(n)\) time, since the carry bit has to propagate through \(n\) individual components.
We refer to these designs as the ripple-carry adder and the ripple-borrow subtractor. We can use a look-ahead design to achieve \(O(\log(n))\)
addition and subtraction.</p>
<p><img src="/Assets/images/carry_lookahead.png" width="100%" height="100%">
We precompute each carry bit using AND and OR gates in accordance with the above mathematical logic. The trade-off here is between 
propagation delay and hardware complexity. The hardware cost becomes unacceptable when adding signficantly larger bit-strings, such as 
2048-bit SSL encryption. The design is extensible to larger bit strings, for instance we could replace each full adder in our 8-bit 
ripple-carry adder design with a 4-bit carry lookahead adder design, making a 32-bit adder that combines both designs.</p>
<p>Rather than creating a near-identical design for a borrow lookahead subtractor, we can instead realise that \(x - y\) is equivalent 
to \(\neg(\neg x + y)\) and thus implement our subtraction functionality with negation and addition, which we have already implemented.
We can think of this with regards to a computer's Arithmetic and Logic Unit, which operates on two input operands \(x, y\). In the naive
approach, there exist one dedicated combinational chip for each operator. As we have seen with the example of subtraction,
there exist ways to derive the functionality of multiple operators from a smaller set of operators.</p>
<p><img src="/Assets/images/alu_logical_reductions.png" width="100%" height="100%"></p>
<p>Lets now look to binary multiplication and division, both of which are reasonably more complex than addition and subtraction. The truth
table for two-bit binary multiplication is simply AND, as the output is one if and only if both inputs are one, otherwise the presence of a 
zero ensures that the output is zero. We find each bit of one operand multiplied by each bit of the other operand, making for \(n^2\)
partial products that are shifted left by a number of bits proportional to the magnitude of the operand to create a parallelogram. We 
then repeatedly sum the partials (visualised by dot groupings) until we arrive at the final number, which will require two n-bit registers
to store for the operands of size \(n\). Note that the left and bottom edge of said parallelogram can be negated for compatibility with 
two's complement (and thus multiplication of signed integers).
<img src="/Assets/images/binary_multiplication.png" width="100%" height="100%"></p>
<p>Like multiplication, which can be achieved through iterative addition, division can be achieved through iterative subtraction. 'Fast'
division attempts to be more computationally efficient by approximating and then converging towards the correct quotient. The Goldschmidt
algorithm uses this approach.</p>
<p>So far we have only covered circuits implementing combinational logic. By introducing memory units, we introduce the concept of finite state 
machines, that have the ability to read and evaluate instructions written in formal languages. The foundational circuit of any memory 
unit, is the electronic flip-flop, which stores one bit of information. Lets have a look at SR, JK and D flip-flop designs:
<img src="/Assets/images/digital_flip_flops.png" width="100%" height="100%">
\[
  \begin{array}{| c | c | c | c |}
  S & R & Q_{t+1} & \overline{Q_{t+1}} \\
  \hline
  T & T & ? & ? \\
  T & F & T & F \\
  F & T & F & T \\
  F & F & Q_t & \overline{Q_t}\\
  \end{array}

  \quad
  
  \begin{array}{| c | c | c | c | c | c |}
  CLK & J & K & Q_{t+1} & \overline{Q_{t+1}} \\
  \hline
  T & T & T & \overline{Q_t} & Q_t \\
  T & T & F & T & F \\
  T & F & T & F & T \\
  T & F & F & Q_t & \overline{Q_t}\\
  F & T & T & Q_t & \overline{Q_t}\\
  F & T & F & Q_t & \overline{Q_t}\\
  F & F & T & Q_t & \overline{Q_t}\\
  F & F & F & Q_t & \overline{Q_t}\\
  \end{array}

  \quad

  \begin{array}{| c | c | c | c |}
  CLK & D & Q_{t+1} & \overline{Q_{t+1}} \\
  \hline
  T & T & T & F \\
  T & F & F & T \\
  F & T & Q_t & \overline{Q_t} \\
  F & F & Q_t & \overline{Q_t}\\
  \end{array}
\]
Wrapping the Data Flip-Flop (DFF) in a simple 2-bit multiplexor gives us a singular one-bit register, for which input values can be loaded
for storage. The multiplexor can be extended for any n-bit architecture. An arbirtraily large demultiplexor can be used to route the input
value to one of an arbitrarily large set of registers. This is performed via an address bus to store the load value.
<img src="/Assets/images/dff.png" width="100%" height="100%"></p>
<p>
\[
  \begin{array}{| c | c | c | c |}
  P & S & y_1 & y_2 \\
  \hline
  T & T & F & T \\
  T & F & T & F \\
  F & T & F & F \\
  F & F & F & F \\
  \end{array}

  \quad
  
  \begin{array}{| c | c | c | c |}
  S & P & Q & y \\
  \hline
  T & T & T & T \\
  T & T & F & F \\
  T & F & T & T \\
  T & F & F & F \\
  F & T & T & T \\
  F & T & F & T \\
  F & F & T & F \\
  F & F & F & F \\
  \end{array}
\]</p>
<p>Another operation that is useful to realise in hardware is that of the logic shift. This is where we shift the bit-string a register
contains, left or right. This shift can be zero-filled (the new bit is zero), sign-extended (the new bit is zero if left-shifted and
equal to the MSB if right-shifted), or rotated (the new bit is equal to the discarded bit). This is very easily realised in hardware, where
simple rewiring will suffice.</p>
<p><img src="/Assets/images/logical_shifts.png" width="100%" height="100%">
To avoid looping our one-bit shifts to achieve \(n\)-bit shifts, we can use the more computationally efficient barrel-shift hardware design.</p>
<p><img src="/Assets/images/barrel_shift_designs.png" width="100%" height="100%"></p>
<p>The idea behind the barrel-shift design is that we can express any \(n\)-bit binary number as the sum of powers of two. Three bits
express 8 possible shifts, four bits express 16 possible shifts, five bits express 32 possible shifts, and so on. These shift values range
from 0 to \(n-1\) for an \(n\)-bit architecture, excluding an \(n\)-bit shift which is acceptable since an \(n\)-bit shift will output 
one, zero or the input with no change. We can implement the wiring of \(k\) shifts where \(n = 2^k\), and then use multiplexors to decide
which of these \(k\) shifts we want to apply. Shift registers can also be implemented, that is a register that undergoes a shift operation 
automatically every clock cycle. These registers find application in encryption and pseudo-random number generation.</p>
<p>We can use Field-Programmable-Gate-Arrays (FPGAs) to implement our digital circuits in hardware in a non-permanent fashion. FPGAs are comprised
of Look-Up-Tables (LUTs) that replace combinational units. These LUTs contain SRAM bits which store the values of a given combinational unit's truth-table.
Determining the output for a given input thus involves multiplexing the SRAM outputs with a given input as the load address.
Because this look-up-table exists as SRAM, the functionality the LUT implements can be changed dynamically by loading new truth-tables to 
the SRAM. SRAM is RAM that despite being volatile does not need memory refresh to maintain state, unlike DRAM
(still used for its lower transistor count).<img src="/Assets/images/fpga_1.png" width="100%" height="100%"></p>
<p>The FPGA is comprised of a large set of Input-Output Blocks (IOBs) and Control Logic Blocks (CLBs). The CLBs are themselves comprised of flip-flops,
multiplexors, demultiplexors, and Look-Up-Tables. The FPGA needs to be able to optimise any hardware description we throw at it. It does this
by finding the minimum-cost expression from an expression in CNF form that describes the functionality of our hardware. This can be 
manually performed through use of the combing and uniting properties of boolean algebra which are \(\;xy + x\bar{y} = x\;\) and \(\;(x + y)(x + \bar{y}) = x\;\) respectively. 
Let us consider these properties and the logical reduction they
allow for with an example.
\[
  \displaylines{ 
  f(x_1, x_2, x_3) = \bar{x}_1\bar{x}_2\bar{x}_3 + \bar{x}_1x_2\bar{x}_3 + x_1\bar{x}_2\bar{x}_3 + x_1\bar{x}_2x_3 + x_1x_2\bar{x}_3 \\
  = \bar{x}_1\bar{x}_3 + x_1\bar{x}_3 + x_1\bar{x}_2 \\
  = \bar{x}_3 + x_1\bar{x}_2
  }
\]
More efficient methods than manual logic reduction and Karnaugh mapping exist and are used in FPGA synthesis. These include the Quine-McCluskey
and the ESPRESSO algorithm.
</p>
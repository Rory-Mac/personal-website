---
layout: default
mode: narrow
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
Create a sandwich of n-doped and p-doped terminals will form depletion layers betwen each connected terminal, as the positive and negative 
charges neutralise. A small positive voltage can be applied to the insulated gate, essentially breaking the depletion layer and allowing
for the flow of current across the transistor. Thus, we can apply a voltage to change the information state of the transistor, which encodes
one bit of information, 'on' or 'off'.
<img src="/Assets/images/transistor.png" width="50%" height="50%"></p>
<p>We can use transistors with basic circuit elements to create logic gates. The circuit designs for AND, OR, XOR, and NOT are as follows:  
<img src="/Assets/images/ttl_logic.png" width="100%" height="100%"></p>
<p>We can use these logic gates to create basic arithmetic units called adders. The left logic gate diagram shows that of a half-adder, whilst
the right logic diagram shows a full adder (includes a carry bit):
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
<p>By introducing the concept of subtraction beyond zero, and thus the set of negative numbers, we need a way to convert between positive 
and negative binary numbers. This is done by inverting the binary string (one's complement) and adding one (two's complement), visualised 
in the somewhat out-of-place arch diagram above. It should also be noted that the logic gates discussed thus far have operated only on either
one or two bits, with the exception of the full adder and its 3-bit input. However, the logic of these gates can easily be easily extended
to larger binary inputs. Here are the 8-bit equivalents of some of the logic gates we have covered:
<img src="/Assets/images/basic_8bit_gates.png" width="100%" height="100%"></p>
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
algorithm is an example of a fast division algorithm.


</p>
<p>So far we have only circuits implementing combinational logic. By introducing memory units, we introduce the concept of finite state 
machines, that have the ability to read and evaluate instructions written in formal languages. The foundational circuit of any memory 
unit, is the electronic flip-flop, which stores one bit of information. Lets have a look at SR, JK and D flip-flop designs:
<img src="/Assets/images/digital_flip_flops.png" width="100%" height="100%">
\[
  \begin{array}{| c | c | c | c}
  S & R & Q_{t+1} & \overline{Q_{t+1}} \\
  \hline
  T & T & ? & ? \\
  T & F & T & F \\
  F & T & F & T \\
  F & F & Q_t & \overline{Q_t}\\
  \end{array}

  \quad
  
  \begin{array}{| c | c | c | c | c | c}
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

  \begin{array}{| c | c | c | c}
  CLK & D & Q_{t+1} & \overline{Q_{t+1}} \\
  \hline
  T & T & T & F \\
  T & F & F & T \\
  F & T & Q_t & \overline{Q_t} \\
  F & F & Q_t & \overline{Q_t}\\
  \end{array}
\]
Wrapping the Data Flip-Flop (DFF) in a simple 2-bit multiplexor gives us a singular one-bit register, for which input values can be loaded
for storage.
<img src="/Assets/images/dff.png" width="100%" height="100%">
The multiplexor can be extended for any n-bit architecture. An arbirtraily large demultiplexor can be used to route the input value to one
of an arbitrarily large set of registers. This is performed via an address bus to store the load value.</p>
<p><img src="/Assets/images/fpga_1.png" width="100%" height="100%">

</p>

<!--
Input-Output Blocks
Control Logic Blocks
CLB (LUT, FFs, Muxes/Demuxes)
SRAM versus DRAM
-->
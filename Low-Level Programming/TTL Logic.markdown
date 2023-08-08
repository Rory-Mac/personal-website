---
layout: default
mode: narrow
title: TTL Logic
---
<h4>TTL Logic</h4>
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
<img src="/Assets/images/adders.png" width="100%" height="100%"></p>
<p>Our logic gates have thus far operated on either one or two bits, with the exception of the full adder and its 3-bit input. The logic of
these gates can easily be extended to larger bit-inputs. Consider the 8-bit extensions of some of the logic gates we have thus far covered:
<img src="/Assets/images/basic_8bit_gates.png" width="100%" height="100%"></p>
<p>

</p>
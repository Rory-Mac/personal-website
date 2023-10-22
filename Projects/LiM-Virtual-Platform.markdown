---
layout: narrow
title: FPGA-2-TCP
---
<h4>LiM-Virtual-Platform</h4>
<p>LiM-Virtual-Platform is a hobby project I undertook to familiarise myself with lower-level programming. The goal was to create a
virtual computer from scratch using a hardware description language to describe all components and interconnects, and an FPGA board to
synthesise the prototype into working virtual hardware. I sought to make the project R64I-compliant by designing the computer architecture
to implement the 64-bit RISC-V Instruction Set Standard. In the early stages of the project I descibed all digital circuitry in absolute
detail. It was only later that I realised just how effective modern synthesis engines are. Specifically, I compared the RTL schematics of
the barrel-shift design I wrote in a hundred lines of code, to the RTL schematics of a barrel-shift design I wrote in single-digit 
lines of code using higher-level language constructs. Unsurprisingly, the synthesised schematics were identical.</p>
<p><img src="/Assets/images/barrel_shifter.png" width="100%" height="100%"></p>
<p>Although I was impressed by the expressiveness of hardware description languages, the ordeal of creating all core computational
components, including main memory, the core register set, the control unit and the ALU, proved to be quite extensive and time-consuming.
This was especially true given the finicky nature of behavioural signal-simulations and the complexity of the R64I language (certainly
better than any CISC counterpart, but 160 manual pages nonetheless).</p>
<p><img src="/Assets/images/block_diagram.png" width="100%" height="100%"></p>
<p>Having interconnected all core components and created a RISC-V assembler in python, the project's initial objective was
fulfilled. I had constructed a R64I-compliant virtual machine from scratch using VHDL. However, the usefulness of the project 
left much to be desired. This is because it exists as a black box that can only be interacted with via a unidirectional JTAG bitsream 
(for synthesis and initialisation of block memory), and only tested via behavioural signal simulations. The next step I plan to take,
amongst many others, is to define an AXI master bus to interface with an IP MAC core that will communicate over an Ethernet PHY to the host device.
This link will act as bidirectional MMIO, and enable the processing of simple video graphics and keyboard presses managed by a simple kernel
syscall interface that I've already written and assembled. I'm excited for what's to come.</p>



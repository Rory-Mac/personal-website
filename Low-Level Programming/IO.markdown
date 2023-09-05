---
layout: narrow
title: IO
---
<h4>I/O</h4>
<p>I/O (Input/Output) describes the boundary between an information processing system and its external environment. Communication
protocols and design standards are necessary to make information exchange between information processing systems efficient. Rather than have
\(n\) devices with \(n\) means of communication compute \(n\) means of communication with one another, it is more efficient to have \(n\)
devices agree to one standard to compute one means of communication with one another. Although this works in theory, 
disagreement regarding which standard should be chosen typically results in far more than one being used. This is further accentuated by 
the fact that updates to older versions of standards and protocols take time to be adopted by impacted devices.</p>
<p>I/O exists in all levels of computational abstraction. The electric signals pre and post transmission through electrical 
wires exist as I/O. Data passed to and returned from any gate-level circuit design exists as I/O. Data passed between a host machine and 
its peripheral devices exists as I/O. Data passed between a host machine and any network device exists as I/O. Its all input-output from
the ground up, where standards and protocols exist to match any level of abstraction we may be operating on.
</p>
<p>Lets look to the USB (Universal Serial Bus) industry standard as our first example. It is a standard for connecting peripheral devices
to host machines that allows for hot-swapping (the host does not require reboot if a new USB-peripheral device is swapped for an old one)
and plug-n-play (host can identify and interpret a new USB-peripheral device with appropriate device driver spontaneously). The Type-A USB,
which consumers are likely most familiar with at present, has four pins, VCC, GND, D- and D+. VCC is the voltage of the power supply, GND
is a return path for electric current to dissipate, D- and D+ exist as a differential pair. Differential pairs are complementary electric
signals, where one is the inversion of the other, equal in magnitude but opposite in polarity. A receiver subtracts the differential pairs
to give the output, expressed as the following \(V = V_1 - V_2 = 2V_2\), since \(V_2 = -V_1\) and \(V\) is the output signal.






</p>

<!--
USB communication protocol
compatibility (baud rate, etc)
UART microchips
FIDI microchips
PMOD as alternative
-->
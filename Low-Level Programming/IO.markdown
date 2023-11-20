---
layout: narrow
title: IO
---
<h4>Input/Output</h4>
<p>Input/Output (I/O) describes the boundary between an information processing system and its external environment. Communication
protocols and design standards are necessary to make information exchange between information processing systems efficient. Rather than have
\(n\) devices with \(n\) means of communication compute \(n\) means of communication with one another, it is more efficient to have \(n\)
devices agree to one standard and compute one means of communication with one another. The standard to be used for a particular data
interface is prone to disagreement, typically resulting in some number of standards between one and a number signficantly smaller than \(n\).
I/O exists in all levels of abstraction. The electric signals pre and post transmission through digital circuitry exist as I/O.
Data passed to and returned from any gate-level circuit design exists as I/O. Data passed between a host machine and its peripheral devices 
exists as I/O. Data passed between a host machine and any network device exists as I/O. Standards and protocols exist to match any level of
abstraction we may be operating on.</p>
<p><img src="/Assets/images/voltage_signals.png" width="100%" height="100%"></p>
<p>In its most primitive form, input/output exists as the digital signals passed between two devices. The two uppermost signals are idealised,
one representing a clock cycle to synchronise other digital signals, and the other showing a digital signal with no propagation delay. The
next two signals incorporate a propagation delay, but still ensure that any information state change occurs within the clock cycle. The 
lowermost digital signal is a differential signal, and is not synchronised with the clock. A differential signal, or differential pair, 
is a signal that exists as two complementary electric signals, where one is the inversion of the other, equal in magnitude but opposite in
polarity. A receiver subtracts the differential pairs to give the output, expressed as the following \(V = V_1 - V_2 = 2V_1\;\) since 
\(V_2 = -V_1\). In synchronous transmission, bit-encoding electric signals are transmitted over a channel between a sending and receving
device that are synchronised to a given clock cycle. In asynchronous transmission, the sending and receiving devices are not synchronised
to a given clock cycle, instead, the encoded data is passed as pulses from one device to another interspersed by an idle state.</p>
<p><img src="/Assets/images/asynchronous_transmission.png" width="100%" height="100%"></p>
<p>In the simplest form of asynchronous transmission, the channel exists in an idle state represented by a continuous logical high 
encoding a continuous stream of ones, that is interrupted by 'start' zero bits followed by package data of fixed size. A 'stop' one bit
then re-initiates the idle state. Packet transmission over asynchronous channels exists for any computer processor capable of processing
interrupts from peripheral devices (keyboards, monitors, attached processing units, network interface cards, etc). When creating these data
channels we have to consider factors of compatibility between the sending and receiving devices. This includes ensuring compatible voltage 
levels (encoding logical high, logical low and other signal values), baud rate (bits per second), data formatting and packet formatting.</p>
<p><img src="/Assets/images/asynchronous_heuristic.png" width="100%" height="100%"></p>
<p>We can think of asynchronous transmission in a more abstract sense, as two cores of computation producing and consuming packet data
over an asynchronous channel. The system is overwhelmed if the rate at which packets are produced exceeds the rate at which they are
transferred or consumed. Packets can be queued to an extent, and then dropped, if bottle-necked at the sending or receiving edge.</p>
<h4>Universal Serial Bus (USB)</h4>
<p>Like our more primitive sender/receiver, data exchange in the USB standard consists of the asynchronous transfer of packets across an
otherwise idle channel. Buffers exist on either side of this channel to allow for the processing of asynchronous signals. In type-A USB,
data exchange occurs across two of four pins: VCC, GND, D- and D+, where D exists as a differntial pair. The USB standard defines four 
packet formats.</p>
<p><img src="/Assets/images/USB_packet_formats.png" width="100%" height="100%"></p>
<p>A constant logical high signal interspaces the transmission of USB packets, and is interrupted by the first bit field of incoming 
packets, the sync field. This bit field is composed of eight alternating ones and zeros to break the logical high. The next bit field is 
the 8-bit packet identifier, which defines 14 packet types, four for each packet format. The identifier itself is only 4-bits which is then
complemented with its negation for the purpose of error detection.</p>
<p><img src="/Assets/images/USB_pids.png" width="100%" height="100%"></p>
<p>For handshake packets, no further bit-fields are required except an EOP, which is comprised of a single-ended zero (where both signals
in the differential pair are pulled to zero) for two-bits time followed by a J state (where both signals in the differential pair are
pulled to high) for one-bits time, followed by the continuation of the idle state. The start of frame packet is a packet repeatedly sent by
the host for each unit of a given time interval. It contains the added 11-bit frame number bit field, and a cyclic redundancy check.
Token packets have an additional address and ENDP bit field. The address bit field specifies the address of the receiving device while the 
endp bit field specifies an endpoint within said device.</p>
<h4>Ethernet</h4>
<p>Ethernet is a hardware specification for physical links that facilitate data transfer between devices on a computer network. 
Medium-Access-Control (MAC) is a specification for the packets that comprise said data transfer and the hardware that manages their 
transmission. The Ethernet PHY (physical) uses RJ45 plugged connectors at either side of the physical link. Host device operating systems
typically include a device driver to interface with a single MAC core on the network interface card, while routers interface with multiple 
MAC cores over an ethernet switch.
<p><img src="/Assets/images/ethernet_PHY.png" width="100%" height="100%"></p>
The MAC core acts as an asynchronous transceiver. Below is the AXI Ethernet Lite MAC core, an intellectual property module from AMD, 
that we can take as an example. Tx and Rx buffers feed into 'transmit' and 'receive' core processing regions which output directly to 
the physical region via a 'TX interface' and 'RX interface'. Within these regions are FIFO MAC frame queues, CRC generating and checking
modules for error-detection, and a transmission control unit for MAC frame padding and formatting. In the case of this IP core, MAC
interfaces with main memory via AXI.
<p><img src="/Assets/images/MAC_core.png" width="100%" height="100%"></p>
The MAC core has Tx and Rx clock signals, an outbound reset and interrupt signal, four transmission signals and three receiving signals. 
The transmission signals include the data to be transmitted, an enable output pin, as well as carrier sense and collision input pins.
The receiving signals include the data received, a data valid and a data error signal. Data read (if valid signal set) and data transmitted
are synced by the Tx and Rx clock signals respectively.
<h4>Advanced eXtensible interface (AXI)</h4>
<p>AXI is an on-chip bus communication protocol that can be used to interface IO devices with on-board modules. The AXI protocol consists
of five channels, two channels associated with a read instruction (data address, data returned), and three channels associated with a
write instruction (data address, data written, response returned). A data frame sent over a channel is termed a 'transfer' and occurs 
only on the rising edge of the device's clock cycle when both 'valid' and 'ready' bits are set. Thus, each signal is paired with a valid
and ready signal. There also exist additional slave interface response signals, a data write strobe signal to signify which bytes are to 
be written to the destination register, a clock pin, and a reset pin.
<p><img src="/Assets/images/AXI_overview.png" width="100%" height="100%"></p>
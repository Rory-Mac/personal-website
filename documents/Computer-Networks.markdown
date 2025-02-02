---
layout: narrow
title: Computer Networks
---
<h4>Computer Networks</h4>
<p>Information Theory sets the groundwork for computer networking, defining the limits of data transmission and reception over noisy and
noiseless channels. Bits of information encoding data are concatenated with bits of information encoding properties of data
and its transmission. This forms a payload-header pair. Payloads are encapsulated by headers, headers are decapsulated to reveal payloads.
Network protocols outline a means of formatting outgoing data and interpreting incoming data, and are agreed upon by network devices to 
allow for communication between them. Encapsulation is recursive and thus network payloads are stacked: the header of a less abstract
network protocol encapsulates the header-payload pair of a more abstract network protocol. The physical layer is the most abstract layer, 
seated beneath all network layers. It refers to the physical medium by which bits of information are transmitted and received. The physical 
medium is wired or wireless, shared or exclusive. If the communication channel is shared between network devices, consideration has to be
given to managing collisions (interference caused when network devices transmit data simultaneously).</p>
<p><img src="/Assets/images/physical_layer.png" width="100%" height="100%"></p>
<p>There are three main categories of collision managagement: channel-partitioning, collision
detection and avoidance, and turn-taking. In the case of channel-partitioning, the channel is partitioned temporally in the case of wired
TDMA, or across frequency bands in the case of wireless FDMA. Channel-partitioning has the downside of limiting bandwidth per network device
seeing as idle partitions go unused. Alternatively, network devices can follow a collision detection and avoidance strategy by only
transmitting data if the network is idle and aborting transmissions if a collision is detected. The network device attempts retransmission
after a time that exponentially increases per sequential collision detected. In wireless networks, the hidden terminal problem observes
that two sending wireless device's transmission signals may interfer before reaching a receiving device, even though they are not in range
of one another, preventing collision detection. Thus wireless network devices will implement collision detection for small request-to-send 
packets. In the case of non-collision wireless access points will broadcast clear-to-send packets to all network devices in range. Data
exchange and acknowledgement occurs between the cleared device and the access point, of which all devices are aware. Finally, in a taking
turns strategy, collision is avoided entirely. A controller device invites nodes to transmit in turn, or a controller token is
passed sequentially across devices carrying transmitted data. This approach has significant latency cost however.</p>
<p><img src="/Assets/images/nodal_delay.png" width="100%" height="100%"></p>
<p>With regards to the physical medium, the main consideration is bandwidth, latency and throughput. Bandwidth is the capacity of the
physical link, how many bits per second can be transferred, throughput the amount of bits per second actually being transferred, and
latency the delay in milliseconds between the instruction to transmit data and the transmission of data itself. Packet delay is expressed
as the sum of delays encountered in data transmission.
\[ d_{nodal} = d_{proc} + d_{queue} + d_{trans} + d_{prop} \]
\[ \binom{n}{k} p^k (1-p)^{n-k} \> > \frac{c}{b} \]
Bernoulli trials can express the occurrence of network overload by considering the bandwidth of a physical link \(c\), total users \(n\),
active users \(k\), per-user bandwidth \(b\), and probability of active use \(p\).</p>
<p><img src="/Assets/images/data_link_frames.png" width="100%" height="100%"></p>
<p>The data-link layer follows from the physical layer, describing the packaging of data prior to transit across the physical medium.
Ethernet and 802.11 frames (packaged data at the physical and data-link layer) are de facto standards for wired and wireless data-link 
communication. Perhaps of most significance is the frame's Medium-Access-Control (MAC) address and the frame check sequence (FCS). MAC
addresses are flat 12-digit hexadecimal strings hard-coded by the manufacturer into the network interface card of a network device. They
are taken from an available block of MAC addresses allocated to the manufacturer by an international registering authority. Data-link
frame's have source and destination MAC fields to identify where transmitted data is going to and being sent from.</p>
<p>The FCS is the field used by data-link frame's for error-checking. As a simple example, we can take an ethernet frame, header and payload
included, and FCS set to 0, as a binary matrix. An additional row and column is used to identify the parity of each corresponding row and 
column in transmitted data. Parity errors are then likely detected by the receiving device in the case of transmission interference. Cyclic
Redundancy checking can be used instead, trading space complexity for computational complexity. In this case, the sender and receiver agree
upon a generator polynomial \(G\) of \(n\) bits. The sender computes the remainder from binary division of \(G\) against \(D\), where \(D\)
is the original payload concatenated with \(n\) zeros. The sender sends \(D\) plus the computed remainder. The receiver performs the same
division, and knows that a transmission error occurred if the computed remainder is non-zero.</p>
<p><img src="/Assets/images/switch_forwarding.png" width="100%" height="100%"></p>
<p>Switches can be used in place of bus topologies to allow multiple transmissions to occur simultaneously without collision. A switch 
has a set of physical interfaces that can connect to network devices. A pair of sender-switch and switch-receiver links can be transmitted
over if idle. Collision detection is still employed to detect and resolve transmission attempts across non-idle links. Switches store 
forwarding tables in memory. Each table entry exists as MAC address to physical interface mapping with a TTL. If the destination address of
a received frame exists in the forwarding table, it is forwarded over the corresponding interface. If not, the frame is broadcast to all
neighbours. If the source address of a received frame does not exist in the forwarding table, it is mapped to the physical interface it
was received over, and added to the forwarding table. Thus, any time device \(A\) contacts device \(B\) where \(B\) is a device that has
not been contacted before, all forwarding tables will be populated with \(A\). When \(B\) replies to \(A\) all forwarding tables on a path
between \(A\) and \(B\) will be populated with \(B\). A device \(C\) when contacting \(A\) will simply populated another forwarding table
chain with \(C\), or if contacting \(B\) will populate a tree of forwarding tables with \(C\) until the broadcast meets with the path to
\(B\) at which point a forwarding table chain will be populated with \(C\). Network exchange can occur between all network devices on a
multi-switch network using forwarding tables alone. However, this assumes a hierarchical design. If we introduce loops to the network 
topology, broadcast storms result from recurrent transmission of broadcast frames over a network loop.</p>
<p><img src="/Assets/images/spanning_tree_protocol.png" width="100%" height="100%"></p>
<p>Spanning Tree Protocol is a data-link protocol that makes loop multi-switch networks behave like hierarchical multi-switch networks.
Switches mutually converge towards a spanning tree network topology by making some loop links redundant. If the topology changes, STP can
derive a new spanning tree with new redundant and non-redundant links. Thus, STP acts as a means of loop-avoidance and fault-tolerance.
Every switch has a bridge ID (the concatenation of a bridge priority number and its MAC address) and initially assumes itself to be the 
root bridge. Bridge Protocol Data Units (BPDUs) are transmitted periodically. They contain a switch's min cost path to the root bridge 
(initially 0) and the root bridge ID. A switch will identify another switch as root if its bridge ID is lower than that of its own. A 
switch will update the root path cost field in the BPDU to include the link cost of the physical link over which the BPDU was received. 
Connected devices determine their link cost by a process of autonegotiation, finding the maximal transmission rate both can support.</p>
<p><img src="/Assets/images/BPDU.png" width="100%" height="100%"></p>
<p>BPDUs have additional timers to assist with convergence. The 'hello time' field identifies the rate at which the root bridge broadcasts
BPDUs. The 'max age' field identifies the time a switch will retain information transmitted from a root bridge before assuming an invalid
link. The 'forward delay' field identifies the time a switch spends in the learning state after exiting the blocking state and before entering
the forwarding state. In the blocking state a switch only interacts with BPDUs. In the learning state, a switch populates its forwarding
table but does not forward frames. In the forwarding state, the switch forwards received frames. Finally, STP attributes links as 
'root', 'designated' or 'blocking'. All interfaces over which BPDUS are received are blocked to avoid loops except the path of minimum cost
(the switch's root port). Other ports are designated ports. Traffic flows upstream to the root bridge via root ports, and downstream to
network switches via designated ports. More advanced protocols that extend STP include RSTP, to reduce converge time, MSTP, to integrate
with VLANs, or SPB, to consolidate these advantages.</p>
<p><img src="/Assets/images/network_layer.png" width="100%" height="100%"></p>
<p>The network layer follows from the data-link layer and defines data transmission across networks. The internet protocol is the global
standard network layer protocol and uses IPv4 or IPv6 addresses (four octets, eight four-digit hexadecimal strings) to uniquely identify
network devices. IP addresses are public, globally routable, and assigned by international registering authorities, save for a few private
address ranges reserved for use over local area networks. Internet routers use routing algorithms to derive optimal network paths between
source and destination, and populate their forwarding tables accordingly. This computation can be outsourced to remote controllers that 
install forwarding tables remotely, in the case of software-defined networking. ICMP is an additional network-layer protocol used for 
network diagnosis. Internet routers transmit ICMP packets back to source in the case of packet drop, TTL expiry or error-detection.
NAT is used in edge routers to map private addresses to an address that is globally routable, via translation tables consisting of 
source and mapped port/address two-tuples. IP packets are fragmented if they exceed the maximum transmission unit (MTU) of the data-link
layer, and are defragmented by the destination device. Minimum MTU along a network path is discovered by sending an initially large IP
packet with the DF bit set, and then IP packets equal in size to the MTU of the output link to drop the previous packet as indicated by 
the ICMP error response.</p>
<p><img src="/Assets/images/link_state_routing.png" width="100%" height="100%"></p>
<p>An autonomous system is a region of the internet operating under a single administrative entity. The role of these entities is to employ
intra-domain and inter-domain routing protocols to minimise average path cost for network traffic in transit both within and between 
autonomous systems. Routing protocols can be classed as link-state or distance-vector. In a link-state protocol, routers make recursive 
link-state broadcasts to all peers when the cost of an outgoing link changes. Routers only broadcast link-state updates with sequence number 
higher than the highest thus far received, to avoid duplicate broadcasts, and use a TTL initially set to the longest path route, to 
ensure that all routers are notified of the link-state change. Broadcasts follow a depth-first search traveral across the network, with each
node updating an internal representation of the global network topology for each received broadcast. Dijkstra's shortest path algorithm is
then applied to this internal topology by each router to derive optimal src-dest paths for routing. These algorithms are quadratic in time
complexity. Forwarding table construction is linear.</p>
<p><img src="/Assets/images/distance_vector_routing.png" width="100%" height="100%"></p>
<p> Distance-vector protocols are based upon the Bellman-Ford dynamic programming algorithm. If the costs from a vertex \(x\) to its
neighbors \(v\) are known, as is the minimum cost from each vertex \(v\) to a vertex \(y\), then the minimum cost path from \(x\) to \(y\)
is the minimum of those paired sums. 
\[ D_x(y) = min_v ( c_{x,v} + D_v(y) ) \]
A router broadcasts its distance vector to all peers when a change in link cost is observed. The distance vector is a table consisting 
of estimated path cost to all network routers alongside the neighboring routers from which those paths initiate. If a router's distance 
vector is updated in response to this broadcast, it will broadcast its own updated distance vector. Thus, broadcasting occurs recursively
until all distance vectors converge at compatible minimum cost forwarding tables. To ensure the avoidance of infinite loops, we introduce
the poisoned reverse rule. This states that if a node \(A\) determines its neighbor \(B\) to be the next hop in the minimum cost path to
\(C\), it will signal to \(B\) that its path to \(C\) is infinite.</p>
<p><img src="/Assets/images/TCP_UDP_packet_fields.png" width="100%" height="100%"></p>
<p>Next we introduce the transport layer, allowing for process-to-process communication between host devices. 
The transport layer introduces the source and destination port header fields. The port number is a 16-bit identifier used by 
the operating system to map packets to processes that are running on the host device. A socket is a software structure written to handle 
network traffic. Sockets can be created and bound to port numbers such that all packets received at the network interface card with the
same port number as the destination field are handled by the socket bound to that port number. TCP and UDP are the most ubiquitous protocols
used at the transport layer. UDP is a connectionless protocol: a receiver-side socket responds to all inbound traffic directed at its bound port.
TCP is a connection-oriented protocol: a welcoming socket creates additional TCP sockets to handle communication with the requesting sender.
TCP uses additional fields to achieve reliability of process-to-process communication between host devices, including flags (SYN/FIN/ACK) to
identify the type of message, sequence (SEQ) numbers to track bytes sent, and acknowledgement (ACK) numbers to track bytes received. TCP
connections are established through SYN/SYN-ACK/ACK handshakes with empty payloads. This is known as the three-way handshake.</p>
<p><img src="/Assets/images/network_exchange.png" width="100%" height="100%"></p>
<p>Reliable Data Transfer (RDT) protocols exist in a continuum from minimal to maximal measures taken to ensure reliability
over unreliable channels. In the simplest case, RDT 1.0, the channel itself is reliable, and no additional measures are taken. In RDT 2.0,
we imagine an unreliable channel in which transmitted data may be corrupted. In this case, the checksum field and ACK flag are used by the
receiver to notify the sender if the transmitted data was succesfully transmitted without error. If the response itself is corrupted, the
sender retransmits the data, and the receiver discards duplicate error-free packets. In RDT 3.0, we imagine an unreliable channel in which
transmitted data may be corrupted or lost entirely. This reflects network-layer conditions seeing as IP operates on a best-effort model
with no guarantee that sent packets will arrive at their intended destination. To ensure reliability under these conditions, the sender
uses a timeout and retransmits an unacknowledged packet upon its expiry, or after a three ACKs of the previous packet are encountered  
(the fast retransmit optimisation). This timeout is an exponentially weighted moving average derived dynamically from network conditions.
Additionally, data transfer is pipelined to make better use of available bandwidth. 
    \[ Timeout = EstimatedRTT + 4 \times DevRTT \]
    \[ EstimatedRTT = (1 - \alpha) \times EstimatedRTT + \alpha \times sampleRTT \]
    \[ DevRTT = (1 - \beta) \times DevRTT + \beta \times (SampleRTT - EstimatedRTT) \]
    \[ U_{sender} = \frac{L/R}{RTT + L/R} \]
</p>
<p><img src="/Assets/images/tcp_tahoe_reno.png" width="100%" height="100%"></p>
<p>TCP connections maintain a CWND (congestion window) value representing the number of packets that can be sent in a burst before awaiting 
receiver acknowledgment. Either we increment this window, packet by packet, and retransmit all packets in the window that succeed a lost
packet, or we keep track of each packet individually and only retransmit the lost packets themselves at the cost of additional 
computational overhead. These two strategies are referred to as 'go back N' and 'selective repeat', respectively. The CWND value will
also be dynamically limited by the RWND (receiving window) value advertised by the receiver, essentially notifying the sender of available
buffer space for received packets. This is TCP's means of congestion control, ensuring that senders limit throughput to the receiver 
handling capabilities. This avoids congestion collapse, the case where overwhelmed internet routers drop packets, causing senders to
retransmit packets, causing more internet routers in a network path to be overwhelmed and drop packets, causing throughput to approach
zero and delays to approach infinity. Additionally, CWND values are typically initialised through exponential slow-start phases that
then switch to AIMD congestion-avoidance when encountering timeouts, fast retransmits and other network events.</p>
<p>Finally, we arrive at the application layer. The application layer can be subdivided into applications that enhance the functionality
of the aforementioned network layers, and applications that exist to service the host device itself. Examples of the former include
ARP, DHCP, DNS, and TLS. Examples of the latter include HTTP, SMTP, FTP and SSH.</p>
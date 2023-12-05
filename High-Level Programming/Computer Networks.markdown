---
layout: narrow
title: Computer Networks
---
<h4>Computer Networks</h4>
<p>The lowest level of abstraction in computer networking is the physical layer, that is, the physical medium by which bits of data are transferred. Ethernet, Wi-Fi,
USB, Bluetooth and Fiber Optics, are all examples of physical layer standards. Network protocols exist as abstractions atop this physical layer, defining how raw data is 
formatted and sequenced into network packets before transmission. Transmission and reception of network packets is referred to as packet switching, and allows computers
on a computer network to maintain multiple simultaneous connections with one another. Network packets consist of a header, describing the data to be transferred, and a
payload, storing the data itself.</p>
<p><img src="/Assets/images/OSI_TCP_IP.png" width="100%" height="100%"></p>
<p>The OSI model and TCP/IP model are models used to categorise network protocols seated atop the physical layer. Each layer
corresponds to an instance of encapsulation, whereby the packets of the more abstract network protocol when combined with an additional header become the payload of the
less abstract network protocol. Packets may fragment into numerous network packets at less abstract network layers. Physical frames, such as an ethernet frame, format
packet data to enable transmission over a specific physical medium, such as ethernet. The payload of such a physical frame will be a frame belonging to a protocol
that deals with transmission control, error management, and interoperability between protocols. This is defined in the OSI stack by the MAC and Logic-Link sublayers of
the Data-Link layer.</p>
<p><img src="/Assets/images/MAC_frame_bitfields.png" width="100%" height="100%"></p>
<p>MAC (Medium Access Control), is a data-link protocol managing the exchange of data through a physical medium between nodes in a computer network. This is not to be
confused with MAC addresses, also known as physical or hardware addresses, which are unique identifiers stored in the firmware or read-only memory of a network interface
controller belonging to a host device. The payload of a MAC frame is the packet of a more abstract network protocol. Local network routers maintain a forwarding table
used to map MAC addresses to authenticated socket connections. This gives an efficient means of routing network traffic within local networks. To efficiently route 
packet data between networks, IP (Internet Protocol) addressing is introduced as an abstract layer atop the data-link/network-interface layers.</p>
<p>IP addresses are hierarchical in nature, 32-bits are subdivided into four octets in IPv4 (e.g. 192.168.0.1) and 128-bits are subdivided into eight 16-bit groupings
in IPv6 (e.g. 2001:0DB8:AC10:FE01:0000:0000:1a2f:1a2b). Network addresses can be subnetted to create subnetworks. For instance subnetting the network address
192.168.100.10 with the subnet mask 255.255.255.0 creates a subnetwork for which 255 devices can be connected. Local area networks are assigned private addresses,
which can not be assigned to public-facing devices. Within a private network, these addresses are mapped at the router edge to a public-facing IP address to allow for
communication between local network devices and publicly routable devices. Protocols such as the Network Address Translation protocol store port and address connections
in memory to map inbound traffic directed to the router back to the private address of the local device.</p>
<p><img src="/Assets/images/IP_packet_bitfields.png" width="100%" height="100%"></p>
<p>Just as physical and data-link layer switches maintain forwarding tables, internet routers maintain routing tables that map IP addresses to socket connections 
with neighbouring devices. Thus, inbound traffic can be directed based on IP address network prefixes. For instance the network address 192.9.200.15 directed to
the network address 192.9.202.10, may contain a routing table that maps 192.9.201.0 to an active connection that exists as a default route. In another case, where no
default route is known, the network address 192.9.0.0 may route to 192.9.201.0 and then 192.9.200.15 as such a network hop moves down the internet backbone towards
the target device.</p>
<p><img src="/Assets/images/internet_overview.png" width="100%" height="100%"></p>
<p>The structure of the internet can be viewed as a hierarchical network of networks. In an idealised form, we could image the internet as a 256-ary tree of depth 4
for each octet in IPv4 or depth 8 for each hexadecimal group in IPv6. The internet was not instantiated in this manner however, with the maximum number of networks
connecting the maximum number of devices. Instead, internet service providers will request allocation and registration of IP address blocks from internet registries.
These ISPs may be commercial, subnetting their available networks downsstream to a large number of consumer devices, or organisational, subnetting their available 
networks into various internal departments and subsidiaries. These ISPs will have various local routing policies, transit connections to IXPs, peerings with other
ISPs, etc. Each such network with its own policy set is referred to as an autonomous system (AS), interacting with other autonomous systems via the Application-layer
Border-Gateway Protocol (BGP).</p>
<p>With the physical/data-link layer and the internet/network layer accounted for, we have a protocol stack that enables host-to-host communication both within and
between local area networks. The subsequent layer, labelled the transport layer in both the OSI and TCP/IP model, enables the establishment of network sessions 
between host devices through a network exchange called a handshake. The best-known and most-used transport protocols are the Transmission Control Protocol (TCP) and
the User Datagram Protocol (UDP).</p>
<p><img src="/Assets/images/TCP_UDP_packet_fields.png" width="100%" height="100%"></p>
<p>The transport layer introduces the concept of network ports for data exchange. A network port is a software construct managed by the operating system, with a value
between 0 and 65535, mapped to a host application in runtime that will handle all inbound network traffic directed at that port. This allows a host device to run
multiple applications over distinct ports to handle multiple network connections, despite a shared physical transmission medium. UDP is a light-weight transport 
protocol, adding only a source and destination port, segment length and check sum value to the data to be transmitted. It is thus used in time-sensitive situations
where error checking is unnecessary, such as video-streaming and DNS lookups. UDP is a form of connectionless communication whilst TCP is a form of connection-oriented
communication. This is because TCP introduces the concept of a TCP handshake, establishing session between hosts.</p>
<p><img src="/Assets/images/TCP_Handshake.png" width="100%" height="100%"></p>
<p>The TCP handshake exists as a SYN + SYN/ACK + ACK exchange used to establish an initial sequence number that tracks data bytes transferred. The established connection
can be terminated through a FIN + ACK/FIN + ACK exchange initiated by either host. To increase efficiency of data transfer, TCP packets can be sent prior to acknowledgement
of the packets that preceded them. This creates out of order transmission errors that can be dealt by using the receiver's acknowledgment number as a count of data bytes
received thus far.</p>
<p>Application-Layer protocols sit at the highest level of abstraction in the network protocol stack, specifying data exchange between client and server programs in
runtime on host devices. Examples include DNS for domain-name resolution, SMTP for mail transfer, FTP for file transfer, SSH for remote shell access, HTTP for web page
loading and browsing, and TLS for secure data exchange.</p>